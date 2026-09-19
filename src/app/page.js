"use client";

import { useState } from "react";

export default function Home() {
  const [isLicensingOpen, setIsLicensingOpen] = useState(false);
  const [isSocialOpen, setIsSocialOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-blue-100 selection:text-blue-900 flex flex-col">
      {/* HEADER */}
      <header className="w-full max-w-5xl mx-auto px-6 py-6 sm:py-8 relative z-20 bg-white">
        <div className="flex flex-row justify-between items-start sm:items-center">
          <h1 className="flex flex-col sm:flex-row sm:items-baseline sm:gap-3">
            <span className="text-xl md:text-2xl tracking-tight text-black">
              <span className="font-bold">Free</span><span className="font-bold text-blue-600">Culi</span>
            </span>
            <span className="hidden sm:inline text-gray-300 text-xl font-normal">|</span>
            <span className="text-base sm:text-lg text-gray-600 mt-1 sm:mt-0 font-normal tracking-tight">
              Edge Smart Kitchen Standard
            </span>
          </h1>
          <p className="text-[11px] sm:text-sm text-gray-500 font-bold sm:font-medium uppercase tracking-wider text-right mt-1.5 sm:mt-0 whitespace-nowrap ml-4">
            HFSCA Methodology
          </p>
        </div>
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
            <h2 className="text-3xl font-black mb-6">Enterprise Certification</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              FreeCuli is the commercial certification and ingredient brand for the HFSCA methodology. While HFSCA represents the open-source architectural foundation, FreeCuli serves as the trademarked seal of quality, guaranteeing &quot;zero-cloud dependency&quot; for hardware manufacturers.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Industrial manufacturers utilizing the HFSCA architecture in proprietary hardware must acquire a B2B Certification and Trademark License to ensure compliance and legally display the #FreeCULI badge.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a 
                href="mailto:info@freeculi.com" 
                className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors text-center"
              >
                Contact Certification Team
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md p-4 transition-all duration-500 ease-out"
          onClick={() => setIsSocialOpen(false)}
        >
          <div 
            className="w-full max-w-md p-8 bg-white/90 backdrop-blur-2xl rounded-3xl border border-white/50 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            style={{ animation: 'modalSlideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}
          >
            {/* Decorative background glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-400/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-400/20 rounded-full blur-3xl pointer-events-none"></div>

            <button 
              onClick={() => setIsSocialOpen(false)}
              className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100/50 hover:bg-gray-200 text-gray-500 hover:text-black transition-all transform hover:rotate-90"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            
            <div className="text-center mb-8 relative z-10">
              <h2 className="text-3xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-500">Connect With Us</h2>
              <p className="text-gray-500 mt-2 text-sm font-medium">Join the FreeCuli movement</p>
            </div>
            
            <div className="flex flex-col gap-3 relative z-10">
              {/* Instagram */}
              <a href="https://instagram.com/freeculi" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between px-6 py-4 rounded-2xl bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 border border-gray-100 hover:border-pink-200 transition-all duration-300 hover:shadow-lg hover:shadow-pink-100/50 hover:-translate-y-1">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white shadow-md">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  </div>
                  <span className="font-bold text-gray-800 group-hover:text-pink-600 transition-colors">Instagram</span>
                </div>
                <svg className="w-5 h-5 text-gray-300 group-hover:text-pink-500 transition-colors transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </a>

              {/* X (Twitter) */}
              <a href="https://x.com/freeculi" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between px-6 py-4 rounded-2xl bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 border border-gray-100 hover:border-gray-300 transition-all duration-300 hover:shadow-lg hover:shadow-gray-200/50 hover:-translate-y-1">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white shadow-md">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
                  </div>
                  <span className="font-bold text-gray-800 group-hover:text-black transition-colors">X (Twitter)</span>
                </div>
                <svg className="w-5 h-5 text-gray-300 group-hover:text-gray-600 transition-colors transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </a>

              {/* Facebook */}
              <a href="https://facebook.com/freeculi" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between px-6 py-4 rounded-2xl bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg hover:shadow-blue-200/50 hover:-translate-y-1">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1877F2] text-white shadow-md">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </div>
                  <span className="font-bold text-gray-800 group-hover:text-blue-700 transition-colors">Facebook</span>
                </div>
                <svg className="w-5 h-5 text-gray-300 group-hover:text-blue-600 transition-colors transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </a>

              {/* YouTube */}
              <a href="https://youtube.com/@freeculi" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between px-6 py-4 rounded-2xl bg-gradient-to-r hover:from-red-50 hover:to-red-100 border border-gray-100 hover:border-red-200 transition-all duration-300 hover:shadow-lg hover:shadow-red-200/50 hover:-translate-y-1">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FF0000] text-white shadow-md">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </div>
                  <span className="font-bold text-gray-800 group-hover:text-red-600 transition-colors">YouTube</span>
                </div>
                <svg className="w-5 h-5 text-gray-300 group-hover:text-red-600 transition-colors transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </a>

              {/* TikTok */}
              <a href="https://tiktok.com/@freeculi" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between px-6 py-4 rounded-2xl bg-gradient-to-r hover:from-gray-100 hover:to-gray-200 border border-gray-100 hover:border-gray-300 transition-all duration-300 hover:shadow-lg hover:shadow-gray-300/50 hover:-translate-y-1">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white shadow-md">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.78-1.15 5.54-3.33 7.39-2.2 1.88-5.31 2.69-8.16 1.96-2.92-.76-5.26-3.08-6.15-5.99-.86-2.82-.41-6.13 1.63-8.41 1.95-2.16 5.05-3.04 7.82-2.31v4.24c-1.3-.39-2.8-.2-3.88.66-.99.78-1.5 2.14-1.25 3.39.22 1.15.99 2.18 2.05 2.64 1.25.56 2.82.36 3.79-.58.91-.87 1.34-2.19 1.32-3.48-.03-5.32-.01-10.64-.01-15.96l4.04-.01z"/></svg>
                  </div>
                  <span className="font-bold text-gray-800 group-hover:text-black transition-colors">TikTok</span>
                </div>
                <svg className="w-5 h-5 text-gray-300 group-hover:text-gray-700 transition-colors transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </a>
            </div>
          </div>
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes modalSlideIn {
              from { opacity: 0; transform: translateY(20px) scale(0.95); }
              to { opacity: 1; transform: translateY(0) scale(1); }
            }
          `}} />
        </div>
      )}

      {/* MAIN CONTENT - Hidden visually when modal is open, but kept in DOM */}
      <main className={`flex-1 w-full max-w-5xl mx-auto px-6 pt-8 pb-8 transition-opacity duration-300 ${isLicensingOpen || isSocialOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        
        {/* HERO */}
        <section className="mb-10 max-w-3xl">
          <blockquote className="text-xl md:text-2xl font-light leading-snug text-gray-800 mb-8 border-l-4 border-black pl-6">
            “Every great technology is born from a critical problem that everyone accepts but no one dares to solve…”
          </blockquote>

          <div className="mb-6 flex items-center gap-4 flex-wrap">
            <a href="https://doi.org/10.5281/zenodo.22838474" target="_blank" rel="noopener noreferrer" className="inline-block hover:opacity-80 transition-opacity transform hover:scale-105">
              <img src="https://img.shields.io/badge/DOI-10.5281%2Fzenodo.22838474-blue" alt="DOI" className="h-6 shadow-sm" />
            </a>
            <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider rounded-md border border-blue-200">CERN-OHL-S Certified</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-bold uppercase tracking-wider rounded-md border border-gray-200">CC-BY-ND 4.0</span>
          </div>

          <h2 className="text-xl font-semibold tracking-tight text-blue-500 mb-4">
            The world&apos;s first edge-native, zero-cloud smart kitchen certification standard.
          </h2>
          <p className="text-xl font-normal tracking-tight text-black mb-8">
            Zero cloud. Zero cost. Absolute hands-free freedom. Absolute privacy. Welcome to the era of FreeCuli!
          </p>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              <span><strong>Zero cloud:</strong> End of cloud dependency and server bills (Architectural independence).</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              <span><strong>Zero cost:</strong> Complete elimination of lifelong cloud operational expenses (Financial edge for manufacturers).</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              <span><strong>Absolute hands-free freedom:</strong> Eradication of physical barriers caused by wet/floury hands and background noise in the kitchen (UX freedom).</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              <span><strong>Absolute privacy:</strong> Zero risk at the architectural level against data leaks and compliance nightmares like GDPR/KVKK (Legal and privacy shield).</span>
            </li>
          </ul>
        </section>

        {/* NEW SECTION: HARDWARE STANDARDS */}
        <section className="mb-10 max-w-3xl bg-blue-50/50 p-6 sm:p-8 rounded-2xl border border-blue-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <svg className="w-24 h-24 text-blue-900" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l-12 5v6c0 5.55 3.84 10.74 12 12 8.16-1.26 12-6.45 12-12v-6l-12-5zM12 21.05c-6.2-1.12-9.61-5.36-9.61-10.05v-4.3l9.61-4 9.61 4v4.3c0 4.69-3.41 8.93-9.61 10.05zM12 6.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm0 7c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
          </div>
          
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 relative z-10">
            FreeCuli Zero-Cloud Hardware Standard (FC-ZC v1.0)
          </h2>
          <p className="text-blue-700 font-medium text-lg mb-4 italic relative z-10">
            &quot;FreeCuli does not require trust. It requires reproducing the test.&quot;
          </p>
          <p className="text-gray-700 text-base mb-6 relative z-10 leading-relaxed">
            We don&apos;t rely on privacy policies. We rely on the physical laws of electronics. If you are a hardware manufacturer looking to build true Zero-Cloud compliant appliances, your architecture must pass our strictly falsifiable, adversarial hardware testing constraints.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 relative z-10">
            <a 
              href="https://github.com/FreeCuli/zero-cloud-hardware-architecture/blob/main/Zero-Cloud-Smart-Home-Edge-AI-Architecture.md" 
              target="_blank" rel="noopener noreferrer"
              className="px-5 py-2.5 bg-black text-white text-sm font-bold tracking-wide rounded-lg hover:bg-gray-800 transition-colors text-center shadow-md flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              Reference Architecture
            </a>
            <a 
              href="https://github.com/FreeCuli/zero-cloud-hardware-architecture/blob/main/FC-ZC-Conformance-Test-Specification.md" 
              target="_blank" rel="noopener noreferrer"
              className="px-5 py-2.5 bg-blue-600 text-white text-sm font-bold tracking-wide rounded-lg hover:bg-blue-700 transition-colors text-center shadow-md flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
              Conformance Test Specs
            </a>
          </div>
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
                  <span className="font-normal text-base leading-none">B2B Certification</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Open Source & Research</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://doi.org/10.5281/zenodo.22838474" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline underline-offset-4 transition-all font-normal flex items-center gap-2">
                  <span className="text-gray-400">Zenodo (CERN) —</span> Official Academic DOI
                </a>
              </li>
              <li>
                <a href="https://github.com/FreeCuli" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline underline-offset-4 transition-all font-normal flex items-center gap-2">
                  <span className="text-gray-400">GitHub —</span> FreeCuli Organization
                </a>
              </li>
              <li>
                <a href="https://github.com/FreeCuli/smart-kitchen-offline-assistant" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline underline-offset-4 transition-all font-normal flex items-center gap-2">
                  <span className="text-gray-400">GitHub —</span> Smart Kitchen Offline Assistant
                </a>
              </li>
              <li>
                <a href="https://github.com/FreeCuli/smart-kitchen-standards" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline underline-offset-4 transition-all font-normal flex items-center gap-2">
                  <span className="text-gray-400">GitHub —</span> Smart Kitchen Standards
                </a>
              </li>
              <li className="pt-2">
                <a href="https://medium.com/@oytunciba/the-worlds-first-zero-cloud-smart-kitchen-standard-freeculi-3fdacc0678cb" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline underline-offset-4 transition-all font-normal flex items-center gap-2">
                  <span className="text-gray-400">Medium —</span> Smart Kitchen Certification
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
          © {new Date().getFullYear()} FreeCuli open-source under <a href="https://github.com/FreeCuli/smart-kitchen-offline-assistant/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">AGPL-3.0</a>.
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
