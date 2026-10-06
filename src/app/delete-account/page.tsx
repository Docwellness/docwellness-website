import type { Metadata } from "next";
import Link from "next/link";
import { Bullets, Callout, LegalPage, LegalSection } from "@/components/legal-page";
import { CONTACT_EMAIL, LEGAL_LAST_UPDATED } from "@/lib/site";

export const metadata: Metadata = {
  title: "Delete Your Account",
  description:
    "How to delete your Docwellness account and the personal and health data associated with it, in the app or by email request.",
};

export default function DeleteAccountPage() {
  return (
    <LegalPage
      title="Delete your account and data"
      updated={LEGAL_LAST_UPDATED}
      intro={
        <p>
          This page explains how to delete your Docwellness account (app package{" "}
          <code className="rounded bg-brand-primary-light px-1.5 py-0.5 text-sm">
            fit.docwellness.app
          </code>
          ) and the data tied to it. You do not need to contact us to do this.
        </p>
      }
    >
      <LegalSection id="in-app" title="Option 1 — Delete in the app (fastest)">
        <ol className="list-decimal space-y-2 pl-6">
          <li>Open the Docwellness app and sign in.</li>
          <li>
            Go to your <strong>Profile</strong> and open <strong>Account</strong>.
          </li>
          <li>
            Tap <strong>Delete Account</strong>.
          </li>
          <li>
            Enter your password to confirm, then tap <strong>Delete</strong>.
          </li>
        </ol>
        <Callout>
          Deleting your account is permanent and cannot be undone. Your sign-in is removed
          straight away.
        </Callout>
      </LegalSection>

      <LegalSection id="by-email" title="Option 2 — Request deletion by email">
        <p>
          If you can no longer open the app, or forgot your password, email{" "}
          <a className="text-brand-primary underline" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>{" "}
          from the address registered to your account with the subject &quot;Delete my
          account&quot;. We may ask you to confirm it is you. We will complete the deletion within
          30 days and confirm by email.
        </p>
      </LegalSection>

      <LegalSection id="what" title="What gets deleted">
        <Bullets
          items={[
            "Your account and sign-in (email and password).",
            "Your profile: name, gender, date of birth, phone number, profile photo.",
            "Your health and body data: weight, height, BMI, goals, health concerns, measurements and progress/before-after photos.",
            "Your first-consultation answers and uploaded lab reports.",
            "Your diet plans, meal, water and exercise logs, check-ins and notifications.",
            "Your chat messages with your dietician and your reviews.",
            "Your payment proofs and subscription records, subject to the exception below.",
          ]}
        />
      </LegalSection>

      <LegalSection id="kept" title="What we may keep, and for how long">
        <Bullets
          items={[
            "Records we are legally required to keep (for example payment and invoicing records) are retained only for the legally required period, then deleted.",
            "Crash reports and analytics events held by our monitoring providers expire under their own retention settings.",
          ]}
        />
      </LegalSection>

      <LegalSection id="partial" title="Want to remove only some data?">
        <p>
          You can ask us to delete specific data (for example your body photos or chat history)
          without closing your account. Email{" "}
          <a className="text-brand-primary underline" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>{" "}
          and tell us what to remove.
        </p>
      </LegalSection>

      <p>
        Read more in our{" "}
        <Link href="/privacy" className="text-brand-primary underline">
          Privacy Policy
        </Link>
        .
      </p>
    </LegalPage>
  );
}
