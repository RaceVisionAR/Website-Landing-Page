"use client";

import { motion } from "framer-motion";
import Image from "next/image";

function ARCard({
  name,
  bib,
  handle,
  charity,
}: {
  name: string;
  bib: string;
  handle: string;
  charity: string;
}) {
  return (
    <div
      className="rounded-xl overflow-hidden w-full"
      style={{
        background: "rgba(0, 0, 0, 0.25)",
        backdropFilter: "blur(3px)",
        WebkitBackdropFilter: "blur(10px)",
        border: "1px solid rgba(255,255,255,0.10)",
      }}
    >
      {/* Header: name + LIVE */}
      <div className="px-3 pt-3 pb-1 flex items-start justify-between gap-1">
        <div>
          <p className="text-white font-bold text-sm leading-tight">{name}</p>
          <p className="text-[#8ec5ff] text-xs mt-0.5">{bib}</p>
        </div>
        {/* LIVE badge — outlined blue pill matching design */}
        <span className="flex-shrink-0 border border-blue-400 text-blue-300 text-[10px] font-semibold px-1.5 py-0.5 rounded mt-0.5 tracking-wide">
          LIVE
        </span>
      </div>

      {/* Instagram handle + Follow — merged pink-transparent block */}
      <div
        className="mx-3 my-2 rounded-lg px-2.5 py-2 flex flex-col justify-between gap-2 "
        style={{ background: "rgba(236, 72, 153, 0.18)" }}
      >
        <div className="flex items-center gap-1.5 min-w-0">
          <svg className="w-3.5 h-3.5 text-pink-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
          <span className="text-white text-xs truncate">{handle}</span>
        </div>
        <button
          className="flex-shrink-0 px-3 py-1 rounded-md text-white text-xs font-bold"
          style={{ background: "linear-gradient(90deg, #ec4899, #a855f7)" }}
        >
          Follow
        </button>
      </div>

      {/* Charity row — "Donate" in white underline */}
      <div className="px-3 pb-2 flex items-center justify-between gap-1">
        <p className="text-[#dab2ff] text-[10px] truncate">
          Running for:{" "}
          <span className="text-slate-200">{charity}</span>
        </p>
        <button className="flex-shrink-0 text-white text-[10px] font-semibold underline underline-offset-1 ml-1">
          Donate
        </button>
      </div>

      {/* Cheer + Share */}
      <div className="px-3 pb-2 flex gap-2">
        <button
          className="flex-1 flex items-center justify-center gap-1 py-1.5 rounded-lg text-white text-xs font-bold"
          style={{ background: "linear-gradient(90deg, #ec4899, #a855f7)" }}
        >
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
          Cheer
        </button>
        <button
          className="flex-1 flex items-center justify-center gap-1 py-1.5 rounded-lg text-[#8ec5ff] text-xs font-bold"
          style={{ background: "rgb(43, 127, 255, 0.2)" }}
        >
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
          </svg>
          Share
        </button>
      </div>

      {/* Blue dot */}
      <div className="flex justify-center pb-2">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
      </div>
    </div>
  );
}

/* ─── Shared bottom nav bar ─── */
function BottomNav() {
  return (
    <div className="bg-gray-900 px-6 py-3 flex items-center justify-around">
      <button className="flex items-center gap-1">
        <div className="flex flex-col items-center gap-1.5 bg-blue-600 px-4 py-1.5 rounded-lg">
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
            <circle cx="12" cy="13" r="4" />
          </svg>
          <span className="text-white text-xs font-semibold">Camera</span>
        </div>
      </button>
      <button className="flex flex-col items-center gap-1">
        <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM12 14a7 7 0 0 0-7 7h14a7 7 0 0 0-7-7z" />
        </svg>
        <span className="text-gray-400 text-xs">Profile</span>
      </button>
      <button className="flex flex-col items-center gap-1">
        <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
        </svg>
        <span className="text-gray-400 text-xs">Settings</span>
      </button>
    </div>
  );
}

