import React, { useEffect, useState, useRef } from "react";
import RulesCard from "../components/RulesCard";

const features = [
  {
    title: "AI Food Recognition",
    content:
      "Simply take a photo of your meal and our advanced AI will instantly identify foods, estimate portions, and calculate nutritional values with remarkable accuracy.",
    icon: "�",
  },
  {
    title: "Smart Macro Tracking",
    content:
      "Automatically track calories, proteins, carbs, and fats. Get detailed breakdowns and insights to optimize your nutrition for your specific health goals.",
    icon: "�",
  },
  {
    title: "Personalized Insights",
    content:
      "Receive AI-powered recommendations tailored to your dietary preferences, restrictions, and fitness objectives. Learn from your eating patterns and improve over time.",
    icon: "🎯",
  },
  {
    title: "Goal Achievement",
    content:
      "Set and track your health goals with intelligent progress monitoring. Get motivated with achievements, streaks, and personalized milestone celebrations.",
    icon: "🏆",
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
      className="relative min-h-screen h-screen bg-gradient-to-b from-black via-purple-900 to-slate-900 flex justify-center items-center py-20 px-4 overflow-hidden"
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
          <h1 className="text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-4">
            Key Features
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover the powerful AI-driven features that make nutrition
            tracking effortless and effective
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
