import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Features",
  description:
    "See how DocWellness pairs certified dieticians with simple meal logging, adaptive plans, and progress tracking.",
};

const featureGroups = [
  {
    title: "Dietician matching",
    body: "A short intake captures your goals, medical history, allergies, and food preferences. We match you with a certified dietician who specializes in your situation, whether that's weight management, a medical condition, or sports nutrition.",
    points: [
      "Verified, licensed dieticians only",
      "Matched by specialty and language",
      "Switch dieticians anytime",
    ],
  },
  {
    title: "Meal logging",
    body: "Search a large food database, scan a barcode, or save your regular meals as favorites. Portion sizes default to sensible servings so logging takes seconds, not minutes.",
    points: [
      "Barcode scanning and food search",
      "Favorites and repeat-meal shortcuts",
      "Macro and calorie breakdown per entry",
    ],
  },
  {
    title: "Adaptive meal plans",
    body: "Your dietician builds a plan around your preferences and adjusts it as your weight, activity, and lab results change — reviewed together on a regular cadence, not handed to you once and forgotten.",
    points: [
      "Personalized macro and calorie targets",
      "Plan revisions as your progress updates",
      "Built around foods you actually eat",
    ],
  },
  {
    title: "Progress tracking",
    body: "Weight, adherence, and macro trends are visualized in one dashboard that you and your dietician both see, so check-ins start from real data instead of guesswork.",
    points: [
      "Weight and measurement trends",
      "Adherence and streak tracking",
      "Shared dashboard for you and your dietician",
    ],
  },
  {
    title: "Messaging & check-ins",
    body: "Message your dietician directly between scheduled visits with questions, photos of meals, or quick wins — no waiting for the next appointment to get feedback.",
    points: [
      "In-app secure messaging",
      "Scheduled video check-ins",
      "Reminders to keep you on track",
    ],
  },
];

export default function FeaturesPage() {
  return (
    <>
      <section className="bg-brand-primary-light">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h1 className="text-4xl font-bold text-brand-text md:text-5xl">
            Built for real, lasting nutrition habits
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-brand-text-secondary">
            Every DocWellness feature exists to make working with a dietician easier —
            from your first intake to the plan you follow months from now.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="space-y-16">
          {featureGroups.map((group, i) => (
            <div
              key={group.title}
              className={`grid items-center gap-10 md:grid-cols-2 ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>
                <h2 className="text-2xl font-bold text-brand-text">{group.title}</h2>
                <p className="mt-4 text-brand-text-secondary">{group.body}</p>
                <ul className="mt-6 space-y-2">
                  {group.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-brand-text">
                      <span className="mt-0.5 text-brand-primary">✓</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex h-56 items-center justify-center rounded-3xl border border-brand-border bg-brand-primary-light text-sm font-semibold text-brand-primary/60 md:h-64">
                {group.title}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 text-center">
        <h2 className="text-3xl font-bold text-brand-text">See it for yourself</h2>
        <p className="mx-auto mt-4 max-w-xl text-brand-text-secondary">
          Get matched with a dietician and start your first meal log today.
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
