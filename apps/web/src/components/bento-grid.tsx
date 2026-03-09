"use client";

import { motion } from "motion/react";
import { Sparkles, Code2, Zap, TrendingUp, Layers, Search, BookOpen, PenSquare } from "lucide-react";
import { ReactNode } from "react";

/* ═══════════════════════════════════════════════════════════
   1. DASHBOARD GRAPHIC (Top Left)
   ═══════════════════════════════════════════════════════════ */
function DashboardGraphic() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-6">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-emerald-500/10 rounded-full blur-[60px] pointer-events-none" />
      
      {/* Browser Window Mockup */}
      <motion.div 
        className="w-full max-w-[420px] aspect-[4/3] rounded-xl border border-neutral-800 bg-[#0a0a0add] backdrop-blur-md shadow-2xl flex flex-col overflow-hidden relative z-10"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Header / Nav */}
        <div className="h-10 border-b border-neutral-800 flex items-center px-4 gap-4 bg-neutral-900/60">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-md bg-emerald-500 flex items-center justify-center">
              <Sparkles className="w-3 h-3 text-white" />
            </div>
            <span className="text-white text-xs font-semibold">PearsDB</span>
          </div>
          <div className="flex-1" />
          <div className="w-48 h-6 rounded-md bg-neutral-800/80 flex items-center px-2 gap-2">
            <Search className="w-3 h-3 text-neutral-500" />
            <span className="text-[10px] text-neutral-500 font-medium">Search</span>
          </div>
        </div>
        
        {/* Sub Header */}
        <div className="h-8 border-b border-neutral-800 flex items-center px-4 gap-6 bg-neutral-900/40">
          <div className="h-full border-b-2 border-emerald-500 flex items-center">
            <span className="text-[10px] text-white font-medium">Documentation</span>
          </div>
          <div className="text-[10px] text-neutral-500 font-medium pb-px">API Reference</div>
        </div>
        
        {/* Content Area */}
        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <div className="w-[120px] border-r border-neutral-800 p-3 space-y-4 bg-neutral-900/20">
            <div className="space-y-2.5">
              {[
                { icon: BookOpen, label: "Documentation", active: true },
                { icon: Sparkles, label: "Community", active: false },
                { icon: Layers, label: "Blog", active: false },
              ].map((item, i) => (
                <div key={i} className={`flex items-center gap-2 ${item.active ? "text-emerald-400" : "text-neutral-500"}`}>
                  <item.icon className="w-3 h-3" />
                  <span className="text-[10px] font-medium">{item.label}</span>
                </div>
              ))}
            </div>
            
            <div className="pt-2 border-t border-neutral-800 space-y-2">
              <div className="text-[9px] font-semibold text-neutral-500 px-1 mb-1">Get Started</div>
              <div className="h-2 w-16 bg-emerald-500/20 rounded ml-1" />
              <div className="h-2 w-12 bg-neutral-800 rounded ml-1" />
              <div className="h-2 w-14 bg-neutral-800 rounded ml-1" />
            </div>
          </div>
          
          {/* Main Document */}
          <div className="flex-1 p-5 relative">
            <motion.div 
              className="text-emerald-500 text-[9px] font-bold tracking-wider uppercase mb-1"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              Get Started
            </motion.div>
            <motion.h1 
              className="text-white text-base font-semibold mb-2"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Introduction
            </motion.h1>
            <motion.div 
              className="space-y-1.5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="h-2 w-full bg-neutral-800 rounded" />
              <div className="h-2 w-[85%] bg-neutral-800 rounded" />
            </motion.div>
            
            <motion.div 
              className="absolute bottom-0 right-0 w-32 h-24 bg-gradient-to-tl from-emerald-500/10 to-transparent rounded-tl-full blur-xl pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   2. CODE GRAPHIC (Top Right)
   ═══════════════════════════════════════════════════════════ */
