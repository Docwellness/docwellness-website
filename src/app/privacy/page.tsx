import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How DocWellness collects, uses, and protects your personal and health information.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-brand-primary-light">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h1 className="text-4xl font-bold text-brand-text md:text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-sm text-brand-text-secondary">Last updated: March 2026</p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <div className="space-y-10 text-brand-text-secondary">
          <p>
            DocWellness (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to
            protecting your privacy. This Privacy Policy explains how we collect, use, and
            safeguard your information.
          </p>

          <div>
            <h2 className="text-xl font-bold text-brand-text">Information We Collect</h2>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-brand-primary">•</span>
                Personal information (name, email, phone number)
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-brand-primary">•</span>
                Health data (weight, height, BMI, dietary preferences)
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-brand-primary">•</span>
                Meal logs and diet plan progress
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-brand-primary">•</span>
                Device information for app functionality
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-text">How We Use Your Information</h2>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-brand-primary">•</span>
                To provide personalized diet plans and health tracking
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-brand-primary">•</span>
                To connect you with your assigned dietician
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-brand-primary">•</span>
                To send notifications about your diet plan and progress
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-brand-primary">•</span>
                To improve our services
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-text">Data Security</h2>
            <p className="mt-4">
              We implement appropriate security measures to protect your personal information.
              Your health data is stored securely and is only accessible to you and your assigned
              dietician.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-text">Your Rights</h2>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-brand-primary">•</span>
                Access your personal data
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-brand-primary">•</span>
                Request correction of your data
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-brand-primary">•</span>
                Delete your account and all associated data
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-brand-primary">•</span>
                Opt out of notifications
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-text">Contact Us</h2>
            <p className="mt-4">
              For any privacy concerns, please contact us through the app&apos;s chat feature or
              email support.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
