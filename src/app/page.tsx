import Link from "next/link";

const stats = [
  { value: "12k+", label: "meals logged weekly" },
  { value: "200+", label: "certified dieticians" },
  { value: "4.8/5", label: "average member rating" },
];

const highlights = [
  {
    title: "Talk to a real dietician",
    body: "Get matched with a certified dietician who reviews your goals, medical history, and food preferences before building your plan.",
  },
  {
    title: "Log meals in seconds",
    body: "Search a food, pick a portion, done. DocWellness keeps logging fast so you actually stick with it.",
  },
  {
    title: "Plans that adapt",
    body: "Your dietician adjusts your plan as your weight, activity, and lab results change — not a static PDF you get once and forget.",
  },
  {
    title: "See your progress",
    body: "Weight, macros, and adherence trends in one dashboard, shared automatically with your dietician between visits.",
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
    title: "Get matched",
    body: "We pair you with a certified dietician suited to your goals and dietary needs.",
  },
  {
    step: "03",
    title: "Follow your plan",
    body: "Log meals, message your dietician, and get a plan that evolves with you.",
  },
];

export default function Home() {
  return (
    <>
      <section className="bg-brand-primary-light">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <div>
            <span className="inline-block rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-brand-primary shadow-sm">
              Nutrition coaching, backed by real dieticians
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight text-brand-text md:text-5xl">
              Eat better, feel better — with a dietician in your corner
            </h1>
            <p className="mt-6 text-lg text-brand-text-secondary">
              DocWellness pairs you with a certified dietician and gives you the tools to
              log meals, track progress, and stay on plan — without the guesswork.
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
                Learn our story
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-brand-border bg-white p-6 shadow-xl shadow-brand-primary-light">
            <div className="flex items-center justify-between border-b border-brand-border pb-4">
              <p className="text-sm font-semibold text-brand-text">Today&apos;s log</p>
              <span className="rounded-full bg-brand-primary-light px-3 py-1 text-xs font-semibold text-brand-primary">
                1,420 kcal
              </span>
            </div>
            <ul className="mt-4 space-y-3">
              {[
                { name: "Greek yogurt & berries", meta: "Breakfast · 320 kcal" },
                { name: "Grilled chicken bowl", meta: "Lunch · 540 kcal" },
                { name: "Almonds", meta: "Snack · 160 kcal" },
              ].map((item) => (
                <li
                  key={item.name}
                  className="flex items-center justify-between rounded-xl bg-brand-primary-light/60 px-4 py-3"
                >
                  <div>
                    <p className="text-sm font-medium text-brand-text">{item.name}</p>
                    <p className="text-xs text-brand-text-muted">{item.meta}</p>
                  </div>
                  <span className="text-brand-success">✓</span>
                </li>
              ))}
            </ul>
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

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-brand-text">
            Everything you need to build lasting habits
          </h2>
          <p className="mt-4 text-brand-text-secondary">
            DocWellness combines expert guidance with a simple daily app so healthy eating
            actually fits into your life.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-brand-border p-6 transition-shadow hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold text-brand-text">{item.title}</h3>
              <p className="mt-2 text-sm text-brand-text-secondary">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-primary-light">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold text-brand-text">How DocWellness works</h2>
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

      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-brand-text">
          Ready to build a plan that fits your life?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-brand-text-secondary">
          Get matched with a certified dietician and start logging your first meal today.
        </p>
        <div className="mt-8">
          <Link
            href="/features"
            className="inline-block rounded-full bg-brand-primary px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-primary-dark"
          >
            See how it works
          </Link>
        </div>
      </section>
    </>
  );
}
