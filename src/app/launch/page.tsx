import type { Metadata } from "next";
import Image from "next/image";
import PhoneFrame from "@/components/phone-frame";

export const metadata: Metadata = {
  title: "Docwellness is live",
  description: "Launch poster for the Docwellness website video.",
  robots: { index: false },
};

// Fixed-ratio poster. Everything inside is sized in cqw (1cqw = 1% of poster width),
// so it scales as one piece and can be screenshotted at any width.
export default function LaunchPage() {
  // Full-screen layer so the site navbar/footer from the root layout stay out of the frame.
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center overflow-auto bg-[#1a0210] p-4">
      <div
        className="relative w-full max-w-[min(560px,calc((100vh-2rem)*0.72))] overflow-hidden text-white"
        style={{
          containerType: "inline-size",
          aspectRatio: "1080 / 1500",
          background: "linear-gradient(170deg, #530630 0%, #3a0422 45%, #1f0214 100%)",
        }}
      >
        {/* Curved highlight, top right */}
        <div
          aria-hidden
          className="absolute"
          style={{
            top: "-38cqw",
            right: "-42cqw",
            width: "110cqw",
            height: "110cqw",
            borderRadius: "50%",
            background: "radial-gradient(circle at 30% 70%, #851653 0%, #6a1042 55%, #530630 100%)",
            opacity: 0.85,
          }}
        />
        {/* Soft glow behind devices */}
        <div
          aria-hidden
          className="absolute left-1/2"
          style={{
            bottom: "-10cqw",
            width: "120cqw",
            height: "70cqw",
            transform: "translateX(-50%)",
            background: "radial-gradient(ellipse at center, rgba(133,22,83,0.55) 0%, rgba(133,22,83,0) 65%)",
          }}
        />

        <div className="absolute inset-x-0 top-0" style={{ padding: "6.5cqw 8cqw 0" }}>
          {/* Same icon + wordmark lockup as the site navbar, on white so it keeps its brand colours */}
          <div
            className="inline-flex items-center bg-white"
            style={{ gap: "2cqw", padding: "1.6cqw 3.4cqw 1.6cqw 1.8cqw", borderRadius: "999px" }}
          >
            <Image
              src="/docwellness-logo-icon.png"
              alt=""
              width={328}
              height={327}
              preload
              style={{ height: "8cqw", width: "auto" }}
            />
            <Image
              src="/docwellness-logo-wordmark.png"
              alt="Docwellness"
              width={490}
              height={111}
              preload
              style={{ height: "8cqw", width: "auto" }}
            />
          </div>

          <h1
            className="font-extrabold uppercase"
            style={{ marginTop: "4.5cqw", fontSize: "10.8cqw", lineHeight: 0.92, letterSpacing: "-0.04em" }}
          >
            <span className="block">Docwellness</span>
            <span
              className="block"
              style={{
                marginTop: "1.2cqw",
                fontSize: "9.4cqw",
                letterSpacing: "-0.03em",
                background: "linear-gradient(180deg, #fef6fb 0%, #e9a8cb 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Website<br />is live.
            </span>
          </h1>

          <p
            style={{
              marginTop: "4cqw",
              fontSize: "4.4cqw",
              lineHeight: 1.3,
              color: "#fef6fb",
              opacity: 0.92,
            }}
          >
            Your diet, exercise and health
            <br />
            coach, in one place.
          </p>

          <div
            className="inline-flex items-center font-medium uppercase"
            style={{
              marginTop: "4.5cqw",
              gap: "2.5cqw",
              padding: "2.6cqw 5cqw",
              fontSize: "2.5cqw",
              letterSpacing: "0.22em",
              border: "1px solid rgba(254,246,251,0.55)",
              borderRadius: "999px",
            }}
          >
            Coming soon on Google Play
            <svg viewBox="0 0 24 12" fill="none" style={{ width: "4cqw" }} aria-hidden>
              <path d="M1 6h21M17 1l5 5-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <p style={{ marginTop: "3.5cqw", fontSize: "3.8cqw", fontWeight: 600, letterSpacing: "0.04em", color: "#fef6fb" }}>
            www.docwellness.fit
          </p>
        </div>

        {/* Soft floor: fades into the background (no hard edge) with a contact shadow under the devices */}
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0"
          style={{
            height: "16cqw",
            background: "linear-gradient(180deg, rgba(20,2,13,0) 0%, rgba(20,2,13,0.85) 100%)",
          }}
        />
        <div
          aria-hidden
          className="absolute"
          style={{
            left: "4cqw",
            bottom: "7.5cqw",
            width: "74cqw",
            height: "3.5cqw",
            background: "radial-gradient(ellipse at center, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 70%)",
          }}
        />
        {/* Laptop with the website, phone with the app */}
        <div className="absolute" style={{ left: "8cqw", bottom: "9cqw", width: "54cqw", filter: "drop-shadow(0 2cqw 2cqw rgba(0,0,0,0.45))" }}>
          <div
            style={{
              padding: "1.2cqw 1.2cqw 1.4cqw",
              background: "linear-gradient(160deg, #2a2a2e 0%, #18181b 100%)",
              borderRadius: "1.8cqw 1.8cqw 0 0",
              boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08), 0 -2cqw 6cqw rgba(0,0,0,0.35)",
            }}
          >
            {/* Bottom of the capture is cropped (aspect 1440/840) to hide the dev-mode badge */}
            <div className="relative overflow-hidden bg-white" style={{ aspectRatio: "1440 / 840", borderRadius: "0.6cqw" }}>
              <Image
                src="/launch/website.png"
                alt="The Docwellness website"
                fill
                sizes="560px"
                className="object-cover object-top"
              />
            </div>
          </div>
          <div
            style={{
              height: "2.4cqw",
              margin: "0 -3cqw",
              background: "linear-gradient(180deg, #d9d6da 0%, #8e8a92 100%)",
              borderRadius: "0 0 2cqw 2cqw",
            }}
          />
        </div>
        <PhoneFrame
          src="/screens/raw/home-goal.webp"
          alt="Docwellness app home screen"
          width="15cqw"
          imgSizes="170px"
          preload
          className="absolute"
          style={{ left: "58cqw", bottom: "7cqw" }}
        />
      </div>
    </div>
  );
}
