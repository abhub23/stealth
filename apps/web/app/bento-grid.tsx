'use client';

import { AreaChart, Area, LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, Users, Zap, Database, Lock, Code2, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

// Chart data
const chartData = [
  { month: 'Jan', value: 400, value2: 240 },
  { month: 'Feb', value: 300, value2: 320 },
  { month: 'Mar', value: 200, value2: 400 },
  { month: 'Apr', value: 278, value2: 350 },
  { month: 'May', value: 189, value2: 420 },
  { month: 'Jun', value: 239, value2: 380 },
];

export default function BentoGrid() {
  return (
    <main className="min-h-screen bg-black p-6 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">Dashboard</h1>
          <p className="text-gray-400 text-lg">Real-time analytics and insights</p>
        </div>

        {/* Top Row: 1 Large Left + 2 Stacked Right */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Large Left Grid - Performance Metrics */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-2 lg:row-span-2 bg-neutral-900 border border-neutral-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow overflow-hidden relative">
            <div className="grain absolute inset-0 pointer-events-none"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">Performance Metrics</h2>
                  <p className="text-gray-400 text-sm">Comprehensive analytics across 6 months</p>
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                >
                  <TrendingUp className="w-10 h-10 text-indigo-500" />
                </motion.div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-8 p-4 bg-neutral-800/30 rounded-xl backdrop-blur-sm">
                <div className="text-center">
                  <p className="text-gray-400 text-xs font-medium mb-1">Peak</p>
                  <p className="text-2xl font-bold text-indigo-500">842K</p>
                </div>
                <div className="text-center border-l border-r border-neutral-700">
                  <p className="text-gray-400 text-xs font-medium mb-1">Avg</p>
                  <p className="text-2xl font-bold text-indigo-500">612K</p>
                </div>
                <div className="text-center">
                  <p className="text-gray-400 text-xs font-medium mb-1">Growth</p>
                  <p className="text-2xl font-bold text-indigo-500">+24%</p>
                </div>
              </div>

              <ResponsiveContainer width="100%" height={220}>
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#4f46e5" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333333" opacity={0.5} />
                  <XAxis dataKey="month" stroke="#888888" style={{ fontSize: '13px' }} />
                  <YAxis stroke="#888888" style={{ fontSize: '13px' }} />
                  <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '8px' }} />
                  <Area type="monotone" dataKey="value" stroke="#4f46e5" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Top Right Small Grid - Active Users */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="bg-gradient-to-br from-neutral-900 to-neutral-900/80 border border-neutral-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-xs font-semibold uppercase text-gray-400 tracking-wider">Active Users</h3>
                  <p className="text-4xl font-bold text-indigo-500 mt-3">24,582</p>
                  <p className="text-xs text-indigo-400/70 mt-1">Online right now</p>
                </div>
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Users className="w-12 h-12 text-indigo-500/30" />
                </motion.div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs mb-2">
                  <span className="text-gray-400">Capacity</span>
                  <span className="text-indigo-500 font-semibold">72%</span>
                </div>
                <div className="w-full bg-neutral-800 rounded-full h-2 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '72%' }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="bg-indigo-500 h-2 rounded-full"
                  ></motion.div>
                </div>
              </div>
              <p className="text-xs text-indigo-400 font-semibold mt-3">↑ 12% from last week</p>
            </div>
          </motion.div>

          {/* Bottom Right Small Grid - Revenue */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="bg-gradient-to-br from-neutral-900 to-neutral-900/80 border border-neutral-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-xs font-semibold uppercase text-gray-400 tracking-wider">Monthly Revenue</h3>
                  <p className="text-4xl font-bold text-indigo-500 mt-3">$48,290</p>
                  <p className="text-xs text-indigo-400/70 mt-1">All channels combined</p>
                </div>
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                >
                  <Zap className="w-12 h-12 text-indigo-500/30" />
                </motion.div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs mb-2">
                  <span className="text-gray-400">Target Progress</span>
                  <span className="text-indigo-400 font-semibold">65%</span>
                </div>
                <div className="w-full bg-neutral-800 rounded-full h-2 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '65%' }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
                    className="bg-indigo-500 h-2 rounded-full"
                  ></motion.div>
                </div>
              </div>
              <p className="text-xs text-indigo-400 font-semibold mt-3">↑ 8% from last month</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Row: 3 Equal Grids */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Grid 1: Database Status */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
            className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Database className="w-7 h-7 text-indigo-500" />
                </motion.div>
                <div>
                  <h3 className="font-bold text-white text-lg">Database Performance</h3>
                  <p className="text-xs text-indigo-400 font-semibold mt-1">↑ 23% faster than baseline</p>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={100}>
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333333" opacity={0.3} />
                  <XAxis dataKey="month" stroke="#888888" style={{ fontSize: '11px' }} />
                  <YAxis hide />
                  <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '8px' }} />
                  <Line type="monotone" dataKey="value" stroke="#4f46e5" dot={false} strokeWidth={3} isAnimationActive={true} />
                </LineChart>
              </ResponsiveContainer>
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-neutral-800">
                <span className="text-xs text-gray-400">Health Status</span>
                <span className="px-3 py-1 bg-indigo-500/10 text-indigo-400 text-xs font-bold rounded-full">OPTIMAL</span>
              </div>
            </div>
          </motion.div>

          {/* Grid 2: Security */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
            className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Lock className="w-7 h-7 text-indigo-500" />
                </motion.div>
                <div>
                  <h3 className="font-bold text-white text-lg">Security Posture</h3>
                  <p className="text-xs text-indigo-400 font-semibold mt-1">Enterprise Grade</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-indigo-500/5 rounded-lg">
                  <div className="flex items-center gap-3">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <CheckCircle2 className="w-5 h-5 text-indigo-500" />
                    </motion.div>
                    <span className="text-sm font-semibold text-white">SSL/TLS Encryption</span>
                  </div>
                  <span className="text-xs text-indigo-400 font-bold">TLS 1.3</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-indigo-500/5 rounded-lg">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-indigo-500" />
                    <span className="text-sm font-semibold text-white">2FA Authentication</span>
                  </div>
                  <span className="text-xs text-indigo-400 font-bold">ENABLED</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-indigo-500/5 rounded-lg">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-indigo-500" />
                    <span className="text-sm font-semibold text-white">End-to-End Encrypted</span>
                  </div>
                  <span className="text-xs text-indigo-400 font-bold">AES-256</span>
                </div>
              </div>
              <p className="text-xs text-indigo-400 font-bold mt-6 text-center">✓ 100% SECURE</p>
            </div>
          </motion.div>

          {/* Grid 3: Development */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
            className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  <Code2 className="w-7 h-7 text-indigo-500" />
                </motion.div>
                <div>
                  <h3 className="font-bold text-white text-lg">Development Activity</h3>
                  <p className="text-xs text-indigo-400 font-semibold mt-1">142 commits this month</p>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={100}>
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333333" opacity={0.3} />
                  <XAxis dataKey="month" stroke="#888888" style={{ fontSize: '11px' }} />
                  <YAxis hide />
                  <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '8px' }} />
                  <Bar dataKey="value2" fill="#4f46e5" radius={6} isAnimationActive={true} />
                </BarChart>
              </ResponsiveContainer>
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-neutral-800">
                <span className="text-xs text-gray-400">Last 6 Months</span>
                <span className="px-3 py-1 bg-indigo-500/10 text-indigo-400 text-xs font-bold rounded-full">+32% GROWTH</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}