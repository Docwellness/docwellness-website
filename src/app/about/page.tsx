import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the dietician behind DocWellness and the philosophy behind personalized, ongoing nutrition guidance.",
};

const values = [
  {
    title: "One relationship, not a queue",
    body: "You work with the same dietician from your first intake onward. No hand-offs, no re-explaining your history to someone new.",
  },
  {
    title: "Small changes, sustained",
    body: "Plans optimize for what you actually keep doing six months later, not what looks impressive in week one.",
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
            DocWellness was built around one idea: ongoing access to a dietician who actually
            knows your plan, plus the tools to make following it simple enough to keep doing.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="flex aspect-square items-center justify-center rounded-3xl border border-brand-border bg-brand-primary-light text-sm font-semibold text-brand-primary/60">
            Dietician photo
          </div>
          <div>
            <h2 className="text-2xl font-bold text-brand-text">Meet your dietician</h2>
            <div className="mt-6 space-y-5 text-brand-text-secondary">
              <p>
                DocWellness is built around a single dietician-led practice, not a marketplace
                of rotating providers. Every plan is reviewed and adjusted personally, so the
                guidance you get stays consistent from your first intake to your hundredth
                check-in.
              </p>
              <p>
                The approach favors small, sustainable adjustments over rigid rules — working
                with the foods you already eat and the life you already have, rather than
                asking you to start over.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-20">
        <h2 className="text-2xl font-bold text-brand-text">Our story</h2>
        <div className="mt-6 space-y-5 text-brand-text-secondary">
          <p>
            DocWellness started from a simple observation: most nutrition advice is either too
            generic to be useful, or too expensive and infrequent to keep up with real life.
            A one-off consultation can set the right direction, but habits are built — and
            broken — in the weeks between appointments.
          </p>
          <p>
            DocWellness closes that gap by pairing one-on-one dietician guidance with a simple
            app that makes daily logging fast and keeps your dietician in the loop
            automatically, so your plan can adjust as your life does.
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
        <h2 className="text-3xl font-bold text-brand-text">Ready to get started?</h2>
        <p className="mx-auto mt-4 max-w-xl text-brand-text-secondary">
          Start your intake and build a plan around your life, with your dietician.
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
