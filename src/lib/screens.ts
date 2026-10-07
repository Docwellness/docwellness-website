// Home screen has three real scroll positions in the source captures:
//  - "home-goal" — top, showing the Goal Journey card
//  - "home-scrolled" — middle, the "Your progress" panel + Log Meal/Log Exercise
//  - "home-top" — bottom, videos, daily wisdom, and the "About me" dietician card
// (Names below were assigned before all three were compared side by side —
// kept as-is so file paths don't churn; see the alt text for what's actually shown.)

export const homeDashboard = {
  primary: { src: "/screens/raw/home-scrolled.webp", alt: "Docwellness home screen showing today's progress, calories, and water intake" },
  primaryPlacement: { top: "9%", left: "38%", width: "60%", rotate: 5 },
  secondary: { src: "/screens/raw/home-top.webp", alt: "Docwellness home screen scrolled to show videos, daily wisdom, and the dietician card" },
  secondaryPlacement: { top: "3%", left: "0%", width: "55%", rotate: -6 },
  card: {
    src: "/screens/cards/goal-journey.webp",
    alt: "Goal journey card showing current weight and streak",
    width: 1020,
    height: 618,
    placement: { top: "0%", left: "20%", width: "62%", rotate: -3 },
  },
  aspect: "1 / 1.42",
};

export const logMeal = {
  primary: { src: "/screens/raw/log-meal-goal.webp", alt: "Today's goal journey with meal logging, water, and exercise tasks" },
  primaryPlacement: { top: "3%", left: "21%", width: "58%", rotate: 0 },
  aspect: "1 / 1.32",
};

export const dietPlan = {
  primary: { src: "/screens/raw/diet-plan-v2.webp", alt: "A day's diet plan with logged meals in the Docwellness app" },
  primaryPlacement: { top: "9%", left: "38%", width: "60%", rotate: 6 },
  secondary: { src: "/screens/raw/exercises-v2.webp", alt: "Assigned exercises for the day in the Docwellness app" },
  secondaryPlacement: { top: "3%", left: "0%", width: "55%", rotate: -8 },
  aspect: "1 / 1.42",
};

export const progress = {
  primary: { src: "/screens/raw/progress-bmi.webp", alt: "BMI and weight trend charts in the Docwellness app" },
  primaryPlacement: { top: "3%", left: "21%", width: "58%", rotate: 0 },
  aspect: "1 / 1.32",
};

export const groceryList = {
  primary: { src: "/screens/raw/grocery-list.webp", alt: "A grocery list generated automatically from a Docwellness diet plan" },
  primaryPlacement: { top: "3%", left: "21%", width: "58%", rotate: 0 },
  card: {
    src: "/screens/cards/grocery-item.webp",
    alt: "A grocery list item for pomegranate marked as already purchased",
    width: 520,
    height: 138,
    placement: { top: "56%", left: "7%", width: "86%", rotate: -3 },
  },
  aspect: "1 / 1.4",
};

export const recipeLibrary = {
  primary: { src: "/screens/raw/recipe-library-v2.webp", alt: "A day's planned meals drawn from the Docwellness recipe library" },
  primaryPlacement: { top: "3%", left: "21%", width: "58%", rotate: 0 },
  aspect: "1 / 1.32",
};

export const consistency = {
  primary: { src: "/screens/raw/home-goal.webp", alt: "Goal Journey streak tracker showing 5 days completed in a row" },
  primaryPlacement: { top: "3%", left: "21%", width: "58%", rotate: 0 },
  aspect: "1 / 1.32",
};

export const videosWisdom = {
  primary: { src: "/screens/raw/home-top.webp", alt: "Curated wellness videos and a daily nutrition and motivation quote on the Docwellness home screen" },
  primaryPlacement: { top: "3%", left: "21%", width: "58%", rotate: 0 },
  aspect: "1 / 1.32",
};

export const messagingCheckins = {
  primary: { src: "/screens/raw/chat.webp", alt: "A conversation between a patient and Dr. Tejasvini about updating a diet plan" },
  primaryPlacement: { top: "9%", left: "38%", width: "60%", rotate: 5 },
  secondary: { src: "/screens/raw/home-goal.webp", alt: "The home screen with quick access to messaging your dietician" },
  secondaryPlacement: { top: "3%", left: "0%", width: "55%", rotate: -7 },
  aspect: "1 / 1.42",
};
