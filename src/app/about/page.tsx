import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the dietician behind Docwellness and the philosophy behind personalized, ongoing nutrition guidance.",
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
            Docwellness was built around one idea: ongoing access to a dietician who actually
            knows your plan, plus the tools to make following it simple enough to keep doing.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <Reveal className="relative mx-auto w-full max-w-xs sm:max-w-sm">
            <div
              aria-hidden
              className="absolute -right-6 -top-6 -z-10 h-36 w-36 rounded-[45%_55%_60%_40%/50%_45%_55%_50%] bg-brand-primary-light sm:h-48 sm:w-48"
            />
            <div
              aria-hidden
              className="absolute -bottom-8 -left-8 -z-10 h-28 w-28 rounded-[60%_40%_45%_55%/45%_55%_40%_60%] bg-brand-primary/10 sm:h-36 sm:w-36"
            />
            <div className="aspect-[9/16] overflow-hidden rounded-[2.5rem] shadow-xl shadow-brand-primary-light">
              <Image
                src="/team/teju-dietician-2.webp"
                alt="Dr. Tejasvini, Docwellness dietician"
                width={700}
                height={1244}
                sizes="(max-width: 768px) 80vw, 420px"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white px-6 py-2.5 text-center shadow-lg">
              <p className="text-sm font-semibold whitespace-nowrap text-brand-text">Dr. Tejasvini</p>
              <p className="text-xs text-brand-text-muted">Lead Dietician, Docwellness</p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-2xl font-bold text-brand-text">Meet your dietician</h2>
            <div className="mt-6 space-y-5 text-brand-text-secondary">
              <p>
                Docwellness is built around a single dietician-led practice, not a marketplace
                of rotating providers. Dr. Tejasvini reviews and adjusts every plan personally,
                so the guidance you get stays consistent from your first intake to your
                hundredth check-in.
              </p>
              <p>
                The approach favors small, sustainable adjustments over rigid rules — working
                with the foods you already eat and the life you already have, rather than
                asking you to start over.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-20">
        <Reveal>
          <h2 className="text-2xl font-bold text-brand-text">Our story</h2>
          <div className="mt-6 space-y-5 text-brand-text-secondary">
            <p>
              Docwellness started from a simple observation: most nutrition advice is either too
              generic to be useful, or too expensive and infrequent to keep up with real life.
              A one-off consultation can set the right direction, but habits are built — and
              broken — in the weeks between appointments.
            </p>
            <p>
              Docwellness closes that gap by pairing one-on-one dietician guidance with a simple
              app that makes daily logging fast and keeps your dietician in the loop
              automatically, so your plan can adjust as your life does.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="border-y border-brand-border bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-2xl font-bold text-brand-text">What we believe</h2>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {values.map((value, i) => (
              <Reveal
                key={value.title}
                delay={i * 70}
                className="rounded-2xl border border-brand-border p-6"
              >
                <h3 className="text-lg font-semibold text-brand-text">{value.title}</h3>
                <p className="mt-2 text-sm text-brand-text-secondary">{value.body}</p>
              </Reveal>
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
