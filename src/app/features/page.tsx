import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/reveal";
import ScreenComposition from "@/components/screen-composition";
import FeatureNav from "@/components/feature-nav";
import { logMeal, dietPlan, progress, groceryList, videosWisdom, messagingCheckins } from "@/lib/screens";

export const metadata: Metadata = {
  title: "Features",
  description:
    "See how Docwellness combines a personalised, dietician-built diet plan with easy meal logging, progress tracking, and daily support.",
};

const featureGroups = [
  {
    id: "diet-plan",
    title: "A diet plan made for you",
    body: "Your dietician creates a personalised day-by-day plan, from morning drink to dinner — every meal shows calories, protein, carbs, fat, and fibre. Assigned exercises come with clear step-by-step instructions, right alongside your meals.",
    points: [
      "Plans adapt as you progress, so guidance keeps up with your body",
      "Recipes for your plan's meals, in English, Hindi, and Marathi",
      "Travelling or unwell? Pause your plan and resume without losing days",
    ],
    screen: dietPlan,
  },
  {
    id: "meal-logging",
    title: "Easy meal logging",
    body: "Log each meal in a tap, or quick-log what you actually ate. See today's intake, exercise, and remaining calories at a glance, with net carbs, protein, fat, and fibre tracked against your daily targets.",
    points: [
      "One tap to log a planned meal as eaten",
      "Today's intake and remaining calories at a glance",
      "Your dietician sees your logs and can guide you in real time",
    ],
    screen: logMeal,
  },
  {
    id: "messaging",
    title: "Talk to your dietician",
    body: "Chat directly with your assigned dietician inside the app — ask questions, share how a meal went, or flag something that isn't working, without waiting for a scheduled visit.",
    points: [
      "Direct in-app chat with your assigned dietician",
      "Notified when your plan is ready or your dietician replies",
      "Report allergies or food restrictions so your plan stays safe",
    ],
    screen: messagingCheckins,
  },
  {
    id: "progress",
    title: "Progress you can see",
    body: "Goal Journey shows your starting point, target weight, and daily streak. Log your weight, BMI, and body measurements, and watch weight-trend charts show how far you've come.",
    points: [
      "Goal Journey: starting point, target weight, daily streak",
      "Log weight, BMI, and measurements (arm, waist, hip)",
      "Share your progress with friends and family",
    ],
    screen: progress,
  },
  {
    id: "videos-wisdom",
    title: "Videos and daily wisdom",
    body: "Short wellness videos curated for you sit right on your home screen, alongside a fresh nutrition and motivation quote every day — in English, Hindi, and Marathi.",
    points: [
      "Curated wellness videos on your home screen",
      "A new nutrition and motivation quote daily",
      "Available in English, Hindi, and Marathi",
    ],
    screen: videosWisdom,
  },
  {
    id: "grocery-list",
    title: "Smart grocery list",
    body: "Every diet plan comes with a grocery list built straight from it, organized by category and already checked off for what you've got — so shopping for the week takes minutes, not guesswork.",
    points: [
      "Auto-generated from your active diet plan",
      "Organized by category, filterable by week",
      "Mark items already purchased as you shop",
    ],
    screen: groceryList,
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
            Every Docwellness feature exists to make working with a dietician easier —
            from your first intake to the plan you follow months from now.
          </p>
          <p className="mx-auto mt-5 flex max-w-2xl items-center justify-center gap-2 text-xs font-medium text-brand-primary">
            <svg viewBox="0 0 20 20" fill="none" className="h-3.5 w-3.5 shrink-0" aria-hidden>
              <circle cx="8.5" cy="8.5" r="5.5" stroke="currentColor" strokeWidth="1.6" />
              <path d="M13 13L17.5 17.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
            Every screen below is real — tap or click any phone to view it full size
          </p>
        </div>
      </section>

      <FeatureNav items={featureGroups.map(({ id, title }) => ({ id, title }))} />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="space-y-24">
          {featureGroups.map((group, i) => (
            <div
              key={group.title}
              id={group.id}
              className={`grid scroll-mt-32 items-center gap-10 md:grid-cols-2 ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <Reveal>
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
              </Reveal>
              <Reveal delay={100} className="relative mx-auto w-full max-w-[16rem] sm:max-w-[18rem]">
                <div
                  aria-hidden
                  className="absolute -inset-8 -z-10 rounded-[3rem] bg-gradient-to-br from-brand-primary-light via-brand-primary-light to-white blur-2xl"
                />
                <ScreenComposition {...group.screen} interactive />
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 text-center">
        <h2 className="text-3xl font-bold text-brand-text">See it for yourself</h2>
        <p className="mx-auto mt-4 max-w-xl text-brand-text-secondary">
          Start your intake with your dietician and log your first meal today.
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
