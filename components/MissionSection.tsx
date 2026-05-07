"use client";

import { motion } from "framer-motion";

const cards = [
  {
    label: "Our Mission",
    color: "from-purple-600 to-blue-500",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    body: "Race Vision AR exists to make endurance sports more interactive, more engaging, and more connected by giving spectators the ability to recognize, support, and celebrate athletes in real time through augmented reality.",
  },
  {
    label: "Our Vision",
    color: "from-fuchsia-500 to-pink-500",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
      </svg>
    ),
    body: "To become the leading augmented reality engagement platform for endurance events — bridging the gap between athletes, spectators, charities, and sponsors.",
  },
];

export default function MissionSection() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Is Race Vision AR?
          </h2>
          <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed">
            Race Vision AR is an augmented reality app that allows spectators to point their phone
            camera at runners during a race and instantly see an AR overlay with their name, social
            media handle, and charity information. It increases spectator engagement, helps athletes
            build content and followers, and gives race directors a new technology experience to
            modernize their events.
          </p>
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-14"
        >
          <p className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent max-w-3xl mx-auto leading-snug">
            Race Vision AR turns race day into a live augmented reality experience where spectators
            can instantly identify runners, cheer them by name, and support their charity.
          </p>
        </motion.div>

        {/* Mission + Vision cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} text-white flex items-center justify-center mb-5`}
              >
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{card.label}</h3>
              <p className="text-gray-500 leading-relaxed">{card.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
