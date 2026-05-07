"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  { value: "50K+", label: "Runners Scanned" },
  { value: "100+", label: "Races Supported" },
  { value: "$2M+", label: "Raised for Charity" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.png"
          alt="Runner at race"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/75" />
      </div>

      {/* AR scan line effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/60 to-transparent"
          animate={{ top: ["10%", "90%", "10%"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-5 max-w-4xl mx-auto w-full pt-20 pb-12">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white/90 text-sm font-medium mb-5"
        >
          Revolutionizing Race Day Experience
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight mb-5"
        >
          See The Story Behind{" "}
          <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-fuchsia-500 via-pink-500 to-violet-500 bg-clip-text text-transparent">
            Every Runner
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-base sm:text-lg text-white/80 mb-8 max-w-xl mx-auto leading-relaxed"
        >
          Race Vision AR transforms race day into an interactive experience.
          Point your camera at any runner to discover their story, support
          their cause, and cheer them on in real-time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-3 justify-center mb-12"
        >
          <a
            href="#download"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold text-base sm:text-lg hover:opacity-90 transition-opacity shadow-xl shadow-purple-500/30"
          >
            Get Started
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#see-it-in-action"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white/10 backdrop-blur border border-white/25 text-white font-semibold text-base sm:text-lg hover:bg-white/20 transition-colors"
          >
            Learn More
          </a>
        </motion.div>

        {/* Stats */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="flex flex-wrap justify-center gap-8 md:gap-16"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center min-w-[80px]">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-0.5">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-white/60 uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div> */}
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <svg className="w-6 h-6 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  );
}
