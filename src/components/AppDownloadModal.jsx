import React from "react";
import { FaApple, FaGooglePlay, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "motion/react";

const AppDownloadModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden">
              {/* Header */}
              <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 p-6 text-white">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
                >
                  <FaTimes className="text-xl" />
                </button>
                <h2 className="text-2xl font-bold mb-2">Download Macroly</h2>
                <p className="text-purple-100">Choose your platform</p>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* App Store Button */}
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center space-x-4 bg-black text-white p-4 rounded-xl hover:bg-gray-800 transition-colors duration-200 w-full"
                >
                  <FaApple className="text-3xl" />
                  <div className="text-left flex-1">
                    <div className="text-sm text-gray-300">Download on the</div>
                    <div className="text-xl font-semibold">App Store</div>
                  </div>
                </motion.a>

                {/* Google Play Button */}
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center space-x-4 bg-green-600 text-white p-4 rounded-xl hover:bg-green-700 transition-colors duration-200 w-full"
                >
                  <FaGooglePlay className="text-3xl" />
                  <div className="text-left flex-1">
                    <div className="text-sm text-green-100">Get it on</div>
                    <div className="text-xl font-semibold">Google Play</div>
                  </div>
                </motion.a>

                {/* Coming Soon Notice */}
                <div className="text-center mt-6 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                  <div className="inline-flex items-center space-x-2 text-purple-600 dark:text-purple-400">
                    <span className="text-lg">🚀</span>
                    <span className="font-medium">
                      Coming Soon to App Stores
                    </span>
                  </div>
                  <p className="text-sm text-purple-500 dark:text-purple-300 mt-1">
                    We'll notify you when the app is available for download
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AppDownloadModal;