export default function ARPreviewSection() {
  return (
    <section id="see-it-in-action" className="py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-5">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            See It In Action
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
            Here&apos;s what you&apos;ll see when you point your camera at a runner
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* ── MOBILE: portrait phone frame, single centred card ── */}
          <div className="md:hidden mx-auto max-w-[320px]">
            <div
              className="rounded-[2rem] overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.28)]"
              style={{ border: "5px solid #1a1a2e" }}
            >
              {/* Camera viewport — taller portrait ratio */}
              <div className="relative overflow-hidden" style={{ aspectRatio: "9/14" }}>
                <Image
                  src="/hero-bg.png"
                  alt="Race day background"
                  fill
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-black/30" />

                {/* AR Camera Active */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 z-10">
                  <span className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_6px_rgba(239,68,68,0.8)]" />
                  <span className="text-white text-xs font-medium drop-shadow">AR Camera Active</span>
                </div>
                {/* Camera icon */}
                <div className="absolute top-3 right-3 z-10">
                  <svg className="w-5 h-5 text-white drop-shadow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                    <circle cx="12" cy="13" r="4" />
                  </svg>
                </div>

                {/* Single centred AR card at the bottom */}
                <div className="absolute bottom-12 left-3 right-3 z-10">
                  <ARCard
                    name="David Martinez"
                    bib="Bib #2847"
                    handle="@davidrunswild"
                    charity="American Cancer Society"
                  />
                </div>

                {/* Bottom hint */}
                <div className="absolute bottom-3 left-0 right-0 flex flex-col items-center gap-1.5 z-10">
                  <p className="text-white text-[11px] font-medium drop-shadow">
                    Point your camera at runners to see their info
                  </p>
                  <div className="flex items-center gap-3">
                    <button className="flex items-center gap-1 text-white/80 text-[11px]">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                      Cheer
                    </button>
                    <button className="flex items-center gap-1 text-white/80 text-[11px]">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
                        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                      </svg>
                      Share
                    </button>
                  </div>
                </div>
              </div>
              <BottomNav />
            </div>
          </div>

          {/* ── DESKTOP: landscape tablet frame, two side-by-side cards ── */}
          <div className="hidden md:block relative mx-auto" style={{ maxWidth: 880 }}>
            <div className="absolute inset-x-8 inset-y-4 -z-10 blur-3xl bg-gradient-to-b from-blue-200/30 to-purple-200/20 rounded-full" />
            <div
              className="rounded-[2rem] overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.30)]"
              style={{ border: "6px solid #1a1a2e" }}
            >
              {/* Camera viewport */}
              <div className="relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
                <Image
                  src="/hero-bg.png"
                  alt="Race day background"
                  fill
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-black/25" />

                {/* AR Camera Active */}
                <div className="absolute top-4 left-4 flex items-center gap-1.5 z-10">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_6px_rgba(239,68,68,0.8)]" />
                  <span className="text-white text-sm font-medium drop-shadow">AR Camera Active</span>
                </div>
                {/* Camera icon */}
                <div className="absolute top-4 right-4 z-10">
                  <svg className="w-6 h-6 text-white drop-shadow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                    <circle cx="12" cy="13" r="4" />
                  </svg>
                </div>

                {/* Left AR card */}
                <div className="absolute top-[28%] left-[22%] -translate-x-1/2 w-[220px] z-10">
                  <ARCard
                    name="David Martinez"
                    bib="Bib #2847"
                    handle="@davidrunswild"
                    charity="American Cancer Society"
                  />
                </div>
                {/* Right AR card */}
                <div className="absolute top-[32%] right-[5%] w-[220px] z-10">
                  <ARCard
                    name="Marcus Johnson"
                    bib="Bib #1523"
                    handle="@marcusruns"
                    charity="St. Jude Children's Research"
                  />
                </div>

                {/* Bottom camera UI */}
                <div className="absolute bottom-10 left-0 right-0 flex flex-col items-center gap-2 z-10">
                  <p className="text-white text-sm font-medium drop-shadow">
                    Point your camera at runners to see their info
                  </p>
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-1.5 text-white/90 text-sm">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                      Cheer
                    </button>
                    <button className="flex items-center gap-1.5 text-white/90 text-sm">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
                        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                      </svg>
                      Share
                    </button>
                  </div>
                </div>
              </div>
              <BottomNav />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
