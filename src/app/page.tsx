import Link from "next/link";
import Reveal from "@/components/reveal";
import ScreenComposition from "@/components/screen-composition";
import { homeDashboard, logMeal, dietPlan, progress, recipeLibrary, consistency } from "@/lib/screens";

const stats = [
  { value: "500+", label: "members guided" },
  { value: "200+", label: "recipes in the library" },
  { value: "4.9/5", label: "average member rating" },
];

const highlights = [
  {
    title: "Work with your dietician directly",
    body: "One dietician, one relationship. Your plan is built and adjusted by someone who already knows your goals, history, and preferences — not a rotating team.",
  },
  {
    title: "Log meals in seconds",
    body: "Log each meal in a tap, or quick-log what you actually ate. See today's intake, exercise, and remaining calories at a glance.",
  },
  {
    title: "Plans that adapt",
    body: "Your plan adjusts as your weight, activity, and progress change — not a static PDF you get once and forget.",
  },
  {
    title: "See your progress",
    body: "Goal Journey, weight and BMI trends, and body measurements — visible to you and your dietician between visits.",
  },
  {
    title: "Recipes in your language",
    body: "Every meal in your plan comes with a recipe, available in English, Hindi, and Marathi.",
  },
  {
    title: "Flexible when life happens",
    body: "Travelling or unwell? Your dietician can pause your plan for a few days and resume it without losing your remaining days.",
  },
];

const steps = [
  {
    step: "01",
    title: "Tell us about you",
    body: "Share your goals, health history, and food preferences in a short intake.",
  },
  {
    step: "02",
    title: "Start with your dietician",
    body: "Your dietician reviews your intake and builds a plan around your goals and dietary needs.",
  },
  {
    step: "03",
    title: "Follow your plan",
    body: "Log meals, message your dietician, and get a plan that evolves with you.",
  },
];

const recipes = [
  { name: "Greek yogurt & berry bowl", meta: "Breakfast · 320 kcal · 22g protein", tag: "High protein" },
  { name: "Grilled chicken & quinoa bowl", meta: "Lunch · 540 kcal · 41g protein", tag: "Balanced" },
  { name: "Lentil & vegetable stew", meta: "Dinner · 460 kcal · 24g protein", tag: "Plant-forward" },
  { name: "Almond & date energy bites", meta: "Snack · 160 kcal · 5g protein", tag: "Quick snack" },
];

const appScreens = [
  { ...logMeal, label: "Log a meal" },
  { ...dietPlan, label: "Your daily plan" },
  { ...progress, label: "Track progress" },
  { ...consistency, label: "Stay consistent" },
];

const faqs = [
  {
    q: "Do I work with the same dietician the whole time?",
    a: "Yes. You're paired with your dietician from your first intake, and they stay with you as your plan evolves.",
  },
  {
    q: "How do meal plans get adjusted?",
    a: "Your logged meals, weight, and progress feed into regular check-ins, so your dietician can adjust your plan based on what's actually happening — not guesswork.",
  },
  {
    q: "Can I message my dietician between check-ins?",
    a: "Yes, Docwellness includes direct messaging so you can ask questions or share updates without waiting for your next scheduled session.",
  },
  {
    q: "Is Docwellness only for weight loss?",
    a: "No. Plans are built around your goals, whether that's weight management, general healthy eating, sports nutrition, or a specific health condition.",
  },
  {
    q: "What if I'm travelling or can't follow my plan for a few days?",
    a: "Let your dietician know — they can pause your plan for a few days and resume it later without losing your remaining days.",
  },
  {
    q: "Are recipes available in my language?",
    a: "Yes. Recipes for your plan's meals are available in English, Hindi, and Marathi.",
  },
];

