import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Privacy Policy
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
              Welcome to Macroly, an AI-powered nutrition tracking mobile application ("App") developed by Adithyan Valayil Sreeni ("Developer", "we", "us", "our"). This Privacy Policy explains how we collect, use, store, and protect your personal information when you use our App.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              We are committed to protecting your privacy and being transparent about our data practices. This Privacy Policy should be read together with our Terms and Conditions.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">Developer Information:</h3>
              <ul className="text-gray-700 space-y-1">
                <li><strong>Developer:</strong> Adithyan Valayil Sreeni</li>
                <li><strong>Email:</strong> macrolyapp@gmail.com</li>
                <li><strong>Phone:</strong> +91 9656298751</li>
                <li><strong>Location:</strong> Kerala, India</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              2. Information We Collect
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Personal Information You Provide:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li><strong>Account Information:</strong> Phone number (for authentication via SMS OTP), display name, profile information</li>
                  <li><strong>Health Data:</strong> Age, weight, height, gender, activity level, fitness goals, dietary preferences</li>
                  <li><strong>Nutrition Data:</strong> Daily meal logs, food descriptions, nutritional intake data, weight tracking, progress data</li>
                  <li><strong>User Content:</strong> Meal descriptions, custom modifications, app feedback</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Information Collected Automatically:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li><strong>Usage Data:</strong> App interaction patterns, session duration, navigation paths, feature usage</li>
                  <li><strong>Device Information:</strong> Device type, OS version, app version, network connection type</li>
                  <li><strong>Technical Data:</strong> Crash reports, error logs, performance analytics</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Third-Party Service Data:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li><strong>Firebase/Google Services:</strong> Authentication tokens, cloud storage metadata, push notification tokens</li>
                  <li><strong>AI Processing:</strong> Meal descriptions sent to Google Gemini AI for nutritional analysis</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              3. How We Use Your Information
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Primary App Functions:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li><strong>Nutrition Tracking:</strong> Process meal descriptions using AI, calculate nutritional information, track historical data</li>
                  <li><strong>Personalization:</strong> Create custom nutrition plans, adjust recommendations, provide relevant content</li>
                  <li><strong>Account Management:</strong> Authenticate via phone number, maintain profile, sync data across devices</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">App Improvement:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Understand user interaction patterns and improve app performance</li>
                  <li>Identify and fix bugs and technical issues</li>
                  <li>Enhance AI model accuracy using anonymized data</li>
                  <li>Develop new features and enhancements</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Communication:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Send authentication codes via SMS</li>
                  <li>Provide important app updates and announcements</li>
                  <li>Send push notifications for reminders and insights</li>
                  <li>Respond to support requests</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              4. Data Sharing and Disclosure
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Third-Party Service Providers:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li><strong>Google/Firebase Services:</strong> Authentication, data storage, push notifications, analytics</li>
                  <li><strong>Google Gemini AI:</strong> Meal descriptions sent for nutritional analysis</li>
                  <li>Data processing subject to Google's privacy policies</li>
                </ul>
              </div>

              <div className="bg-red-50 border-l-4 border-red-400 p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">We DO NOT:</h3>
                <ul className="list-disc list-inside text-red-700 space-y-2 ml-4">
                  <li>Sell your personal data to third parties</li>
                  <li>Share identifiable personal information for advertising</li>
                  <li>Provide your data to marketing companies</li>
                  <li>Share your health information with insurance companies</li>
                  <li>Use your data for purposes other than app functionality</li>
                </ul>
              </div>

              <div className="bg-green-50 border-l-4 border-green-400 p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">We MAY Share Data:</h3>
                <ul className="list-disc list-inside text-green-700 space-y-2 ml-4">
                  <li>With service providers who help us operate the app</li>
                  <li>When required by law or legal process</li>
                  <li>To protect our rights and prevent fraud</li>
                  <li>In anonymized, aggregated form for research purposes</li>
                  <li>In case of business transfer (with user notification)</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              5. Data Storage and Security
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Data Storage:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Data stored on Google Cloud Platform via Firebase</li>
                  <li>Industry-standard encryption at rest and in transit</li>
                  <li>Regular automated backups and redundancy</li>
                  <li>Data retention while account is active</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Security Measures:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li><strong>Technical:</strong> End-to-end encryption, secure authentication, regular security updates</li>
                  <li><strong>Administrative:</strong> Limited access to data, staff training, incident response procedures</li>
                  <li><strong>Physical:</strong> Secure data centers with Google Cloud Platform</li>
                </ul>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Data Breach Response:</h3>
                <p className="text-yellow-700">In the event of a data breach, we will notify affected users within 72 hours when required, report to authorities as needed, and take immediate steps to secure the breach.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              6. Your Privacy Rights
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Access and Control:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li><strong>Data Access:</strong> View all personal data we have about you</li>
                  <li><strong>Data Modification:</strong> Update profile information and correct inaccurate data</li>
                  <li><strong>Data Deletion:</strong> Delete your account and request complete data removal</li>
                  <li><strong>Data Export:</strong> Export your data in a portable format</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Communication Preferences:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Enable or disable push notifications</li>
                  <li>Choose notification types and frequency</li>
                  <li>Opt-out of optional communications</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Regional Privacy Rights:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li><strong>European Union (GDPR):</strong> Right to access, rectify, erase, data portability, restrict processing</li>
                  <li><strong>California (CCPA):</strong> Right to know, delete, opt-out of sale (we don't sell data)</li>
                  <li><strong>India:</strong> Right to access, correction, data portability, be forgotten</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              7. AI and Machine Learning
            </h2>
            
            <div className="space-y-4">
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">AI Data Processing:</h3>
                <ul className="list-disc list-inside text-blue-700 space-y-2 ml-4">
                  <li><strong>Google Gemini AI:</strong> Processes meal descriptions for nutritional analysis</li>
                  <li>No personal identifiers sent to AI services</li>
                  <li>Results not linked to personal profiles in AI systems</li>
                </ul>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">AI Limitations:</h3>
                <p className="text-yellow-700">
                  <strong>Important:</strong> AI nutritional analysis is estimated, not 100% accurate. 
                  Results depend on description quality and should not be relied upon for medical decisions.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              8. Children's Privacy
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Age Requirements:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>App intended for users 3 years and older</li>
                  <li>Users under 13 require parental/guardian supervision</li>
                  <li>Parents/guardians responsible for monitoring minor's use</li>
                  <li>App rated 3+ by international rating authorities</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Parental Controls & Data Protection:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Users under 18 should have parental permission for account creation</li>
                  <li>Parents can request account deletion for minors</li>
                  <li>Adult supervision recommended for children under 13</li>
                  <li>Special data protection measures for users under 13</li>
                </ul>
              </div>

              <div className="bg-green-50 border-l-4 border-green-400 p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Global Age Ratings:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-green-700 text-sm">
                  <p>• <strong>ESRB (North America):</strong> Everyone (E)</p>
                  <p>• <strong>PEGI (Europe):</strong> PEGI 3</p>
                  <p>• <strong>USK (Germany):</strong> All ages</p>
                  <p>• <strong>ClassInd (Brazil):</strong> All ages</p>
                  <p>• <strong>IARC Generic:</strong> Rated for 3+</p>
                  <p>• <strong>Google Play (Global):</strong> Rated for 3+</p>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-400 p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Data Collection for Children Under 13:</h3>
              <p className="text-orange-700 text-sm">
                While the app is rated 3+, we implement special protections for children under 13. 
                We collect minimal data for this age group and require parental supervision for account creation and app usage.
                All data collection for children under 13 complies with COPPA requirements.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              9. Cookies and Tracking Technologies
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Technologies Used:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li><strong>Firebase Analytics:</strong> Tracks app usage patterns and performance</li>
                  <li><strong>Local Storage:</strong> Stores app preferences, settings, and authentication tokens</li>
                  <li>No third-party tracking cookies</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Control Options:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Disable analytics through device settings</li>
                  <li>Contact us to opt-out of data collection</li>
                  <li>Core app functionality will not be affected</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              10. International Data Transfers
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Cross-Border Processing:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Data stored on Google Cloud Platform servers globally</li>
                  <li>AI processing through Google's global infrastructure</li>
                  <li>Transfers comply with applicable data protection laws</li>
                  <li>Appropriate safeguards and security measures in place</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">India-Specific:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Data processing primarily occurs in India when possible</li>
                  <li>Transfers outside India comply with applicable regulations</li>
                  <li>Local data protection laws take precedence where applicable</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              11. Updates and Changes
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices, 
              technology, legal requirements, or other factors.
            </p>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Notification of Changes:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Users will be notified of significant policy changes</li>
                  <li>Changes will be posted in the app with updated date</li>
                  <li>Continued use constitutes acceptance of changes</li>
                  <li>Users can delete accounts if they disagree with changes</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Staying Informed:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Check this Privacy Policy periodically</li>
                  <li>Pay attention to in-app notifications</li>
                  <li>Review update notes when updating the app</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              12. Contact Information
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            
            <div className="bg-gray-50 p-4 rounded-lg space-y-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-700"><strong>Developer:</strong> Adithyan Valayil Sreeni</p>
                  <p className="text-gray-700"><strong>Email:</strong> macrolyapp@gmail.com</p>
                  <p className="text-gray-700"><strong>Phone:</strong> +91 9656298751</p>
                  <p className="text-gray-700"><strong>Location:</strong> Kerala, India</p>
                </div>
                <div>
                  <p className="text-gray-700"><strong>Data Protection Requests:</strong> Include your phone number and specify request type</p>
                  <p className="text-gray-700"><strong>Response Time:</strong> Acknowledgment within 48 hours, response within 30 days</p>
                  <p className="text-gray-700"><strong>Support:</strong> Email support available for all inquiries</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              13. Governing Law
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Applicable Law:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>This Privacy Policy is governed by the laws of India, particularly Kerala state</li>
                  <li>International compliance: GDPR for EU users, CCPA where applicable</li>
                  <li>Full compliance with applicable data protection regulations</li>
                </ul>
              </div>
            </div>
          </section>

          <div className="text-center mt-8 pt-8 border-t border-gray-200">
            <p className="text-gray-600">
              <strong>Effective Date:</strong> This Privacy Policy is effective as of September 7, 2025.
            </p>
            <p className="text-gray-600 mt-2">
              Thank you for trusting Macroly with your personal information. We are committed to protecting your privacy 
              while providing you with the best possible nutrition tracking experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
