export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readingTime: string;
  content: string[];
};

export const posts: BlogPost[] = [
  {
    slug: "why-portion-size-matters-more-than-you-think",
    title: "Why portion size matters more than you think",
    excerpt:
      "Two people can eat the 'same' meal and get very different results. Here's how portion awareness changes outcomes.",
    date: "2026-06-02",
    category: "Nutrition basics",
    readingTime: "4 min read",
    content: [
      "Most people underestimate portion sizes, not because they lack willpower, but because plates, bowls, and serving spoons have quietly grown larger over the last few decades.",
      "When you log a meal in DocWellness, we default to a realistic single serving rather than a restaurant-sized portion, and let you adjust from there. That small nudge is often enough to close the gap between what someone thinks they're eating and what they're actually eating.",
      "Your dietician uses this data to fine-tune your plan — not by telling you to 'eat less', but by helping you recognize where portions have crept up without you noticing.",
    ],
  },
  {
    slug: "how-to-actually-stick-to-a-meal-plan",
    title: "How to actually stick to a meal plan",
    excerpt:
      "Meal plans fail when they don't fit real life. Here's what we've learned from thousands of DocWellness members.",
    date: "2026-05-18",
    category: "Habits",
    readingTime: "5 min read",
    content: [
      "The plans that stick are the ones built around foods you already eat, not a list of unfamiliar recipes you'll abandon after a week.",
      "That's why every DocWellness plan starts with your current eating patterns. Your dietician works with what's already on your plate and adjusts gradually — swapping one ingredient, tweaking one portion — instead of asking for a complete overhaul on day one.",
      "Small, sustained adjustments compound. Members who make one small change per week tend to stay consistent far longer than those who try to change everything at once.",
    ],
  },
  {
    slug: "reading-a-food-label-in-30-seconds",
    title: "Reading a food label in 30 seconds",
    excerpt:
      "You don't need to analyze every number on a nutrition label. Here's the quick version dieticians actually use.",
    date: "2026-04-27",
    category: "Nutrition basics",
    readingTime: "3 min read",
    content: [
      "Start with the serving size at the top — every other number on the label is relative to it, and it's the part people skip most often.",
      "From there, glance at calories, protein, and added sugar. For most goals, those three numbers tell you most of what you need to know before deciding whether something fits your day.",
      "When you scan a barcode in DocWellness, we surface exactly these numbers first, with the rest available if you want to dig deeper.",
    ],
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug);
}
