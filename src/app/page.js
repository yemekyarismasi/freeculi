"use client";

import { useState } from "react";

export default function Home() {
  const [isLicensingOpen, setIsLicensingOpen] = useState(false);
  const [isSocialOpen, setIsSocialOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-blue-100 selection:text-blue-900 flex flex-col">
      {/* HEADER */}
      <header className="w-full max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 sm:gap-6 relative z-20 bg-white">
        <h1 className="text-2xl font-normal tracking-tight text-black">
          HFSCA Methodology: <span className="font-bold">Free</span><span className="font-bold text-blue-600">Culi</span>
        </h1>
        <p className="text-sm text-gray-500 font-medium uppercase tracking-wider text-left sm:text-right">Hands-Free Semantic Culinary Assistant</p>
      </header>

      {/* MODAL / TAB */}
      {isLicensingOpen && (
        <div 
          className="fixed inset-0 z-30 flex flex-col items-center justify-center bg-white/95 backdrop-blur-sm"
          onClick={() => setIsLicensingOpen(false)}
        >
          <div 
            className="max-w-2xl w-full p-8 md:p-12 bg-white border border-gray-200 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-3xl font-black mb-6">Commercial Licensing</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              FreeCuli is the commercial ingredient brand for the HFSCA methodology. While HFSCA represents the open-source architectural foundation, FreeCuli serves as the trademarked seal of quality and &quot;zero-cloud dependency&quot; for hardware manufacturers.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Hardware manufacturers embedding the HFSCA architecture in proprietary firmware must acquire a commercial license to avoid the AGPL-3.0 open-source obligation.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a 
                href="mailto:info@freeculi.com" 
                className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors text-center"
              >
                Contact Commercial Team
              </a>
              <button 
                onClick={() => setIsLicensingOpen(false)}
                className="w-full sm:w-auto px-6 py-3 border border-gray-300 text-black font-bold hover:bg-gray-50 transition-colors text-center"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SOCIAL MODAL */}
      {isSocialOpen && (
        <div 
          className="fixed inset-0 z-30 flex items-center justify-center bg-white/95 backdrop-blur-sm p-4"
          onClick={() => setIsSocialOpen(false)}
        >
          <div 
            className="w-full max-w-sm p-8 bg-white border border-gray-200 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setIsSocialOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-black transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            <h2 className="text-2xl font-black mb-8 text-center tracking-tight">Social Media</h2>
            <div className="flex items-center justify-center gap-6">
              {/* Instagram */}
              <a href="https://instagram.com/freeculi" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-blue-600 transition-colors transform hover:scale-110">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              {/* X */}
              <a href="https://x.com/freeculi" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-blue-600 transition-colors transform hover:scale-110">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
              </a>
              {/* YouTube */}
              <a href="https://youtube.com/@freeculi" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-blue-600 transition-colors transform hover:scale-110">
                <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              {/* TikTok */}
              <a href="https://tiktok.com/@freeculi" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-blue-600 transition-colors transform hover:scale-110">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.78-1.15 5.54-3.33 7.39-2.2 1.88-5.31 2.69-8.16 1.96-2.92-.76-5.26-3.08-6.15-5.99-.86-2.82-.41-6.13 1.63-8.41 1.95-2.16 5.05-3.04 7.82-2.31v4.24c-1.3-.39-2.8-.2-3.88.66-.99.78-1.5 2.14-1.25 3.39.22 1.15.99 2.18 2.05 2.64 1.25.56 2.82.36 3.79-.58.91-.87 1.34-2.19 1.32-3.48-.03-5.32-.01-10.64-.01-15.96l4.04-.01z"/></svg>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* MAIN CONTENT - Hidden visually when modal is open, but kept in DOM */}
      <main className={`flex-1 w-full max-w-5xl mx-auto px-6 pt-8 pb-8 transition-opacity duration-300 ${isLicensingOpen || isSocialOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        
        {/* HERO */}
        <section className="mb-10 max-w-3xl">
          <blockquote className="text-xl md:text-2xl font-light leading-snug text-gray-800 mb-8 border-l-4 border-black pl-6">
            “Every great technology is born from a critical problem that everyone accepts but no one dares to solve…”
          </blockquote>
          <p className="text-xl font-normal tracking-tight text-black">
            Zero cloud. Zero cost. Absolute freedom. Welcome to the era of FreeCuli!
          </p>
        </section>

        {/* ECOSYSTEM & RESEARCH */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-gray-200 pt-10">
          
          {/* Column 1 */}
          <div>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">APSNY Ecosystem</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://smartkitchenassistant.com" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-gray-900 hover:text-blue-600 transition-colors">
                  <div className="w-7 h-7 flex items-center justify-center bg-gray-50 group-hover:bg-blue-50 transition-colors rounded-md">
                    <svg className="w-4 h-4 text-gray-600 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                  </div>
                  <span className="font-normal text-base leading-none">Smart Kitchen Assistant</span>
                </a>
              </li>
              <li>
                <a href="https://yemekyarismasi.com/yemek-ai" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-gray-900 hover:text-blue-600 transition-colors">
                  <div className="w-7 h-7 flex items-center justify-center bg-gray-50 group-hover:bg-blue-50 transition-colors rounded-md">
                    <svg className="w-4 h-4 text-gray-600 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                  </div>
                  <span className="font-normal text-base leading-none">YEMEK AI</span>
                </a>
              </li>
              <li>
                <a href="https://smartkitchenassistant.com/#demo" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-gray-900 hover:text-blue-600 transition-colors text-left">
                  <div className="w-7 h-7 flex items-center justify-center bg-gray-50 group-hover:bg-blue-50 transition-colors rounded-md">
                    <svg className="w-4 h-4 text-gray-600 group-hover:text-blue-600 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </div>
                  <span className="font-normal text-base leading-none">Live Demo</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@freeculi.com" className="group flex items-center gap-3 text-gray-900 hover:text-blue-600 transition-colors">
                  <div className="w-7 h-7 flex items-center justify-center bg-gray-50 group-hover:bg-blue-50 transition-colors rounded-md">
                    <svg className="w-4 h-4 text-gray-600 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </div>
                  <span className="font-normal text-base leading-none">info@freeculi.com</span>
                </a>
              </li>
              <li>
                <button
                  onClick={() => setIsSocialOpen(true)}
                  className="group flex items-center gap-3 text-gray-900 hover:text-blue-600 transition-colors text-left w-full"
                >
                  <div className="w-7 h-7 flex items-center justify-center bg-gray-50 group-hover:bg-blue-50 transition-colors rounded-md">
                    <svg className="w-4 h-4 text-gray-600 group-hover:text-blue-600 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
                  </div>
                  <span className="font-normal text-base leading-none">Social Media</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIsLicensingOpen(true)}
                  className="group flex items-center gap-3 text-gray-900 hover:text-blue-600 transition-colors text-left w-full"
                >
                  <div className="w-7 h-7 flex items-center justify-center bg-gray-50 group-hover:bg-blue-50 transition-colors rounded-md">
                    <svg className="w-4 h-4 text-gray-600 group-hover:text-blue-600 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </div>
                  <span className="font-normal text-base leading-none">B2B Licensing</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Open Source & Research</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://github.com/yemekyarismasi/smart-kitchen-assistant" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline underline-offset-4 transition-all font-normal flex items-center gap-2">
                  <span className="text-gray-400">GitHub —</span> smart-kitchen-assistant
                </a>
              </li>
              <li>
                <a href="https://github.com/yemekyarismasi/smart-kitchen-voice-assistant" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline underline-offset-4 transition-all font-normal flex items-center gap-2">
                  <span className="text-gray-400">GitHub —</span> smart-kitchen-voice-assistant
                </a>
              </li>
              <li>
                <a href="https://github.com/yemekyarismasi/yemek-ai-whitepaper" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline underline-offset-4 transition-all font-normal flex items-center gap-2">
                  <span className="text-gray-400">GitHub —</span> yemek-ai-whitepaper
                </a>
              </li>
              <li className="pt-2">
                <a href="https://medium.com/@oytunciba/freeculi-the-new-global-standard-for-smart-kitchen-ai-17f0cfbea03d" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline underline-offset-4 transition-all font-normal flex items-center gap-2">
                  <span className="text-gray-400">Medium —</span> The FreeCuli Manifesto
                </a>
              </li>
              <li>
                <a href="https://medium.com/@oytunciba/why-big-tech-is-failing-at-the-smart-kitchen-and-how-we-solved-it-with-zero-cost-edge-ai-c471900da42e" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline underline-offset-4 transition-all font-normal flex items-center gap-2">
                  <span className="text-gray-400">Medium —</span> Why Big Tech Fails
                </a>
              </li>
              <li>
                <a href="https://medium.com/@oytunciba/how-we-solved-multimodal-ai-hallucinations-by-reverse-engineering-the-generative-pipeline-c4c68c2aa813" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline underline-offset-4 transition-all font-normal flex items-center gap-2">
                  <span className="text-gray-400">Medium —</span> Solving AI Hallucinations
                </a>
              </li>
            </ul>
          </div>

        </div>
      </main>

      {/* FOOTER */}
      <footer className="w-full max-w-5xl mx-auto px-6 py-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 z-20 bg-white">
        <p className="text-sm text-gray-500 font-medium">
          © {new Date().getFullYear()} FreeCuli open-source under <a href="https://github.com/yemekyarismasi/smart-kitchen-assistant/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">AGPL-3.0</a>.
        </p>
        <div className="flex items-center gap-4">
          <a href="https://yemekyarismasi.com" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-gray-400 hover:text-black transition-colors">
            Yemek AI Engineering
          </a>
        </div>
      </footer>
    </div>
  );
}
