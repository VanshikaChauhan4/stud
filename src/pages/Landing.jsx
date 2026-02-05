import React from 'react';
import { Sparkles, Brain, Zap, Rocket } from 'lucide-react';
const Landing = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white selection:bg-cyan-500 selection:text-white">
      <nav className="flex justify-between items-center px-8 py-6 backdrop-blur-md bg-slate-900/50 sticky top-0 z-50 border-b border-slate-800">
        <div className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent italic">
          QUIZ.AI
        </div>
        <div className="space-x-8 hidden md:flex font-medium text-slate-300">
          <a href="#features" className="hover:text-cyan-400 transition">Features</a>
          <a href="#how-it-works" className="hover:text-cyan-400 transition">How it Works</a>
        </div>
        <button className="bg-white text-black px-6 py-2 rounded-full font-bold hover:scale-105 transition-transform active:scale-95">
          Get Started
        </button>
      </nav>
      <main className="relative pt-20 pb-32 px-6 flex flex-col items-center overflow-hidden">
        <div className="absolute top-20 -left-20 w-72 h-72 bg-purple-600/30 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-10 -right-20 w-72 h-72 bg-cyan-600/20 rounded-full blur-[120px]"></div>
        <div className="z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-slate-800/50 border border-slate-700 px-4 py-2 rounded-full text-sm mb-6 animate-bounce">
            <Sparkles size={16} className="text-cyan-400" />
            <span>AI-Powered Learning is here.</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter leading-tight">
            STOP READING. <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              START WINNING.
            </span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Turn your boring PDFs into interactive 3D quizzes, flashcards, and AI-led chat sessions. Study 10x faster with Gen-Z vibes.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-cyan-500 rounded-2xl font-black text-xl shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:shadow-[0_0_35px_rgba(6,182,212,0.8)] transition-all hover:-translate-y-1">
              UPLOAD PDF NOW
            </button>
            <button className="px-10 py-4 bg-slate-800 border border-slate-700 rounded-2xl font-black text-xl hover:bg-slate-700 transition-all">
              WATCH DEMO
            </button>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mt-24 w-full max-w-6xl">
          <FeatureCard 
            icon={<Brain className="text-cyan-400" />} 
            title="AI Extraction" 
            desc="Our AI rips through your notes to find the gold."
          />
          <FeatureCard 
            icon={<Zap className="text-yellow-400" />} 
            title="Instant Quizzes" 
            desc="Gamified challenges that make dopamine go brrr."
          />
          <FeatureCard 
            icon={<Rocket className="text-purple-400" />} 
            title="Flashcard Mode" 
            desc="Spaced repetition designed for the modern brain."
          />
        </div>
      </main>
    </div>
  );
};
const FeatureCard = ({ icon, title, desc }) => (
  <div className="p-8 bg-slate-900/40 border border-slate-800 rounded-3xl backdrop-blur-sm hover:border-cyan-500/50 transition-all group cursor-default">
    <div className="mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-transform">
      {icon}
    </div>
    <h3 className="text-2xl font-bold mb-2">{title}</h3>
    <p className="text-slate-400">{desc}</p>
  </div>
);
export default Landing;