function CodeGraphic() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-6">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-emerald-500/10 rounded-full blur-[60px] pointer-events-none" />
      
      <motion.div 
        className="w-full max-w-[420px] aspect-[4/3] rounded-xl border border-neutral-800 bg-[#0a0a0add] backdrop-blur-md shadow-2xl flex overflow-hidden relative z-10"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
      >
        {/* Editor Side */}
        <div className="w-1/2 h-full border-r border-neutral-800 bg-neutral-900/60 p-3 pt-4 font-mono text-[9px] leading-relaxed relative">
          <div className="flex items-center justify-center gap-1.5 absolute top-0 left-0 w-full h-8 border-b border-neutral-800 bg-neutral-900/80">
            <span className="text-neutral-500">github</span>
            <span className="text-neutral-400 font-medium">quickstart.mdx</span>
          </div>
          
          <div className="mt-6 space-y-1">
            <div className="flex gap-2">
              <span className="text-neutral-600 select-none w-2 text-right">1</span>
              <div><span className="text-emerald-400">##</span> <span className="text-teal-300">Setting up</span></div>
            </div>
            <div className="flex gap-2">
              <span className="text-neutral-600 select-none w-2 text-right">2</span>
              <div />
            </div>
            <div className="flex gap-2 text-neutral-400">
              <span className="text-neutral-600 select-none w-2 text-right">3</span>
              <div>Learn how to document your</div>
            </div>
            <div className="flex gap-2 text-neutral-400">
              <span className="text-neutral-600 select-none w-2 text-right">4</span>
              <div>code effectively to</div>
            </div>
            <div className="flex gap-2 text-emerald-100">
              <span className="text-neutral-600 select-none w-2 text-right">5</span>
              <div className="flex">support your deve<motion.span animate={{opacity:[1,0,1]}} transition={{duration:0.8, repeat:Infinity}} className="w-[1px] h-[10px] bg-emerald-400 ml-[1px] inline-block"/></div>
            </div>
            <div className="flex gap-2">
              <span className="text-neutral-600 select-none w-2 text-right">6</span>
              <div />
            </div>
            <div className="flex gap-2">
              <span className="text-neutral-600 select-none w-2 text-right">7</span>
              <div><span className="text-teal-400">&lt;CardGroup</span> <span className="text-emerald-300">cols</span>=<span className="text-neutral-300">{"{2}"}</span><span className="text-teal-400">&gt;</span></div>
            </div>
            <div className="flex gap-2">
              <span className="text-neutral-600 select-none w-2 text-right">8</span>
              <div className="pl-4"><span className="text-teal-400">&lt;Card</span></div>
            </div>
            <div className="flex gap-2">
              <span className="text-neutral-600 select-none w-2 text-right">9</span>
              <div className="pl-8"><span className="text-emerald-300">title</span>=<span className="text-neutral-400">"Edit Your Docs"</span></div>
            </div>
            <div className="flex gap-2">
              <span className="text-neutral-600 select-none w-2 text-right">10</span>
              <div className="pl-8"><span className="text-emerald-300">icon</span>=<span className="text-neutral-400">"pen-to-square"</span></div>
            </div>
          </div>
        </div>
        
        {/* Render Preview Side */}
        <div className="w-1/2 h-full bg-[#0a0a0a] relative">
          <div className="flex items-center justify-center gap-1.5 absolute top-0 left-0 w-full h-8 border-b border-neutral-800 bg-neutral-900/40">
            <Sparkles className="w-3 h-3 text-emerald-500" />
            <span className="text-neutral-300 text-[10px] font-medium">Quickstart</span>
          </div>
          
          <motion.div 
            className="p-4 mt-8"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <h4 className="text-white text-xs font-semibold mb-2">Setting up</h4>
            <p className="text-neutral-400 text-[9px] mb-4 leading-relaxed">
              Learn how to document your code effectively to support your deve<motion.span animate={{opacity:[1,0,1]}} transition={{duration:0.8, repeat:Infinity}} className="w-px h-2 bg-emerald-400 ml-px inline-block align-middle"/>
            </p>
            
            <motion.div 
              className="border border-neutral-800 rounded-md p-3 bg-neutral-900/60 shadow-lg relative"
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute -top-1.5 -right-1.5 w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/40" />
              <PenSquare className="w-3.5 h-3.5 text-emerald-400 mb-2" />
              <div className="text-white text-[10px] font-medium mb-1">Edit Your Docs</div>
              <div className="text-neutral-500 text-[8px] leading-relaxed">Get your docs set up locally for easy development</div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   3. PERFORMANCE GRAPHIC (Bottom Left)
   ═══════════════════════════════════════════════════════════ */
function PerformanceGraphic() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-emerald-500/10 rounded-full blur-[50px] pointer-events-none" />
      
      {/* Topographic Lines Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[200, 260, 320, 380, 440].map((size, i) => (
          <motion.div
            key={i}
            className="absolute rounded-[4rem] border border-neutral-800/80"
            style={{ width: size, height: size * 1.1, rotate: 15 }}
            animate={{ rotate: 15 + (i % 2 === 0 ? 3 : -3), scale: [1, 1.02, 1] }}
            transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
        {/* Glow inner rings */}
        {[200, 260].map((size, i) => (
          <motion.div
            key={`glow-${i}`}
            className="absolute rounded-[4rem] border border-emerald-500/10 mix-blend-screen"
            style={{ width: size, height: size * 1.1, rotate: 15 }}
          />
        ))}
      </div>
      
      {/* Centered Large Icon */}
      <motion.div
        className="relative z-10 w-28 h-28 flex items-center justify-center"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", bounce: 0.5, delay: 0.3 }}
      >
        <svg viewBox="0 0 24 24" className="w-20 h-20 text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]" fill="currentColor">
          <motion.path 
            d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" 
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
          />
        </svg>
      </motion.div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   4. CHART GRAPHIC (Bottom Center)
   ═══════════════════════════════════════════════════════════ */
