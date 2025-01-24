import React from 'react';
import { PageLayout } from '../components/layouts/PageLayout';

export function CancellationPolicy() {
  return (
    <PageLayout title="Cancellation and Refund Policy">
      <div className="prose prose-invert max-w-none">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-amber-400 to-purple-600 text-transparent bg-clip-text">
            Cancellation Policy
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">1. Cancellation Window</h3>
              <p className="text-gray-300">
                Cancellations are allowed within a specific timeframe based on the service price.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">2. Cancellation Eligibility</h3>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>For services priced below ₹1,000: Cancellations can only be requested before the start time of the booked slot.</li>
                <li>For services priced at ₹1,000 or more: Cancellations can be requested until the end time of the booked slot, provided the booking is paused by the customer.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">3. Cancellation Procedure</h3>
              <p className="text-gray-300">
                Customers must initiate cancellations through the Lumeth app or by contacting our Customer Service team.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">4. Cancellation After Start Time</h3>
              <p className="text-gray-300">
                Cancellations requested after the start time of the booked slot are not eligible for refunds.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">5. AI Subscription Cancellations</h3>
              <p className="text-gray-300">
                AI subscriptions can be canceled at any time, but no refunds will be provided for subscription fees already paid.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-amber-400 to-purple-600 text-transparent bg-clip-text">
            Refund Policy
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">1. Refund Eligibility</h3>
              <p className="text-gray-300">
                Refunds are subject to eligibility based on the service price and the timing of the cancellation request.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">2. Refund Processing Time</h3>
              <p className="text-gray-300">
                Approved refunds will be processed within 3–5 business days.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">3. Refund Deductions</h3>
              <p className="text-gray-300">
                Refund amounts will be processed after deducting applicable service charges, as per the company's refund policy.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">4. Exceptions for AI Subscriptions</h3>
              <p className="text-gray-300">
                AI subscriptions are non-refundable. Customers can cancel their subscription, but no refund will be provided for any unused portion of the subscription period.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">5. Dynamic Booking Features</h3>
              <p className="text-gray-300">
                For dynamic booking features (e.g., selecting preferred service providers and booking times), the cancellation and refund policies outlined above still apply.
              </p>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}