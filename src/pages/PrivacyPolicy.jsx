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
            Last updated: {new Date().toLocaleDateString()}
          </div>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              1. Information We Collect
            </h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              At Macroly, we collect several types of information to provide and
              improve our holistic health companion service:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>
                Personal information such as name, email address, and profile
                details
              </li>
              <li>
                Health and dietary information through conversational logging
                interactions
              </li>
              <li>
                Exercise and activity data shared through natural dialogue
              </li>
              <li>
                Photos of food items for AI analysis and nutritional calculation
              </li>
              <li>Chat conversations with our AI health companion</li>
              <li>Device information and app usage analytics</li>
              <li>
                Location data (only when necessary for food database accuracy)
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              We use the collected information to:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>
                Provide accurate nutritional analysis and real-time energy
                balance tracking
              </li>
              <li>Enable conversational logging through AI-powered dialogue</li>
              <li>Generate personalized health insights and recommendations</li>
              <li>Improve our AI algorithms and conversational capabilities</li>
              <li>Send you important updates and notifications</li>
              <li>Provide customer support and respond to your inquiries</li>
              <li>
                Analyze usage patterns to enhance app performance and
                personalization
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              3. Data Security
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We implement industry-standard security measures to protect your
              personal information. Your data is encrypted both in transit and
              at rest. We regularly review and update our security practices to
              ensure your information remains safe and secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              4. Data Sharing
            </h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              We do not sell your personal information. We may share your data
              only in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>With your explicit consent</li>
              <li>To comply with legal obligations</li>
              <li>
                With trusted service providers who assist in app functionality
              </li>
              <li>In aggregated, anonymized form for research purposes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              5. Your Rights
            </h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Access your personal data</li>
              <li>Correct inaccurate information</li>
              <li>Delete your account and associated data</li>
              <li>Export your data in a portable format</li>
              <li>Opt-out of non-essential communications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              6. Cookies and Tracking
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We use cookies and similar technologies to enhance your
              experience, analyze app usage, and provide personalized content.
              You can manage your cookie preferences through your device
              settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              7. Children's Privacy
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Macroly is not intended for children under 13 years of age. We do
              not knowingly collect personal information from children under 13.
              If you believe we have collected information from a child under
              13, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              8. International Data Transfers
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Your information may be transferred to and processed in countries
              other than your own. We ensure that such transfers comply with
              applicable data protection laws and that appropriate safeguards
              are in place.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              9. Changes to This Policy
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this Privacy Policy from time to time. We will
              notify you of any material changes by posting the new policy on
              our website and updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              10. Contact Us
            </h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about this Privacy Policy or our data
              practices, please contact us:
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700">Email: privacy@macroly.com</p>
              <p className="text-gray-700">
                Address: 123 Health Tech Ave, San Francisco, CA 94105
              </p>
              <p className="text-gray-700">Phone: +1 (555) 123-4567</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
