import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "DocWellness exists to connect people with certified dieticians and make personalized nutrition guidance accessible day to day.",
};

const values = [
  {
    title: "Real experts, not algorithms alone",
    body: "Every plan on DocWellness is reviewed by a licensed dietician. Technology speeds up logging and tracking; it doesn't replace clinical judgment.",
  },
  {
    title: "Small changes, sustained",
    body: "We optimize for what people actually keep doing six months later, not what looks impressive in week one.",
  },
  {
    title: "Your data helps your care",
    body: "The information you log gives your dietician a clearer picture between visits, so guidance is based on your patterns, not a guess.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-brand-primary-light">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h1 className="text-4xl font-bold text-brand-text md:text-5xl">
            Nutrition guidance shouldn&apos;t be a one-time PDF
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-brand-text-secondary">
            DocWellness was built to give people ongoing access to a real dietician, and the
            tools to make following a plan simple enough to actually keep doing.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="text-2xl font-bold text-brand-text">Our story</h2>
        <div className="mt-6 space-y-5 text-brand-text-secondary">
          <p>
            DocWellness started from a simple observation: most nutrition advice is either too
            generic to be useful, or too expensive and infrequent to keep up with real life.
            A one-off consultation can set the right direction, but habits are built — and
            broken — in the weeks between appointments.
          </p>
          <p>
            We set out to close that gap by pairing certified dieticians with a simple app
            that makes daily logging fast and keeps your dietician in the loop automatically,
            so your plan can adjust as your life does.
          </p>
          <p>
            Today, DocWellness connects people with dieticians for everything from general
            healthy eating to managing specific medical conditions — with the same principle
            behind every plan: guidance should be personal, and it should keep up with you.
          </p>
        </div>
      </section>

      <section className="border-y border-brand-border bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-2xl font-bold text-brand-text">What we believe</h2>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="rounded-2xl border border-brand-border p-6">
                <h3 className="text-lg font-semibold text-brand-text">{value.title}</h3>
                <p className="mt-2 text-sm text-brand-text-secondary">{value.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-brand-text">Want to work with a dietician?</h2>
        <p className="mx-auto mt-4 max-w-xl text-brand-text-secondary">
          Get matched with a certified dietician and build a plan around your life.
        </p>
        <div className="mt-8">
          <Link
            href="/#get-started"
            className="inline-block rounded-full bg-brand-primary px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-primary-dark"
          >
            Get started
          </Link>
        </div>
      </section>
    </>
  );
}
