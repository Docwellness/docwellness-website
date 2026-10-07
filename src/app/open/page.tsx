import type { Metadata } from "next";
import OpenApp from "@/components/open-app";

export const metadata: Metadata = {
  title: "Open the app",
  description: "Open the Docwellness app, or get it on Google Play.",
  robots: { index: false },
};

export default function OpenPage() {
  return (
    <section className="bg-brand-primary-light">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="text-3xl font-bold text-brand-text md:text-4xl">Open Docwellness</h1>
        <p className="mx-auto mt-4 max-w-md text-brand-text-secondary">
          Taking you to the app. If it isn&apos;t installed on your phone yet, you&apos;ll be sent
          to Google Play to get it.
        </p>
        <div className="mt-8">
          <OpenApp />
        </div>
      </div>
    </section>
  );
}
