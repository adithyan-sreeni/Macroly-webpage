import React from "react";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Terms and Conditions
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
          <div className="text-sm text-gray-600 mb-6">
            Last updated: September 7, 2025
          </div>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              1. Introduction
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Welcome to Macroly, an AI-powered nutrition tracking and meal planning mobile application ("App") developed by Adithyan Valayil Sreeni ("Developer", "we", "us", "our"). These Terms and Conditions ("Terms") govern your use of the Macroly mobile application and related services.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              By downloading, installing, accessing, or using Macroly, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our App.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">Developer Information:</h3>
              <ul className="text-gray-700 space-y-1">
                <li><strong>Developer:</strong> Adithyan Valayil Sreeni</li>
                <li><strong>Email:</strong> adithyansreeni8@gmail.com</li>
                <li><strong>Phone:</strong> +91 9656298751</li>
                <li><strong>Location:</strong> Kerala, India</li>
                <li><strong>Student Developer:</strong> This app is developed by an individual student developer</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              2. Acceptance of Terms
            </h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              By creating an account, accessing, or using Macroly, you confirm that:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>You are at least 13 years of age</li>
              <li>You have read, understood, and agree to be bound by these Terms</li>
              <li>You have the legal capacity to enter into this agreement</li>
              <li>All information you provide is accurate and complete</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              3. Description of Service
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Macroly is a nutrition tracking application that provides:
            </p>
            
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Core Features:</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li><strong>Meal Logging:</strong> Track your daily food intake with AI-powered nutritional analysis</li>
                <li><strong>Macro Tracking:</strong> Monitor calories, protein, carbohydrates, and fat intake</li>
                <li><strong>Personalized Plans:</strong> Custom nutrition plans based on your profile and goals</li>
                <li><strong>AI Analysis:</strong> AI-powered meal recognition and nutritional breakdown using Google Gemini AI</li>
                <li><strong>Real-time Sync:</strong> Cloud-based data synchronization across devices</li>
                <li><strong>Progress Tracking:</strong> Daily, weekly, and historical nutrition data</li>
                <li><strong>Goal Setting:</strong> Personalized nutrition goals based on age, weight, height, activity level, and objectives</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Technical Features:</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Firebase Authentication (Phone Number-based)</li>
                <li>Cloud Firestore database for data storage</li>
                <li>Push notifications for reminders and updates</li>
                <li>Real-time data synchronization</li>
                <li>Offline functionality with cloud sync</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              4. AI Technology and Accuracy Disclaimer
            </h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
              <div className="flex">
                <div className="ml-3">
                  <p className="text-sm text-yellow-700">
                    <strong>IMPORTANT ACCURACY DISCLAIMER</strong>
                  </p>
                  <p className="mt-2 text-sm text-yellow-700">
                    Nutritional information provided by our AI is estimated and may not be completely accurate. 
                    The AI analysis is based on machine learning models and general nutritional databases.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">AI-Powered Features:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Macroly uses Google Gemini AI technology to analyze meal descriptions and estimate nutritional values</li>
                  <li>AI analysis is based on machine learning models and general nutritional databases</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Accuracy Limitations:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li><strong>NOT 100% ACCURATE:</strong> Nutritional information provided by our AI is estimated</li>
                  <li>Accuracy depends on the detail and accuracy of meal descriptions provided</li>
                  <li>Portion sizes, cooking methods, and ingredient variations can affect accuracy</li>
                  <li>Users should verify important nutritional information independently when needed</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              5. Medical and Health Disclaimers
            </h2>
            <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
              <div className="flex">
                <div className="ml-3">
                  <p className="text-sm text-red-700">
                    <strong>IMPORTANT MEDICAL DISCLAIMER</strong>
                  </p>
                  <p className="mt-2 text-sm text-red-700">
                    Macroly is NOT a medical application and does NOT provide medical advice. 
                    Information provided is for general educational and tracking purposes only.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Not Medical Advice:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Always consult qualified healthcare professionals for medical advice</li>
                  <li>Do not use this app to diagnose, treat, cure, or prevent any medical condition</li>
                  <li>Information provided is for general educational and tracking purposes only</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Professional Consultation:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Consult healthcare providers before making significant dietary changes</li>
                  <li>Seek professional guidance if you have medical conditions, allergies, or dietary restrictions</li>
                  <li>This app is not suitable for individuals with eating disorders without professional supervision</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Limitation of Liability:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>We are not responsible for any health consequences resulting from app use</li>
                  <li>Users assume all risks associated with dietary decisions based on app information</li>
                  <li>We disclaim all liability for medical outcomes or health-related damages</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              6. User Accounts and Authentication
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Account Creation:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Users must provide a valid phone number for authentication</li>
                  <li>Phone number verification is required through SMS OTP</li>
                  <li>Users must complete an onboarding process including personal stats and goals</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Account Responsibilities:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>You are responsible for maintaining the confidentiality of your account</li>
                  <li>You agree to notify us immediately of any unauthorized use</li>
                  <li>You are responsible for all activities that occur under your account</li>
                  <li>One account per user is permitted</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              7. Privacy and Data Protection
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Data Collection:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li><strong>Personal Information:</strong> Phone number, name, age, weight, height, gender, activity level, goals</li>
                  <li><strong>Usage Data:</strong> Meal logs, nutritional data, app interaction data</li>
                  <li><strong>Device Information:</strong> Device type, OS version, app version</li>
                  <li><strong>Permissions:</strong> Notification permissions only</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Data Storage and Security:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Data is stored on secure Firebase/Google Cloud infrastructure</li>
                  <li>Industry-standard encryption and security measures</li>
                  <li>Regular security updates and monitoring</li>
                  <li>Data backup and recovery systems</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Your Privacy Rights:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Access your personal data</li>
                  <li>Request data correction or deletion</li>
                  <li>Export your data</li>
                  <li>Opt-out of non-essential communications</li>
                </ul>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed mt-4">
              For detailed privacy information, please see our Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              8. Subscription and Payment Terms
            </h2>
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Current Pricing:</h3>
                <p className="text-gray-700">Macroly is currently <strong>FREE</strong> to download and use with all core features available at no cost.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Future Premium Features:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li><strong>In-App Purchases:</strong> Premium features and subscriptions may be introduced</li>
                  <li><strong>Subscription Plans:</strong> Advanced features, extended history, additional AI capabilities</li>
                  <li><strong>Pricing:</strong> Will be clearly displayed before purchase</li>
                  <li><strong>Auto-Renewal:</strong> Subscriptions may auto-renew unless cancelled</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Payment Processing:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Payments processed through Google Play Store or Apple App Store</li>
                  <li>Subject to respective platform terms and conditions</li>
                  <li>Refunds subject to platform policies</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              9. Prohibited Uses
            </h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              Users may NOT:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Use the app for commercial purposes without permission</li>
              <li>Attempt to reverse engineer or extract AI models</li>
              <li>Upload harmful, illegal, or inappropriate content</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Interfere with app security or functionality</li>
              <li>Create multiple accounts or share accounts</li>
              <li>Use automated systems to access the app</li>
              <li>Attempt to gain unauthorized access to our systems</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              10. Intellectual Property Rights
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Our Rights:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Macroly app, design, code, and AI models are our intellectual property</li>
                  <li>Protected by copyright, trademark, and other laws</li>
                  <li>All rights reserved unless expressly granted</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Third-Party Services:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Google Gemini AI: Subject to Google's terms and conditions</li>
                  <li>Firebase/Google Cloud: Subject to Google's terms</li>
                  <li>Icons and assets: Licensed from respective sources</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">User License:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Limited, non-exclusive, non-transferable license to use the app</li>
                  <li>For personal, non-commercial use only</li>
                  <li>Cannot modify, distribute, or create derivative works</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              11. Limitation of Liability
            </h2>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="text-sm text-gray-700 font-semibold">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW:
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">General Limitations:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>We provide the app "AS IS" without warranties</li>
                  <li>We are not liable for indirect, incidental, or consequential damages</li>
                  <li>Our liability is limited to the amount you paid for the app (currently $0)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Specific Disclaimers:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li><strong>Nutritional Accuracy:</strong> No guarantee of 100% accurate nutritional information</li>
                  <li><strong>Health Outcomes:</strong> Not responsible for health or medical consequences</li>
                  <li><strong>Data Loss:</strong> Users should maintain their own data backups</li>
                  <li><strong>Service Interruptions:</strong> Not liable for temporary service outages</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              12. Termination
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">User Termination:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>You may delete your account and stop using the app at any time</li>
                  <li>Account deletion removes your data from our systems</li>
                  <li>Some data may be retained for legal compliance</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Our Termination Rights:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>We may suspend or terminate accounts for Terms violations</li>
                  <li>We may discontinue the app with reasonable notice</li>
                  <li>Immediate termination for serious violations</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Effect of Termination:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>License to use app terminates immediately</li>
                  <li>User data may be deleted according to our retention policy</li>
                  <li>Surviving clauses remain in effect</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              13. Children's Privacy
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Age Requirements:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>App intended for users 13 years and older</li>
                  <li>Users under 13 should not create accounts</li>
                  <li>Parents/guardians responsible for monitoring minor's use</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Parental Consent:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Users under 18 should have parental permission</li>
                  <li>Parents may request account deletion for minors</li>
                  <li>We do not knowingly collect data from children under 13</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              14. Changes to Terms
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We reserve the right to modify these Terms at any time. Changes will be posted in the app with updated date, and continued use constitutes acceptance of changes.
            </p>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Notification:</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Significant changes will be highlighted to users</li>
                <li>Users encouraged to review Terms periodically</li>
                <li>Date of last update shown at the top of these Terms</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              15. Contact Information
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              If you have any questions about these Terms and Conditions, please contact us:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg space-y-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-700"><strong>Developer:</strong> Adithyan Valayil Sreeni</p>
                  <p className="text-gray-700"><strong>Email:</strong> adithyansreeni8@gmail.com</p>
                  <p className="text-gray-700"><strong>Phone:</strong> +91 9656298751</p>
                  <p className="text-gray-700"><strong>Location:</strong> Kerala, India</p>
                </div>
                <div>
                  <p className="text-gray-700"><strong>Support:</strong> Contact via email for questions</p>
                  <p className="text-gray-700"><strong>Technical Support:</strong> Use in-app support features</p>
                  <p className="text-gray-700"><strong>Response Time:</strong> May vary as this is a student-developed project</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              16. Governing Law
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Applicable Law:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>These Terms governed by the laws of India</li>
                  <li>Disputes subject to jurisdiction of Kerala, India courts</li>
                  <li>Indian Consumer Protection Act applies where applicable</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Dispute Resolution:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Attempt to resolve disputes through direct communication first</li>
                  <li>Formal disputes subject to Indian legal system</li>
                  <li>Alternative dispute resolution methods may be available</li>
                </ul>
              </div>
            </div>
          </section>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-8">
            <div className="flex">
              <div className="ml-3">
                <p className="text-sm text-blue-700">
                  <strong>Student Developer Notice:</strong> This application is developed by an individual student as a learning project. 
                  While we strive to provide a quality service, please understand the limitations of a student-developed application and use accordingly.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8 pt-8 border-t border-gray-200">
            <p className="text-gray-600">
              <strong>Effective Date:</strong> These Terms are effective as of September 7, 2025.
            </p>
            <p className="text-gray-600 mt-2">
              By using Macroly, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