function ChartGraphic() {
  const pathD = "M0 80 L30 65 L60 65 L90 45 L130 45 L160 25 L180 25 L200 10";
  
  return (
    <div className="absolute inset-0 flex items-end justify-center w-full h-full p-6 pb-12">
      {/* Dot Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
      
      <div className="w-full h-full max-w-[300px] max-h-[160px] relative z-10">
        <svg className="w-full h-full overflow-visible" viewBox="0 0 200 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#10b981" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          {/* Fill Area */}
          <motion.path
            d={`${pathD} L200 100 L0 100 Z`}
            fill="url(#chartGlow)"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          />
          
          {/* Stroke Line */}
          <motion.path
            d={pathD}
            fill="none"
            stroke="#10b981"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
          />
          
          {/* End Dot */}
          <motion.circle
            cx="200"
            cy="10"
            r="4"
            fill="#10b981"
            className="filter drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 2, type: "spring" }}
          />
        </svg>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   5. STACK GRAPHIC (Bottom Right)
   ═══════════════════════════════════════════════════════════ */
function StackGraphic() {
  const items = [
    { title: "Updated Contribution Guidelines", time: "4 months ago by Josh" },
    { title: "Added Version History Section", time: "3 months ago by Hahnbee" },
    { title: "Standardized Formatting Across Docs", time: "3 months ago by Josh" },
    { title: "Organized Content Structure", time: "2 months ago by Hahnbee" },
    { title: "Rewrite API Endpoints", time: "1 month ago by Taylor" },
  ];

  const animatedItems = [...items, ...items, ...items];

  return (
    <div 
      className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
      style={{ maskImage: "linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)" }}
    >
      <div className="w-[80%] max-w-[240px] h-[300%] relative">
         <motion.div
           className="absolute top-0 left-0 w-full flex flex-col gap-3"
           animate={{ y: ["0%", "-33.333%"] }}
           transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
         >
           {animatedItems.map((item, i) => (
             <div 
               key={i} 
               className="bg-neutral-900/80 border border-neutral-800 rounded-lg p-4 shadow-sm backdrop-blur-sm flex flex-col justify-center"
             >
               <div className="text-white text-xs font-semibold mb-1 truncate">{item.title}</div>
               <div className="text-neutral-500 text-[9px]">{item.time}</div>
             </div>
           ))}
         </motion.div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   WRAPPER COMPONENT
   ═══════════════════════════════════════════════════════════ */
function FeatureCard({ 
  children, 
  icon: Icon, 
  label, 
  title, 
  description, 
  className = "" 
}: { 
  children: ReactNode; 
  icon: any; 
  label: string; 
  title: string; 
  description: string; 
  className?: string;
}) {
  return (
    <div className={`flex flex-col rounded-2xl border border-neutral-800/80 bg-transparent overflow-hidden relative group ${className}`}>
      {/* Graphic Container */}
      <div className="flex-1 relative overflow-hidden flex items-center justify-center min-h-[260px] border-b border-neutral-800/50">
        {children}
      </div>
      
      {/* Text Area */}
      <div className="p-6 md:p-8 flex flex-col items-center text-center relative z-10 bg-transparent">
        <div className="flex items-center gap-2 text-emerald-400 font-semibold mb-3">
          <Icon className="w-4 h-4" />
          <span className="text-[13px] tracking-wide">{label}</span>
        </div>
        <h3 className="text-white font-bold text-xl mb-2">{title}</h3>
        <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">{description}</p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   MAIN BENTO GRID EXPORT
   ═══════════════════════════════════════════════════════════ */
export default function BentoGrid() {
  return (
    <main className="min-h-screen p-6 md:p-8 lg:p-12 relative overflow-hidden bg-transparent">
      <div className="max-w-[1200px] mx-auto w-full relative z-10">
        
        {/* UPPER ROW: 2 Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
           <FeatureCard 
             icon={Sparkles}
             label="Fast fine-tuning" 
             title="Gorgeous out of the box" 
             description="Opinionated when you're lazy, but infinitely flexible when you need it to be"
             className="min-h-[460px]"
           >
             <DashboardGraphic />
           </FeatureCard>

           <FeatureCard 
             icon={Code2}
             label="Inline updates" 
             title="Developer Forward" 
             description="Content is powered by markdown and lives alongside your codebase"
             className="min-h-[460px]"
           >
             <CodeGraphic />
           </FeatureCard>
        </div>

        {/* BOTTOM ROW: 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           <FeatureCard 
             icon={Zap}
             label="Designed speed" 
             title="Built for performance" 
             description="Meticulously designed and optimized for a great user experience"
             className="min-h-[400px]"
           >
             <PerformanceGraphic />
           </FeatureCard>

           <FeatureCard 
             icon={TrendingUp}
             label="User growth" 
             title="Conversion as a priority" 
             description="Built to get more user engagement and conversions"
             className="min-h-[400px]"
           >
             <ChartGraphic />
           </FeatureCard>

           <FeatureCard 
             icon={Layers}
             label="Simplified updates" 
             title="Effortlessly maintained" 
             description="Designed to make updating documentation something you want to do"
             className="min-h-[400px]"
           >
             <StackGraphic />
           </FeatureCard>
        </div>
        
      </div>
    </main>
  );
}
