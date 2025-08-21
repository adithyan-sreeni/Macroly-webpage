import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="relative h-screen  bg-gradient-to-b from-slate-900 via-purple-900 to-black flex justify-center items-center overflow-hidden">
      {/* Background Effects */}

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 bg-clip-text text-transparent mb-6">
          Macroly
        </h1>
        <p className="text-2xl md:text-3xl text-gray-200 mb-4 font-medium">
          Your Health Companion
        </p>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          AI-powered wellness tracking made simple.
        </p>

        {/* App Store Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <a
            href="#"
            className="flex items-center space-x-3 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 min-w-[200px]"
          >
            <FaApple className="text-2xl" />
            <div className="text-left">
              <div className="text-xs">Download on the</div>
              <div className="text-lg font-semibold">App Store</div>
            </div>
          </a>

          <a
            href="#"
            className="flex items-center space-x-3 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200 min-w-[200px]"
          >
            <FaGooglePlay className="text-2xl" />
            <div className="text-left">
              <div className="text-xs">Get it on</div>
              <div className="text-lg font-semibold">Google Play</div>
            </div>
          </a>
        </div>

        {/* Coming Soon Badge */}
        <div className="inline-block bg-purple-900/30 backdrop-blur-sm border border-purple-400/30 text-purple-200 px-4 py-2 rounded-full text-sm font-medium">
          🚀 Coming Soon to App Stores
        </div>
      </div>
    </div>
  );
}
