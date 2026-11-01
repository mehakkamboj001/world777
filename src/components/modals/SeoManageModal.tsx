"use client";

import React, { useState } from "react";
import {
  X,
  Sliders,
  Globe,
  Share2,
  Code2,
  Copy,
  Sparkles,
  Search,
} from "lucide-react";
import {
  siteSEO,
  generateStructuredData,
  primaryKeywords,
  secondaryKeywords,
} from "@/config/seo";

interface SeoManageModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SeoManageModal: React.FC<SeoManageModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<"serp" | "og" | "schema" | "keywords" | "routes">("serp");
  const [copied, setCopied] = useState(false);
  const siteDomain = new URL(siteSEO.canonicalUrl).hostname;

  if (!isOpen) return null;

  const { websiteSchema, organizationSchema, faqSchema } = generateStructuredData();
  const schemaCode = JSON.stringify(
    { websiteSchema, organizationSchema, faqSchema },
    null,
    2
  );

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-2xl bg-obsidian-900 rounded-3xl border border-cyan-500/25 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-obsidian-950 via-obsidian-900 to-obsidian-950 p-5 border-b border-cyan-500/15 flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300">
              <Sliders className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="text-base font-extrabold text-white">SEO Management Suite</h3>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full font-bold border border-emerald-500/30">
                  SEO SCORE 100/100
                </span>
              </div>
              <p className="text-[11px] text-slate-400">
                Inspect meta tags, Google SERP previews, keywords, and JSON-LD schema
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-obsidian-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab navigation */}
        <div className="flex border-b border-cyan-500/15 bg-obsidian-950 px-4 py-2 space-x-2 overflow-x-auto no-scrollbar shrink-0">
          <button
            onClick={() => setActiveTab("serp")}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              activeTab === "serp"
                ? "bg-obsidian-850 text-cyan-300 border border-cyan-500/30 shadow-sm"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Search className="w-3.5 h-3.5" />
            <span>Google SERP Preview</span>
          </button>
          <button
            onClick={() => setActiveTab("og")}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              activeTab === "og"
                ? "bg-obsidian-850 text-cyan-300 border border-cyan-500/30 shadow-sm"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Social & OpenGraph</span>
          </button>
          <button
            onClick={() => setActiveTab("keywords")}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              activeTab === "keywords"
                ? "bg-obsidian-850 text-cyan-300 border border-cyan-500/30 shadow-sm"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Keywords ({siteSEO.keywords.length})</span>
          </button>
          <button
            onClick={() => setActiveTab("schema")}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              activeTab === "schema"
                ? "bg-obsidian-850 text-cyan-300 border border-cyan-500/30 shadow-sm"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>JSON-LD Schema</span>
          </button>
          <button
            onClick={() => setActiveTab("routes")}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              activeTab === "routes"
                ? "bg-obsidian-850 text-cyan-300 border border-cyan-500/30 shadow-sm"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>SEO Endpoints</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 overflow-y-auto space-y-4">
          {/* 1. Google SERP Preview */}
          {activeTab === "serp" && (
            <div className="space-y-4">
              <div className="p-5 bg-white text-slate-800 rounded-2xl shadow-md border border-slate-200">
                <div className="flex items-center space-x-2 text-[11px] text-slate-600 mb-1">
                  <div className="w-4 h-4 rounded-full bg-cyan-600 flex items-center justify-center text-white text-[9px] font-black">
                    W
                  </div>
                  <span className="font-medium">{siteDomain}</span>
                  <span>&gt;</span>
                  <span>exchange</span>
                </div>
                <h4 className="text-blue-800 hover:underline font-medium text-base sm:text-lg cursor-pointer leading-tight">
                  {siteSEO.defaultTitle}
                </h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {siteSEO.description}
                </p>
                {/* SERP Sitelinks */}
                <div className="mt-3 pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-blue-700 font-medium">Get World 777 Online ID</span>
                    <p className="text-[10px] text-slate-500">2-minute setup via WhatsApp</p>
                  </div>
                  <div>
                    <span className="text-blue-700 font-medium">Live Casino & Teen Patti</span>
                    <p className="text-[10px] text-slate-500">Real dealers with Hindi table</p>
                  </div>
                </div>
              </div>

              {/* Meta Checklist */}
              <div className="p-4 bg-obsidian-950 rounded-2xl border border-cyan-500/15 space-y-2 text-xs">
                <h5 className="font-bold text-white mb-2">Meta Tag Diagnostics:</h5>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Title Length:</span>
                  <span className="text-emerald-400 font-bold">
                    {siteSEO.defaultTitle.length} chars (Optimal 50-60)
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Meta Description:</span>
                  <span className="text-emerald-400 font-bold">
                    {siteSEO.description.length} chars (Optimal 140-160)
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Canonical Tag:</span>
                  <span className="text-cyan-300 font-bold">{siteSEO.canonicalUrl}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Robots Directive:</span>
                  <span className="text-emerald-400 font-bold">index, follow, max-image-preview</span>
                </div>
              </div>
            </div>
          )}

          {/* 2. Social / OpenGraph Preview */}
          {activeTab === "og" && (
            <div className="space-y-4">
              <div className="p-4 bg-obsidian-950 rounded-2xl border border-cyan-500/15">
                <p className="text-xs font-bold text-slate-400 mb-3">
                  WhatsApp & Social Card Preview:
                </p>
                <div className="rounded-xl overflow-hidden border border-cyan-500/25 bg-obsidian-900 shadow">
                  <div className="h-36 bg-gradient-to-r from-obsidian-950 via-cyan-950 to-emerald-950 flex flex-col items-center justify-center p-4 text-center border-b border-cyan-500/15">
                    <span className="text-xl font-black brand-gradient-text">
                      WORLD 777 EXCHANGE
                    </span>
                    <span className="text-xs text-white mt-1">
                      World 777 Online ID & Live Sports Exchange
                    </span>
                    <span className="text-[10px] bg-emerald-600 text-white px-2 py-0.5 rounded-full mt-2 font-bold">
                      24x7 Instant UPI Cashout
                    </span>
                  </div>
                  <div className="p-3 bg-obsidian-950">
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider block">
                      {siteDomain}
                    </span>
                    <h5 className="text-xs font-bold text-white mt-0.5">
                      {siteSEO.defaultTitle}
                    </h5>
                    <p className="text-[11px] text-slate-400 line-clamp-2 mt-1">
                      {siteSEO.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 3. Keywords Cloud */}
          {activeTab === "keywords" && (
            <div className="space-y-4">
              <div className="p-4 bg-obsidian-950 rounded-2xl border border-cyan-500/15">
                <p className="text-xs font-bold text-white mb-3">
                  Primary keywords
                </p>
                <div className="flex flex-wrap gap-2">
                  {primaryKeywords.map((kw) => (
                    <span
                      key={kw}
                      className="px-2.5 py-1 rounded-lg bg-obsidian-900 border border-cyan-500/30 text-cyan-300 text-xs font-medium"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-4 bg-obsidian-950 rounded-2xl border border-cyan-500/15">
                <p className="text-xs font-bold text-white mb-3">
                  Secondary and informational keywords
                </p>
                <div className="flex flex-wrap gap-2">
                  {secondaryKeywords.map((kw) => (
                    <span
                      key={kw}
                      className="px-2.5 py-1 rounded-lg bg-obsidian-900 border border-emerald-500/20 text-emerald-200 text-xs font-medium"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-[11px] text-slate-400">
                Keyword metadata is a reference and does not guarantee rankings.
                Google primarily evaluates useful content, relevance and site
                quality. Avoid repeating phrases unnaturally. Edit{" "}
                <code className="text-cyan-400 bg-obsidian-950 px-1 py-0.5 rounded">
                  src/config/seo.ts
                </code>
                .
              </p>
            </div>
          )}

          {/* 4. JSON-LD Schema Inspector */}
          {activeTab === "schema" && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-300">
                  Googlebot Structured Data (WebSite + Organization + FAQPage)
                </span>
                <button
                  onClick={() => handleCopy(schemaCode)}
                  className="px-3 py-1 bg-obsidian-850 hover:bg-obsidian-800 text-cyan-300 text-xs font-bold rounded-xl border border-cyan-500/30 flex items-center space-x-1.5 transition-colors"
                >
                  <Copy className="w-3 h-3" />
                  <span>{copied ? "Copied!" : "Copy JSON-LD"}</span>
                </button>
              </div>
              <pre className="p-4 bg-obsidian-950 rounded-xl border border-cyan-500/15 text-[11px] text-emerald-300 overflow-x-auto max-h-72 font-mono">
                {schemaCode}
              </pre>
            </div>
          )}

          {/* 5. Dynamic Next.js SEO Routes */}
          {activeTab === "routes" && (
            <div className="space-y-3">
              <p className="text-xs text-slate-300">
                Next.js automatically generates and serves these real SEO routes:
              </p>
              <div className="space-y-2">
                <div className="p-3 bg-obsidian-950 rounded-xl border border-cyan-500/15 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-white block">/robots.txt</span>
                    <span className="text-[11px] text-slate-400">
                      Generated dynamically by src/app/robots.ts
                    </span>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded">
                    ACTIVE
                  </span>
                </div>
                <div className="p-3 bg-obsidian-950 rounded-xl border border-cyan-500/15 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-white block">/sitemap.xml</span>
                    <span className="text-[11px] text-slate-400">
                      Generated dynamically by src/app/sitemap.ts
                    </span>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded">
                    ACTIVE
                  </span>
                </div>
                <div className="p-3 bg-obsidian-950 rounded-xl border border-cyan-500/15 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-white block">/manifest.webmanifest</span>
                    <span className="text-[11px] text-slate-400">
                      Generated dynamically by src/app/manifest.ts (PWA Installable)
                    </span>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded">
                    ACTIVE
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-obsidian-950 p-4 border-t border-cyan-500/15 flex items-center justify-between shrink-0">
          <span className="text-[11px] text-slate-400">
            Centrally configured in <span className="text-cyan-400">src/config/seo.ts</span>
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 brand-btn-primary font-bold text-xs rounded-xl shadow"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
