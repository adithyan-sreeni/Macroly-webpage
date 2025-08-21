import React from "react";
import RulesCard from "../components/RulesCard";
import { motion } from "framer-motion";

const features = [
  {
    title: "Conversational Logging",
    content:
      "Chat naturally about your meal instead of tedious manual entry. Our AI understands your language and automatically logs everything with precision and context.",
    icon: "💬",
  },
  {
    title: "Net Energy Balance",
    content:
      "See your real-time energy balance at a glance. Our smart dashboard shows exactly where you stand with Calories In vs. Calories Out, making weight management crystal clear.",
    icon: "⚖️",
  },
  {
    title: "AI-Powered Insights",
    content:
      "Go beyond numbers with conversational meal summaries and personalized insights. Our AI analyzes your patterns and provides detailed, actionable feedback for every aspect of your health.",
    icon: "🧠",
  },
  {
    title: "Personalized Experience",
    content:
      "From detailed onboarding to custom goal setting, every aspect of Macroly adapts to your unique health journey. Your companion learns and grows with your evolving wellness needs.",
    icon: "🎯",
  },
];

function Features() {
  return (
    <section
      id="features"
      className="relative min-h-screen bg-gradient-to-b from-black via-purple-900 to-slate-900 flex justify-center items-center py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/6 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/6 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-pink-500/25 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute top-1/2 right-1/2 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-cyan-400/20 rounded-full blur-xl animate-pulse delay-2000"></div>

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            initial={{
              x:
                Math.random() *
                (typeof window !== "undefined" ? window.innerWidth : 1000),
              y:
                Math.random() *
                (typeof window !== "undefined" ? window.innerHeight : 1000),
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative w-full max-w-6xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-2 sm:mb-4">
            Features
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Discover how Macroly revolutionizes health tracking through
            conversation, balance, insights, and personalization
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <RulesCard key={index} title={feature.title} index={index}>
              <div className="flex items-start space-x-3">
                <span className="text-xl sm:text-2xl mt-1 flex-shrink-0">
                  {feature.icon}
                </span>
                <span className="text-sm sm:text-base">{feature.content}</span>
              </div>
            </RulesCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
