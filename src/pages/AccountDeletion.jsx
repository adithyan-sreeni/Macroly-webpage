import React from "react";
import { FaTrashAlt, FaExclamationTriangle, FaInfoCircle } from "react-icons/fa";

export default function AccountDeletion() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-20">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
              <FaTrashAlt className="text-red-600 text-2xl" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Delete Your Account
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Macroly values your privacy and control over your data. If you wish to permanently delete your account, please follow the steps below.
          </p>
        </div>

        {/* Warning Box */}
        <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8 rounded-r-lg">
          <div className="flex items-start">
            <FaExclamationTriangle className="text-red-400 text-xl mt-1 mr-3" />
            <div>
              <h3 className="text-lg font-semibold text-red-800 mb-2">
                Important Warning
              </h3>
              <p className="text-red-700">
                Account deletion is <strong>immediate and irreversible</strong>. Once deleted, your account cannot be restored and all your data will be permanently removed.
              </p>
            </div>
          </div>
        </div>

        {/* Steps Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <FaInfoCircle className="text-blue-600 mr-3" />
            Steps to Delete Your Account
          </h2>
          
          <div className="space-y-6">
            {[
              {
                step: 1,
                title: "Open the Macroly app",
                description: "Launch the Macroly app on your mobile device."
              },
              {
                step: 2,
                title: "Navigate to Settings",
                description: "Go to the Settings page from the navigation bar in the app."
              },
              {
                step: 3,
                title: "Find Delete Account",
                description: "Scroll to the bottom of the Settings page to find the Delete Account option."
              },
              {
                step: 4,
                title: "Tap Delete Account",
                description: "Tap the Delete Account button (usually displayed in red)."
              },
              {
                step: 5,
                title: "Confirm Deletion",
                description: "Confirm the deletion when prompted. This action cannot be undone."
              }
            ].map((item) => (
              <div key={item.step} className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What Happens Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            What Happens After Deletion
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">
                Your account and all associated personal data (including your profile information and logged meals) will be <strong>permanently deleted</strong>.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">
                Once deleted, your account cannot be restored.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">
                Some non-personal, aggregated data may be retained for analytics and service improvement, but it will no longer be linked to your identity.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Notes */}
        <div className="bg-blue-50 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Additional Notes
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">
                Account deletion is <strong>immediate</strong> and irreversible.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">
                If you have any issues deleting your account, please contact us at{" "}
                <a 
                  href="mailto:macrolyapp@gmail.com" 
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  macrolyapp@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Support Contact */}
        <div className="text-center bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Need Help?
          </h3>
          <p className="text-gray-600 mb-6">
            If you're having trouble with account deletion or have questions about your data, we're here to help.
          </p>
          <a
            href="/contact"
            className="inline-block bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors duration-200"
          >
            Contact Support
          </a>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-gray-500">
          <p>© 2025 Macroly. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
