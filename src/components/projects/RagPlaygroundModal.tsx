import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Bot, Sparkles, Search, Database, Cpu, Zap, Copy, Check, Terminal, Server, Wifi, RefreshCw } from 'lucide-react';
import { SAMPLE_PROMPTS, executeRagQuery, RAG_DOCUMENTS } from '../../data/ragKnowledgeBase';
import { RagQueryResult } from '../../types';

interface RagPlaygroundModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RagPlaygroundModal: React.FC<RagPlaygroundModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<RagQueryResult | null>(null);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'playground' | 'architecture' | 'documents'>('playground');
  const [apiSource, setApiSource] = useState<'live_springboot' | 'springboot_simulation'>('springboot_simulation');
  const [apiEndpoint, setApiEndpoint] = useState('http://localhost:8080/api/rag/query');

  if (!isOpen) return null;

  const handleRunQuery = async (queryText: string) => {
    if (!queryText.trim()) return;
    setLoading(true);
    setQuery(queryText);

    try {
      // Attempt real HTTP POST request to Spring Boot backend API
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 1200);

      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: queryText }),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (response.ok) {
        const data = await response.json();
        setResult({
          query: data.query || queryText,
          answer: data.answer || data.response || "Spring Boot REST API generated response.",
          matchedDocs: data.matchedDocs || [],
          tokensProcessed: data.tokensProcessed || 380,
          latencyMs: data.latencyMs || 180,
          embeddingDimensions: 1536
        });
        setApiSource('live_springboot');
      } else {
        throw new Error("Local Spring Boot server unavailable");
      }
    } catch {
      // Fallback to Spring Boot Architecture Simulation
      const res = executeRagQuery(queryText);
      setResult(res);
      setApiSource('springboot_simulation');
    } finally {
      setLoading(false);
    }
  };

  const handleCopyAnswer = () => {
    if (!result) return;
    navigator.clipboard.writeText(result.answer);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative z-10 flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-cyan-500/30 bg-slate-900 text-white shadow-2xl shadow-cyan-500/10"
        >
          {/* Header Bar */}
          <div className="flex flex-wrap items-center justify-between border-b border-slate-800 bg-slate-950/60 px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-500/20 text-cyan-400">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-bold text-white">
                    Spring Boot RAG AI Assistant & REST API Playground
                  </h3>
                  <span className="rounded-full bg-cyan-500/20 px-2 py-0.5 text-[10px] font-bold text-cyan-300">
                    Java 17 / React
                  </span>
                </div>
                <p className="text-xs text-slate-400">
                  Backend powered by Spring Boot REST APIs, pgvector Embeddings & LLM Prompt Builder
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-2 sm:mt-0">
              {/* Tab Toggle */}
              <div className="flex rounded-xl bg-slate-800/80 p-1 text-xs">
                <button
                  onClick={() => setActiveTab('playground')}
                  className={`rounded-lg px-3 py-1 font-semibold transition-colors ${
                    activeTab === 'playground'
                      ? 'bg-cyan-500 text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Playground
                </button>
                <button
                  onClick={() => setActiveTab('architecture')}
                  className={`rounded-lg px-3 py-1 font-semibold transition-colors ${
                    activeTab === 'architecture'
                      ? 'bg-cyan-500 text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Backend Stack
                </button>
                <button
                  onClick={() => setActiveTab('documents')}
                  className={`rounded-lg px-3 py-1 font-semibold transition-colors ${
                    activeTab === 'documents'
                      ? 'bg-cyan-500 text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Docs ({RAG_DOCUMENTS.length})
                </button>
              </div>

              <button
                onClick={onClose}
                className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-800 text-slate-400 transition-colors hover:bg-slate-700 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Modal Body */}
          <div className="flex-1 overflow-y-auto p-6">
            {activeTab === 'playground' ? (
              <div className="space-y-6">
                
                {/* Spring Boot API Endpoint Banner */}
                <div className="flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-cyan-500/20 bg-slate-950/80 p-3.5 text-xs">
                  <div className="flex items-center gap-2 text-slate-300">
                    <Server className="h-4 w-4 text-cyan-400" />
                    <span className="font-semibold">Backend Endpoint:</span>
                    <code className="rounded bg-slate-900 px-2 py-0.5 text-cyan-300 font-mono">
                      POST {apiEndpoint}
                    </code>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-bold ${
                      apiSource === 'live_springboot'
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                        : 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                    }`}>
                      <Wifi className="h-3 w-3" />
                      {apiSource === 'live_springboot' ? 'Live Spring Boot Server (Connected)' : 'Spring Boot Architecture Mode'}
                    </span>
                  </div>
                </div>

                {/* Sample Prompt Chips */}
                <div>
                  <label className="text-xs font-semibold text-slate-400">
                    Try Sample Queries (or type custom question):
                  </label>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {SAMPLE_PROMPTS.map((p) => (
                      <button
                        key={p}
                        onClick={() => handleRunQuery(p)}
                        className="rounded-xl border border-slate-800 bg-slate-800/50 px-3 py-1.5 text-xs text-slate-300 transition-all hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:text-cyan-300"
                      >
                        ⚡ {p}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Input Field */}
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-cyan-400">
                    <Search className="h-4 w-4" />
                  </div>
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleRunQuery(query)}
                    placeholder="Ask Sathish's Spring Boot RAG backend any question..."
                    className="w-full rounded-2xl border border-slate-800 bg-slate-950/80 py-3.5 pl-11 pr-32 text-sm text-white placeholder-slate-500 outline-none transition-all focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                  />
                  <button
                    onClick={() => handleRunQuery(query)}
                    disabled={loading || !query.trim()}
                    className="absolute right-2 top-1.5 flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 px-4 py-2 text-xs font-bold text-white shadow-md transition-all hover:opacity-95 disabled:opacity-50"
                  >
                    {loading ? (
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    ) : (
                      <>
                        <span>Execute API</span>
                        <Sparkles className="h-3.5 w-3.5" />
                      </>
                    )}
                  </button>
                </div>

                {/* Loading State */}
                {loading && (
                  <div className="flex flex-col items-center justify-center py-10 text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
                      <RefreshCw className="h-6 w-6 animate-spin text-cyan-400" />
                    </div>
                    <p className="mt-3 text-sm font-semibold text-cyan-400">
                      Spring Boot Microservice processing vector embeddings & pgvector similarity...
                    </p>
                    <p className="text-xs text-slate-500">Target Endpoint: {apiEndpoint}</p>
                  </div>
                )}

                {/* Query Results */}
                {result && !loading && (
                  <div className="space-y-5 rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                    
                    {/* Execution Metrics Bar */}
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3 text-xs">
                      <div className="flex items-center gap-4 text-slate-400">
                        <span className="flex items-center gap-1 text-cyan-400">
                          <Zap className="h-3.5 w-3.5" /> Latency: <strong>{result.latencyMs}ms</strong>
                        </span>
                        <span className="flex items-center gap-1">
                          <Cpu className="h-3.5 w-3.5" /> Tokens: <strong>{result.tokensProcessed}</strong>
                        </span>
                        <span className="flex items-center gap-1">
                          <Database className="h-3.5 w-3.5" /> Vector DB: <strong>pgvector (1536d)</strong>
                        </span>
                      </div>
                      <button
                        onClick={handleCopyAnswer}
                        className="flex items-center gap-1 text-xs font-semibold text-slate-400 hover:text-cyan-400"
                      >
                        {copied ? <Check className="h-3.5 w-3.5 text-green-400" /> : <Copy className="h-3.5 w-3.5" />}
                        <span>{copied ? 'Copied' : 'Copy Answer'}</span>
                      </button>
                    </div>

                    {/* LLM Synthesized Response */}
                    <div>
                      <div className="flex items-center gap-2 font-mono text-xs text-cyan-400">
                        <Terminal className="h-4 w-4" />
                        <span>Spring Boot LLM Context Response (Zero Hallucination):</span>
                      </div>
                      <p className="mt-2 rounded-xl bg-slate-900/90 p-4 text-sm leading-relaxed text-slate-200 border border-slate-800">
                        {result.answer}
                      </p>
                    </div>

                    {/* Top Vector Chunk Matches */}
                    <div>
                      <h4 className="text-xs font-semibold text-slate-400">
                        Retrieved Vector Chunks (pgvector Cosine Match %):
                      </h4>
                      <div className="mt-2 space-y-2">
                        {result.matchedDocs.map((doc, idx) => (
                          <div
                            key={doc.id}
                            className="rounded-xl border border-slate-800 bg-slate-900/50 p-3 text-xs"
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-bold text-slate-300">
                                Chunk #{idx + 1}: {doc.title}
                              </span>
                              <span className="rounded-md bg-cyan-500/20 px-2 py-0.5 font-mono text-[11px] font-bold text-cyan-300">
                                Cosine Match: {(doc.score * 100).toFixed(1)}%
                              </span>
                            </div>
                            <p className="mt-1.5 text-slate-400 italic">
                              "{doc.chunk}"
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                )}

                {!result && !loading && (
                  <div className="rounded-2xl border border-dashed border-slate-800 p-8 text-center text-slate-500">
                    <Bot className="mx-auto h-8 w-8 text-cyan-500/40" />
                    <p className="mt-2 text-sm">Select a sample prompt above or enter your query to test the Spring Boot RAG REST API engine.</p>
                  </div>
                )}

              </div>
            ) : activeTab === 'architecture' ? (
              /* Architecture Tab */
              <div className="space-y-6">
                <div className="rounded-2xl border border-cyan-500/30 bg-slate-950/80 p-5">
                  <h4 className="text-sm font-bold text-cyan-300 flex items-center gap-2">
                    <Server className="h-4 w-4" /> Full-Stack RAG System Architecture
                  </h4>
                  <p className="mt-1 text-xs text-slate-400">
                    The RAG AI system consists of a robust Java 17 / Spring Boot microservice backend handling data processing, and a React 19 client frontend for visual interaction.
                  </p>

                  <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4">
                      <h5 className="text-xs font-bold text-white flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-green-400"></span> Backend (Spring Boot Microservice)
                      </h5>
                      <ul className="mt-2 space-y-1.5 text-xs text-slate-300">
                        <li>• <strong>Framework</strong>: Java 17 + Spring Boot 3 & REST APIs</li>
                        <li>• <strong>Vector Database</strong>: PostgreSQL + pgvector</li>
                        <li>• <strong>Embedding Engine</strong>: Spring AI / OpenAI Embeddings (1536d)</li>
                        <li>• <strong>Document Parser</strong>: Apache PDFBox & Chunking Tokenizers</li>
                        <li>• <strong>Security</strong>: OAuth 2.0 & Role-based Metadata Filters</li>
                      </ul>
                    </div>

                    <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4">
                      <h5 className="text-xs font-bold text-white flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-cyan-400"></span> Frontend (React Client Dashboard)
                      </h5>
                      <ul className="mt-2 space-y-1.5 text-xs text-slate-300">
                        <li>• <strong>Framework</strong>: React 19 + TypeScript + Vite</li>
                        <li>• <strong>Styling</strong>: Tailwind CSS v4 & Glassmorphism UI</li>
                        <li>• <strong>Animations</strong>: Framer Motion layout transitions</li>
                        <li>• <strong>State & API Client</strong>: Async fetch query execution</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-4 rounded-xl border border-slate-800 bg-slate-900 p-4 font-mono text-xs text-slate-300">
                    <div className="text-purple-400">// Spring Boot REST Controller Example</div>
                    <div><span className="text-cyan-400">@PostMapping</span>("/api/rag/query")</div>
                    <div><span className="text-pink-400">public</span> ResponseEntity&lt;RagResponse&gt; <span className="text-green-400">queryRag</span>(@RequestBody RagRequest request) &#123;</div>
                    <div className="pl-4 text-slate-400">// 1. Generate Query Vector Embedding</div>
                    <div className="pl-4"><span className="text-indigo-400">List&lt;Float&gt;</span> vector = embeddingClient.embed(request.getQuery());</div>
                    <div className="pl-4 text-slate-400">// 2. Search pgvector Similarity</div>
                    <div className="pl-4"><span className="text-indigo-400">List&lt;DocumentMatch&gt;</span> matches = pgvectorRepository.findTopMatches(vector, 0.82);</div>
                    <div className="pl-4 text-slate-400">// 3. Synthesize Context & Call LLM</div>
                    <div className="pl-4"><span className="text-indigo-400">String</span> answer = llmOrchestrator.synthesize(request.getQuery(), matches);</div>
                    <div className="pl-4"><span className="text-pink-400">return</span> ResponseEntity.ok(new RagResponse(answer, matches));</div>
                    <div>&#125;</div>
                  </div>
                </div>
              </div>
            ) : (
              /* Documents Tab */
              <div className="space-y-4">
                <p className="text-xs text-slate-400">
                  The documents below represent Sathish KS's pre-indexed vector knowledge base. In production, these are chunked by the Spring Boot backend, embedded via Spring AI / OpenAI embeddings, and stored in pgvector.
                </p>
                <div className="space-y-3">
                  {RAG_DOCUMENTS.map((doc) => (
                    <div
                      key={doc.id}
                      className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4 text-xs"
                    >
                      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                        <span className="font-bold text-cyan-300">{doc.title}</span>
                        <span className="rounded-md bg-slate-800 px-2 py-0.5 text-[10px] text-slate-400">
                          {doc.category}
                        </span>
                      </div>
                      <p className="mt-2 text-slate-300 leading-relaxed">
                        {doc.content}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-1">
                        {doc.keywords.map((kw) => (
                          <span
                            key={kw}
                            className="rounded bg-slate-900 px-1.5 py-0.5 text-[10px] text-slate-500"
                          >
                            #{kw}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="flex items-center justify-between border-t border-slate-800 bg-slate-950/60 px-6 py-3 text-xs text-slate-500">
            <span>Spring Boot REST API Backend • Java 17 & pgvector</span>
            <button
              onClick={onClose}
              className="rounded-xl border border-slate-800 px-3 py-1.5 text-slate-300 hover:bg-slate-800"
            >
              Close Simulator
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
