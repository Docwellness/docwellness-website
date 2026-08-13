import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms governing your use of the DocWellness app and services.",
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-brand-primary-light">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h1 className="text-4xl font-bold text-brand-text md:text-5xl">Terms of Service</h1>
          <p className="mt-4 text-sm text-brand-text-secondary">Last updated: March 2026</p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <div className="space-y-10 text-brand-text-secondary">
          <p>
            Welcome to DocWellness. By using our app, you agree to these Terms of Service.
          </p>

          <div>
            <h2 className="text-xl font-bold text-brand-text">1. Acceptance of Terms</h2>
            <p className="mt-4">
              By accessing or using DocWellness, you agree to be bound by these terms. If you do
              not agree, please do not use the app.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-text">2. Description of Service</h2>
            <p className="mt-4">
              DocWellness provides diet planning, meal tracking, and wellness monitoring services.
              Our dieticians create personalized diet plans based on your health profile.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-text">3. User Responsibilities</h2>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-brand-primary">•</span>
                Provide accurate health information
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-brand-primary">•</span>
                Follow diet plans as recommended by your dietician
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-brand-primary">•</span>
                Keep your account credentials secure
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-brand-primary">•</span>
                Use the app for personal, non-commercial purposes only
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-text">4. Health Disclaimer</h2>
            <p className="mt-4">
              DocWellness is not a substitute for professional medical advice. Always consult with
              your healthcare provider before making significant dietary changes. Our dieticians
              provide dietary guidance, not medical treatment.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-text">5. Payment</h2>
            <p className="mt-4">
              Diet plan services may require payment. Payment terms will be communicated through
              the app. All payments are subject to our refund policy.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-text">6. Account Termination</h2>
            <p className="mt-4">
              You may delete your account at any time. We reserve the right to suspend or
              terminate accounts that violate these terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-text">7. Limitation of Liability</h2>
            <p className="mt-4">
              DocWellness is provided &quot;as is&quot;. We are not liable for any health outcomes
              resulting from following or not following diet plans provided through the app.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-text">8. Changes to Terms</h2>
            <p className="mt-4">
              We may update these terms from time to time. Continued use of the app constitutes
              acceptance of updated terms.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
