"use client";

import { useState } from "react";

export default function Home() {
  const [isLicensingOpen, setIsLicensingOpen] = useState(false);

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

      {/* MAIN CONTENT - Hidden visually when modal is open, but kept in DOM */}
      <main className={`flex-1 w-full max-w-5xl mx-auto px-6 pt-8 pb-8 transition-opacity duration-300 ${isLicensingOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        
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
                <a href="https://smartkitchenassistant.com" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 text-gray-900 hover:text-blue-600 transition-colors">
                  <div className="w-10 h-10 flex items-center justify-center bg-gray-50 group-hover:bg-blue-50 transition-colors">
                    <svg className="w-5 h-5 text-gray-600 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                  </div>
                  <span className="font-normal text-lg">Smart Kitchen Assistant</span>
                </a>
              </li>
              <li>
                <a href="https://yemekyarismasi.com/yemek-ai" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 text-gray-900 hover:text-blue-600 transition-colors">
                  <div className="w-10 h-10 flex items-center justify-center bg-gray-50 group-hover:bg-blue-50 transition-colors">
                    <svg className="w-5 h-5 text-gray-600 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                  </div>
                  <span className="font-normal text-lg">YEMEK AI — Flagship Assistant</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@freeculi.com" className="group flex items-center gap-4 text-gray-900 hover:text-blue-600 transition-colors">
                  <div className="w-10 h-10 flex items-center justify-center bg-gray-50 group-hover:bg-blue-50 transition-colors">
                    <svg className="w-5 h-5 text-gray-600 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </div>
                  <span className="font-normal text-lg">info@freeculi.com</span>
                </a>
              </li>
              <li>
                <button
                  onClick={() => setIsLicensingOpen(true)}
                  className="group flex items-center gap-4 text-gray-900 hover:text-blue-600 transition-colors text-left"
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-gray-50 group-hover:bg-blue-50 transition-colors">
                    <svg className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </div>
                  <span className="font-medium text-lg">B2B Licensing</span>
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
                  <span className="text-gray-400 text-sm">GitHub —</span> smart-kitchen-assistant
                </a>
              </li>
              <li>
                <a href="https://github.com/yemekyarismasi/smart-kitchen-voice-assistant" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline underline-offset-4 transition-all font-normal flex items-center gap-2">
                  <span className="text-gray-400 text-sm">GitHub —</span> smart-kitchen-voice-assistant
                </a>
              </li>
              <li>
                <a href="https://github.com/yemekyarismasi/yemek-ai-whitepaper" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline underline-offset-4 transition-all font-normal flex items-center gap-2">
                  <span className="text-gray-400 text-sm">GitHub —</span> yemek-ai-whitepaper
                </a>
              </li>
              <li className="pt-2">
                <a href="https://medium.com/@oytunciba/freeculi-the-new-global-standard-for-smart-kitchen-ai-17f0cfbea03d" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline underline-offset-4 transition-all font-normal flex items-center gap-2">
                  <span className="text-gray-400 text-sm">Medium —</span> The FreeCuli Manifesto
                </a>
              </li>
              <li>
                <a href="https://medium.com/@oytunciba/why-big-tech-is-failing-at-the-smart-kitchen-and-how-we-solved-it-with-zero-cost-edge-ai-c471900da42e" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline underline-offset-4 transition-all font-normal flex items-center gap-2">
                  <span className="text-gray-400 text-sm">Medium —</span> Why Big Tech Fails
                </a>
              </li>
              <li>
                <a href="https://medium.com/@oytunciba/how-we-solved-multimodal-ai-hallucinations-by-reverse-engineering-the-generative-pipeline-c4c68c2aa813" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline underline-offset-4 transition-all font-normal flex items-center gap-2">
                  <span className="text-gray-400 text-sm">Medium —</span> Solving AI Hallucinations
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
