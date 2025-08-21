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
            Last updated: {new Date().toLocaleDateString()}
          </div>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-600 leading-relaxed">
              By downloading, installing, or using the Macroly mobile
              application ("App"), you agree to be bound by these Terms and
              Conditions ("Terms"). If you do not agree to these Terms, please
              do not use the App.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              2. Description of Service
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Macroly is a holistic health companion that uses conversational AI
              to help users track their nutrition and fitness through natural
              dialogue. The App provides real-time energy balance monitoring,
              personalized insights, and adaptive goal setting to support your
              wellness journey.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              3. User Account and Data
            </h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              To use certain features of the App, you may need to create an
              account. You are responsible for:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>
                Maintaining the confidentiality of your account credentials
              </li>
              <li>Providing accurate and complete information</li>
              <li>Updating your information to keep it current</li>
              <li>All activities that occur under your account</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              4. Privacy and Data Protection
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Your privacy is important to us. We collect and process your
              personal data in accordance with our Privacy Policy. By using the
              App, you consent to the collection, use, and sharing of your
              information as described in our Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              5. Health Disclaimer
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Macroly is designed for informational purposes only and is not
              intended to replace professional medical advice, diagnosis, or
              treatment. Always consult with qualified healthcare professionals
              before making changes to your diet, exercise, or health routine.
              The App's conversational insights and recommendations are based on
              general wellness guidelines and may not be suitable for everyone.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              6. Prohibited Uses
            </h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              You agree not to use the App for any unlawful purpose or any
              purpose prohibited by these Terms. Prohibited uses include:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Violating any applicable laws or regulations</li>
              <li>Transmitting harmful or malicious content</li>
              <li>
                Attempting to gain unauthorized access to the App or its systems
              </li>
              <li>Using the App to harass, abuse, or harm others</li>
              <li>Reverse engineering or attempting to extract source code</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              7. Intellectual Property
            </h2>
            <p className="text-gray-600 leading-relaxed">
              The App and its original content, features, and functionality are
              owned by Macroly and are protected by international copyright,
              trademark, patent, trade secret, and other intellectual property
              laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              8. Subscription and Payment
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Some features of the App may require a paid subscription.
              Subscription fees are charged in advance and are non-refundable
              except as required by law. You may cancel your subscription at any
              time through your device's app store settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              9. Limitation of Liability
            </h2>
            <p className="text-gray-600 leading-relaxed">
              To the maximum extent permitted by law, Macroly shall not be
              liable for any indirect, incidental, special, consequential, or
              punitive damages, including but not limited to loss of profits,
              data, or use, arising out of your use of the App.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              10. Termination
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We may terminate or suspend your account and access to the App
              immediately, without prior notice, for any reason, including
              breach of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              11. Changes to Terms
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to modify these Terms at any time. We will
              notify users of any material changes by posting the new Terms on
              this page and updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              12. Contact Information
            </h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about these Terms and Conditions, please
              contact us at:
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700">Email: support@macroly.com</p>
              <p className="text-gray-700">Website: www.macroly.com</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
