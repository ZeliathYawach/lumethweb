import React from 'react';
import { PageLayout } from '../components/layouts/PageLayout';

export function TermsAndConditions() {
  return (
    <PageLayout title="Terms and Conditions">
      <div className="prose prose-invert max-w-none">
        <section className="mb-8">
          <p className="text-gray-300">
            Welcome to Lumeth, a mobile application ("App") provided by Vantexid Private Limited ("Company," "we," "us," or "our"). These Terms and Conditions ("Terms") govern your access to and use of Lumeth and its related services ("Services"). By accessing or using Lumeth, you agree to be bound by these Terms. If you do not agree to these Terms, please refrain from using Lumeth.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-amber-400 to-purple-600 text-transparent bg-clip-text">
            1. Use of Lumeth
          </h2>
          <p className="text-gray-300">
            By accessing Lumeth, you agree to:
          </p>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>Provide accurate, complete, and up-to-date information during registration and throughout your use of the App.</li>
            <li>Take full responsibility for all activities conducted through your registered account.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-amber-400 to-purple-600 text-transparent bg-clip-text">
            2. Disclaimer of Warranties
          </h2>
          <p className="text-gray-300">
            While we strive to offer accurate and timely information through Lumeth, we:
          </p>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>Do not guarantee the accuracy, completeness, or reliability of the information provided.</li>
            <li>Emphasize that your use of Lumeth is at your own risk and discretion. It is your responsibility to ensure Lumeth meets your requirements.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-amber-400 to-purple-600 text-transparent bg-clip-text">
            3. Intellectual Property
          </h2>
          <p className="text-gray-300">
            All content available through Lumeth, including but not limited to text, graphics, logos, and images, is the exclusive property of Vantexid Private Limited. You agree not to:
          </p>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>Claim ownership of Lumeth's content.</li>
            <li>Use Lumeth's intellectual property without prior written consent.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-amber-400 to-purple-600 text-transparent bg-clip-text">
            4. Prohibited Use
          </h2>
          <p className="text-gray-300">
            You agree not to use Lumeth for:
          </p>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>Any unlawful, illegal, or prohibited purposes.</li>
            <li>Any actions that may harm the functionality, reputation, or security of Lumeth.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-amber-400 to-purple-600 text-transparent bg-clip-text">
            5. Third-Party Links
          </h2>
          <p className="text-gray-300">
            Lumeth may contain links to third-party websites. We are not responsible for the content, terms, or privacy practices of these websites. Your use of such websites is subject to their respective policies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-amber-400 to-purple-600 text-transparent bg-clip-text">
            6. Limited Scope of Services
          </h2>
          <p className="text-gray-300">
            At launch, Lumeth focuses on AI-driven tools, such as:
          </p>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>LUMIA (Lumeth Unique Makeover Interaction Assistant): Personalized chat and guidance for beauty needs.</li>
            <li>STYLL (Smart Technology for Your Lumeth Look): AI-powered solutions to enhance beauty experiences.</li>
          </ul>
          <p className="text-gray-300 mt-2">
            Note: A booking system is not included in the initial release.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-amber-400 to-purple-600 text-transparent bg-clip-text">
            7. No Payment Transactions
          </h2>
          <p className="text-gray-300">
            Lumeth does not facilitate payment transactions within the App. Any service arrangements, including payments, must occur directly between users and service providers outside the platform.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-amber-400 to-purple-600 text-transparent bg-clip-text">
            8. Force Majeure
          </h2>
          <p className="text-gray-300">
            We are not liable for any failure to perform obligations under these Terms due to circumstances beyond our reasonable control, including but not limited to natural disasters, acts of war, or governmental restrictions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-amber-400 to-purple-600 text-transparent bg-clip-text">
            9. Governing Law and Jurisdiction
          </h2>
          <p className="text-gray-300">
            These Terms shall be governed by the laws of India. Any disputes arising out of or related to these Terms shall be exclusively resolved by the courts in Chengannur, Kerala.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-amber-400 to-purple-600 text-transparent bg-clip-text">
            10. Contact Us
          </h2>
          <p className="text-gray-300">
            If you have any questions or concerns regarding these Terms, please contact us through the information provided within Lumeth.
          </p>
        </section>
      </div>
    </PageLayout>
  );
}