import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/reveal";

export const metadata: Metadata = {
  title: "Recipes",
  description:
    "Four recipes from our dietician-built catalog, chosen and ranked on real per-serving nutrition data — not estimates.",
};

const recipes = [
  {
    slug: "chicken-biryani",
    image: "/recipes/chicken-biryani.jpg",
    tag: "High Protein",
    name: "Chicken Biryani",
    body: "A complete-protein source paired with a moderate carbohydrate load, supporting muscle protein synthesis and glycogen replenishment. Protein density (5.6g per 100 kcal) exceeds typical mixed-meal averages without relying on excess fat.",
    stats: [
      { value: "620", label: "kcal" },
      { value: "35g", label: "Protein" },
      { value: "85g", label: "Carbs" },
      { value: "15g", label: "Fat" },
      { value: "5g", label: "Fiber" },
    ],
  },
  {
    slug: "egg-curry",
    image: "/recipes/egg-curry.jpg",
    tag: "Balanced",
    name: "Egg Curry",
    body: "Macronutrient distribution sits close to an even 3-way split, avoiding the carbohydrate skew common to most single-dish “balanced” claims. Eggs contribute a complete amino acid profile; moderate fat slows gastric emptying for a steadier glucose response.",
    stats: [
      { value: "314", label: "kcal" },
      { value: "13g", label: "Protein" },
      { value: "34g", label: "Carbs" },
      { value: "14g", label: "Fat" },
      { value: "5g", label: "Fiber" },
    ],
  },
  {
    slug: "mediterranean-chickpea-bowl",
    image: "/recipes/mediterranean-chickpea-bowl.jpg",
    tag: "Plant-Forward",
    name: "Mediterranean Chickpea Bowl",
    body: "Chickpeas and couscous form a protein-complementary pairing, improving amino acid completeness beyond either alone. At 12g, fiber approaches half the standard daily reference intake, slowing carbohydrate absorption and supporting satiety without animal protein.",
    stats: [
      { value: "550", label: "kcal" },
      { value: "18g", label: "Protein" },
      { value: "75g", label: "Carbs" },
      { value: "20g", label: "Fat" },
      { value: "12g", label: "Fiber" },
    ],
  },
  {
    slug: "date-seed-energy-balls",
    image: "/recipes/date-seed-energy-balls.jpg",
    tag: "Quick Snack",
    name: "Date & Seed Energy Balls",
    body: "Dates supply rapidly available simple sugars; seeds contribute fat, protein and fiber that blunt the rate of glucose absorption. Positioned for pre- or post-activity fueling, or as a structured alternative to lower-nutrient snacking.",
    stats: [
      { value: "260", label: "kcal" },
      { value: "6g", label: "Protein" },
      { value: "35g", label: "Carbs" },
      { value: "14g", label: "Fat" },
      { value: "5g", label: "Fiber" },
    ],
  },
];

export default function RecipesPage() {
  return (
    <>
      <section className="bg-brand-primary-light">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <div className="text-xs font-semibold uppercase tracking-widest text-brand-primary">
            Nutrition-Led Recipes
          </div>
          <h1 className="mt-4 text-4xl font-bold text-brand-text md:text-5xl">
            Four recipes, chosen by their macros
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-brand-text-secondary">
            Selected from our dietician-built catalog and ranked on real per-serving
            nutrition data, not estimates — one for each way a meal earns its place in a
            plan.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-2">
          {recipes.map((recipe, i) => (
            <Reveal
              key={recipe.slug}
              delay={(i % 2) * 100}
              className="overflow-hidden rounded-2xl border border-brand-border transition-shadow hover:shadow-lg"
            >
              <div className="relative h-52 w-full">
                <Image
                  src={recipe.image}
                  alt={recipe.name}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-4 p-7">
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-brand-primary">
                    {recipe.tag}
                  </div>
                  <h2 className="mt-2 text-2xl font-bold text-brand-text">{recipe.name}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-brand-text-secondary">
                    {recipe.body}
                  </p>
                </div>
                <div className="flex items-stretch border-t border-brand-border pt-4">
                  {recipe.stats.map((stat, si) => (
                    <div key={stat.label} className="flex flex-1 items-center">
                      <div className="flex flex-1 flex-col items-center gap-0.5">
                        <span className="text-lg font-bold text-brand-primary-dark">
                          {stat.value}
                        </span>
                        <span className="text-[10px] font-semibold uppercase tracking-wide text-brand-text-muted">
                          {stat.label}
                        </span>
                      </div>
                      {si < recipe.stats.length - 1 && (
                        <div className="h-full w-px bg-brand-border" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 text-center">
        <h2 className="text-3xl font-bold text-brand-text">
          Every plan comes with recipes like these
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-brand-text-secondary">
          Your dietician builds a full plan around your goals — start your intake and see
          what yours looks like.
        </p>
        <div className="mt-8">
          <Link
            href="/open"
            className="inline-block rounded-full bg-brand-primary px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-primary-dark"
          >
            Get started
          </Link>
        </div>
      </section>
    </>
  );
}
