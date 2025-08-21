import React, { useEffect, useState, useRef } from "react";
import RulesCard from "../components/RulesCard";

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
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="features"
      className="relative min-h-screen py-20 px-4 bg-gradient-to-b from-black via-purple-900 to-slate-900 flex justify-center items-center overflow-hidden"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/6 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-500/25 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute top-1/2 right-1/2 w-32 h-32 bg-cyan-400/20 rounded-full blur-xl animate-pulse delay-2000"></div>

        {/* Floating particles */}
        {isVisible &&
          [...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 3}s`,
              }}
            />
          ))}
      </div>

      <div className="relative w-full max-w-6xl mx-auto z-10">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Health Companion Pillars
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Discover how Macroly revolutionizes health tracking through
            conversation, balance, insights, and personalization
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index}>
              <RulesCard title={feature.title} index={index}>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl mt-1">{feature.icon}</span>
                  <span>{feature.content}</span>
                </div>
              </RulesCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
