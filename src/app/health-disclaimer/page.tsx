import type { Metadata } from "next";
import Link from "next/link";
import { Bullets, Callout, LegalPage, LegalSection } from "@/components/legal-page";
import { LEGAL_LAST_UPDATED } from "@/lib/site";

export const metadata: Metadata = {
  title: "Health Disclaimer",
  description:
    "Docwellness provides dietician-led nutrition guidance. It is not medical advice, diagnosis or treatment.",
};

export default function HealthDisclaimerPage() {
  return (
    <LegalPage
      title="Health disclaimer"
      updated={LEGAL_LAST_UPDATED}
      intro={
        <Callout>
          Docwellness provides nutrition and lifestyle guidance from dieticians. It is{" "}
          <strong>not</strong> a medical device and does not diagnose, treat, cure or prevent any
          disease.
        </Callout>
      }
    >
      <LegalSection id="scope" title="What the app is — and is not">
        <Bullets
          items={[
            "Diet plans, calorie and nutrient targets and recipes are general nutrition guidance prepared and reviewed by a dietician for your goals and preferences.",
            "The app does not diagnose conditions, monitor medical conditions, connect to medical devices, or replace your doctor.",
            "Health concerns you tell us about (for example diabetes or thyroid conditions) help your dietician tailor food choices; they are not a clinical assessment.",
          ]}
        />
      </LegalSection>

      <LegalSection id="doctor" title="Talk to your doctor first">
        <p>
          Check with your doctor before changing your diet if you are pregnant or breastfeeding,
          have a medical condition, take medication, have a history of an eating disorder, or are
          under 18. Never stop or change prescribed treatment because of anything in the app.
        </p>
      </LegalSection>

      <LegalSection id="allergies" title="Allergies and intolerances">
        <p>
          Always tell your dietician about allergies and intolerances, and check ingredients and
          labels yourself. If a food in your plan does not suit you, do not eat it and let your
          dietician know.
        </p>
      </LegalSection>

      <LegalSection id="ai" title="AI-assisted drafting">
        <p>
          Dieticians may use AI tools to draft plans and recipes. A dietician reviews and approves
          every plan before it reaches you. See our{" "}
          <Link href="/privacy#ai" className="text-brand-primary underline">
            Privacy Policy
          </Link>{" "}
          for how data is handled.
        </p>
      </LegalSection>

      <LegalSection id="emergency" title="Emergencies">
        <p>
          If you feel unwell or think you are having a medical emergency, stop and seek medical
          help immediately — call 112 (EU) or your local emergency number.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
