import React from 'react';
import { PageLayout } from '../components/layouts/PageLayout';

export function PrivacyPolicy() {
  return (
    <PageLayout title="Privacy Policy">
      <div className="prose prose-invert max-w-none">
        <section className="mb-8">
          <p className="text-gray-300">
            This Privacy Policy ("Policy") outlines the practices of Vantexid Private Limited ("Lumeth," "we," "us," or "our") regarding the collection, use, handling, and processing of data provided by users in connection with our services. By accessing our application or using our products or services, you agree to the terms of this Policy and consent to the handling of your information as described herein.
          </p>
          <p className="text-gray-300 mt-4">
            At Lumeth, we are committed to protecting your privacy in compliance with applicable laws and regulations. We encourage you to review this Policy to understand how your data is managed. Please note that this Policy may be updated periodically, and it is your responsibility to stay informed of any changes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-amber-400 to-purple-600 text-transparent bg-clip-text">
            Data We Collect
          </h2>
          <p className="text-gray-300 mb-4">
            We may collect the following types of information from you:
          </p>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>Name</li>
            <li>Contact information, including address, email address, and phone number</li>
            <li>Demographic information, preferences, and interests</li>
            <li>Personal data or other information relevant to providing our services, as defined under applicable Indian laws</li>
          </ul>
          <p className="text-gray-300 mt-4">
            <strong>Note:</strong> We do not collect or store any credit card, debit card, or similar financial data in compliance with Indian laws. All data collected will adhere strictly to applicable legal guidelines.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-amber-400 to-purple-600 text-transparent bg-clip-text">
            Data Usage
          </h2>
          <p className="text-gray-300 mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>Provide and improve the services offered by Lumeth</li>
            <li>Maintain internal records</li>
            <li>Enhance our products or services based on user feedback</li>
            <li>Communicate updates, offers, and other relevant information about our services</li>
            <li>Conduct internal training and quality assurance activities</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-amber-400 to-purple-600 text-transparent bg-clip-text">
            Data Sharing
          </h2>
          <p className="text-gray-300 mb-4">
            Your information may be shared with:
          </p>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>Third-party service providers to facilitate the delivery of services, address queries, or for operational purposes</li>
            <li>Our group companies where applicable</li>
            <li>Auditors, advisors, or consultants for business and compliance purposes</li>
            <li>Government authorities or law enforcement agencies to meet legal or regulatory requirements</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-amber-400 to-purple-600 text-transparent bg-clip-text">
            Cookies
          </h2>
          <p className="text-gray-300">
            We use cookies to enhance your experience and analyze user behavior. You may disable cookies in your browser settings; however, this may affect your ability to access certain features of our services. Please note that third-party service providers may have their own privacy policies regarding cookies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-amber-400 to-purple-600 text-transparent bg-clip-text">
            Your Rights
          </h2>
          <p className="text-gray-300 mb-4">
            You have the following rights concerning your data:
          </p>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li><strong>Access and Correction:</strong> Request access to or corrections of your data.</li>
            <li><strong>Withdrawal of Consent:</strong> Withdraw your consent to data usage, which may impact our ability to provide services.</li>
          </ul>
          <p className="text-gray-300 mt-4">
            These rights are subject to compliance with applicable laws.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-amber-400 to-purple-600 text-transparent bg-clip-text">
            Data Retention
          </h2>
          <p className="text-gray-300">
            We retain your data only as long as necessary to provide our services and as permitted by law. All processing of your data will align with this Policy and applicable legal requirements.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-amber-400 to-purple-600 text-transparent bg-clip-text">
            Data Security
          </h2>
          <p className="text-gray-300">
            We use commercially reasonable measures to protect your data's integrity and security. However, no method of data transmission or storage is entirely secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-amber-400 to-purple-600 text-transparent bg-clip-text">
            Queries or Grievances
          </h2>
          <p className="text-gray-300">
            If you have questions or concerns about this Policy, please contact our Grievance Officer using the contact details provided in the Lumeth app.
          </p>
        </section>
      </div>
    </PageLayout>
  );
}