export default function Home() {
  return (
    <>
      <section className="bg-brand-primary-light">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <div>
            <span className="inline-block rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-brand-primary shadow-sm">
              Nutrition coaching from a dietician who knows your plan
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight text-brand-text md:text-5xl">
              Eat better, feel better — with your dietician in your corner
            </h1>
            <p className="mt-6 text-lg text-brand-text-secondary">
              Docwellness pairs you with a dedicated dietician and gives you the tools to log
              meals, track progress, and stay on plan — without the guesswork.
            </p>
            <div id="get-started" className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/features"
                className="rounded-full bg-brand-primary px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-primary-dark"
              >
                Explore features
              </Link>
              <Link
                href="/about"
                className="rounded-full border border-brand-border bg-white px-6 py-3 text-center text-sm font-semibold text-brand-text transition-colors hover:border-brand-primary hover:text-brand-primary"
              >
                Meet your dietician
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[21rem] sm:max-w-sm">
            <div
              aria-hidden
              className="absolute -inset-10 -z-10 rounded-[3rem] bg-gradient-to-br from-brand-primary-light via-brand-primary-light to-white blur-2xl"
            />
            <ScreenComposition {...homeDashboard} interactive preload />
          </div>
        </div>
      </section>

      <section className="border-y border-brand-border bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-12 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-brand-primary">{stat.value}</p>
              <p className="mt-1 text-sm text-brand-text-secondary">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-primary-light">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold text-brand-text">How Docwellness works</h2>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {steps.map((item) => (
              <div key={item.step} className="rounded-2xl bg-white p-6 shadow-sm">
                <span className="text-sm font-bold text-brand-primary">{item.step}</span>
                <h3 className="mt-3 text-lg font-semibold text-brand-text">{item.title}</h3>
                <p className="mt-2 text-sm text-brand-text-secondary">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="max-w-2xl">
            <h2 className="text-3xl font-bold text-brand-text">See it in your pocket</h2>
            <p className="mt-4 text-brand-text-secondary">
              The same app your dietician sees on their end — real screens, not mockups.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 gap-5 sm:gap-6 lg:grid-cols-4">
            {appScreens.map((screen, i) => (
              <Reveal key={screen.label} delay={i * 70}>
                <ScreenComposition {...screen} />
                <p className="mt-3 text-center text-sm font-medium text-brand-text-secondary">
                  {screen.label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <Reveal>
            <h2 className="text-3xl font-bold text-brand-text">From the recipe library</h2>
            <p className="mt-4 text-brand-text-secondary">
              A sample of the flexible, realistic meals your dietician draws on when building
              your plan — no rigid templates, no restrictive diets, with recipes available in
              English, Hindi, and Marathi.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {recipes.map((recipe) => (
                <div
                  key={recipe.name}
                  className="overflow-hidden rounded-2xl border border-brand-border transition-shadow hover:shadow-lg"
                >
                  <div className="flex h-24 items-center justify-center bg-brand-primary-light text-sm font-semibold text-brand-primary/60">
                    {recipe.tag}
                  </div>
                  <div className="p-5">
                    <h3 className="text-sm font-semibold text-brand-text">{recipe.name}</h3>
                    <p className="mt-1 text-xs text-brand-text-muted">{recipe.meta}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120} className="mx-auto w-full max-w-[18rem] sm:max-w-[20rem]">
            <ScreenComposition {...recipeLibrary} />
          </Reveal>
        </div>
      </section>

      <section className="border-y border-brand-border bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-brand-text">
              Everything you need to build lasting habits
            </h2>
            <p className="mt-4 text-brand-text-secondary">
              Docwellness combines your dietician&apos;s guidance with a simple daily app so
              healthy eating actually fits into your life.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 60}
                className="rounded-2xl border border-brand-border p-6 transition-shadow hover:shadow-lg"
              >
                <h3 className="text-lg font-semibold text-brand-text">{item.title}</h3>
                <p className="mt-2 text-sm text-brand-text-secondary">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="text-3xl font-bold text-brand-text">Frequently asked questions</h2>
        <div className="mt-10 space-y-6">
          {faqs.map((faq) => (
            <div key={faq.q} className="border-b border-brand-border pb-6">
              <h3 className="text-base font-semibold text-brand-text">{faq.q}</h3>
              <p className="mt-2 text-sm text-brand-text-secondary">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-primary-light">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h2 className="text-3xl font-bold text-brand-text">
            Ready to build a plan that fits your life?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-brand-text-secondary">
            Start with a short intake and get your first plan from your dietician.
          </p>
          <div className="mt-8">
            <Link
              href="/features"
              className="inline-block rounded-full bg-brand-primary px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-primary-dark"
            >
              See how it works
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
