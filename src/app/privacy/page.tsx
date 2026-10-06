import type { Metadata } from "next";
import Link from "next/link";
import {
  Bullets,
  Callout,
  DataTable,
  LegalPage,
  LegalSection,
} from "@/components/legal-page";
import { CONTACT_EMAIL, LEGAL_LAST_UPDATED } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Docwellness collects, uses, shares and protects your personal and health information, and how to exercise your rights.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated={LEGAL_LAST_UPDATED}
      intro={
        <>
          <p>
            This policy explains how Docwellness (&quot;we&quot;, &quot;us&quot;) handles
            personal data in the Docwellness mobile app and on docwellness.fit. We are the
            controller of the data described here. You can reach us at{" "}
            <a className="text-brand-primary underline" href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL}
            </a>
            .
          </p>
          <Callout>
            <p className="font-semibold">In short</p>
            <p className="mt-1">
              We collect the health and food information you give us so a dietician can build and
              adjust your plan. We do not show ads, we do not sell your data, and we do not use it
              for advertising. You can delete your account and data at any time —{" "}
              <Link href="/delete-account" className="text-brand-primary underline">
                here is how
              </Link>
              .
            </p>
          </Callout>
        </>
      }
    >
      <LegalSection id="collect" title="1. Data we collect">
        <p>
          We collect only what the service needs. Health information is special-category data; we
          process it only with your consent, which you give when you create your profile and start
          a consultation, and which you can withdraw by deleting your account.
        </p>
        <DataTable
          head={["Category", "What", "Why"]}
          rows={[
            [
              "Account",
              "Email address, password (held by our authentication provider, never readable by us), account role and verification status.",
              "Creating and securing your account, sign-in, password reset.",
            ],
            [
              "Profile",
              "Full name, gender, date of birth, WhatsApp/phone number (if you provide it), profile photo (optional).",
              "Personalising your plan and letting your dietician identify and contact you.",
            ],
            [
              "Health & body data",
              "Weight, height, BMI, target weight, primary goal, activity level, health concerns you select (e.g. diabetes, thyroid, PCOD/PCOS), body measurements, optional body and before/after photos.",
              "Building your diet plan and tracking your progress.",
            ],
            [
              "Consultation",
              "Answers to the first-consultation form (including dietary habits, allergies and foods to avoid) and any lab reports you upload.",
              "Allowing your dietician to create a plan that is safe for you.",
            ],
            [
              "Diet & activity logs",
              "Meal logs (including what you actually ate), water intake, exercise logs, check-ins and goals.",
              "Showing daily progress to you and your dietician.",
            ],
            [
              "Messages",
              "Chat messages and attachments exchanged with your dietician; reviews you write.",
              "Delivering guidance and support.",
            ],
            [
              "Payments",
              "Subscription status and any payment proof (e.g. a screenshot) you upload. We do not collect card numbers in the app.",
              "Activating and managing your plan.",
            ],
            [
              "Device & usage",
              "Push-notification token, device platform, a security signal (whether the device is rooted/jailbroken), crash reports, IP address, and in-app usage events such as screens viewed and meals logged.",
              "Delivering notifications, keeping the service secure, fixing errors and improving the app.",
            ],
          ]}
        />
        <p>
          The app asks for access to your photos/camera only when you choose to attach a picture,
          and for notification permission so we can remind you about your plan. You can decline
          either; the rest of the app keeps working.
        </p>
      </LegalSection>

      <LegalSection id="use" title="2. How we use data">
        <Bullets
          items={[
            "To provide the service: create and adjust your diet plan, track meals, exercise and progress, and let you chat with your dietician.",
            "To manage your account and subscription.",
            "To send service notifications (plan ready, dietician replies, reminders). You can switch these off in your device settings.",
            "To keep the service secure, prevent abuse and fix errors.",
            "To understand how the app is used so we can improve it (product analytics, see section 4).",
          ]}
        />
        <p>We do not use your data for advertising, and we do not sell it.</p>
      </LegalSection>

      <LegalSection id="ai" title="3. AI-assisted features">
        <p>
          Dieticians use AI tooling to draft diet plans, recipes and translations. When a
          dietician generates a plan draft, the information needed for it — such as your name,
          gender, date of birth, height, weight, BMI, goal, and consultation answers such as
          dietary habits and allergies — is sent to our AI provider, OpenAI, for processing. Free
          text entered by dieticians is also screened through OpenAI&apos;s moderation service.
        </p>
        <Bullets
          items={[
            "AI output is a draft. A qualified dietician reviews and finalises every plan before you see it; the app does not give you automatically generated diet advice.",
            "We use OpenAI's API, under which, per OpenAI's published API terms, data sent through the API is not used to train its models by default.",
            "No AI model makes decisions about you that have legal or similarly significant effects.",
          ]}
        />
      </LegalSection>

      <LegalSection id="share" title="4. Who we share data with">
        <p>
          Your dietician sees the data you enter. We never sell data. We use the following service
          providers (processors) strictly to run Docwellness:
        </p>
        <DataTable
          head={["Provider", "Purpose", "Data involved"]}
          rows={[
            ["Supabase", "Sign-in and password management", "Email, credentials"],
            ["Cloud database & hosting", "Storing your account and plan data", "All data in section 1"],
            ["Cloudinary", "Storing and delivering images", "Profile, body, journey and recipe photos; uploaded files"],
            ["OpenAI", "Dietician-initiated AI drafts and moderation", "Data listed in section 3"],
            ["Google Firebase Cloud Messaging", "Delivering push notifications", "Push token, notification text"],
            ["Resend", "Sending account emails", "Email address, message content"],
            ["Sentry", "Crash and error reporting", "Technical diagnostics, IP address, user ID"],
            ["PostHog (EU region)", "Product analytics", "User ID and in-app usage events"],
          ]}
        />
        <p>
          We may also disclose data where the law requires it, or to protect the rights and safety
          of our users.
        </p>
      </LegalSection>

      <LegalSection id="transfers" title="5. International transfers">
        <p>
          Some providers above (for example OpenAI, Cloudinary, Sentry and Google) may process
          data outside the European Economic Area, including in the United States. Where they do,
          we rely on safeguards recognised by the GDPR, such as the European Commission&apos;s
          Standard Contractual Clauses or the EU–US Data Privacy Framework.
        </p>
      </LegalSection>

      <LegalSection id="retention" title="6. How long we keep data">
        <p>
          We keep your data while your account is active. When you delete your account we remove
          your personal and health data, except for records we are legally required to keep, such
          as payment records, which we keep only for the legally required period. Crash reports and
          analytics events are retained by those providers for a limited period under their own
          retention settings.
        </p>
      </LegalSection>

      <LegalSection id="rights" title="7. Your rights">
        <p>
          Under the GDPR (and similar laws) you can: access your data; correct it; delete it;
          restrict or object to processing; receive your data in a portable format; and withdraw
          consent at any time without affecting earlier processing. You can also complain to your
          local data-protection authority.
        </p>
        <p>
          To delete your account and data, follow{" "}
          <Link href="/delete-account" className="text-brand-primary underline">
            these steps
          </Link>
          . For any other request, email{" "}
          <a className="text-brand-primary underline" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
          ; we respond within one month.
        </p>
      </LegalSection>

      <LegalSection id="security" title="8. Security">
        <p>
          Data is transmitted over encrypted (HTTPS) connections. Passwords are handled by our
          authentication provider and are never stored in readable form by us. Access to health
          data is limited to you and your assigned dietician, and we rate-limit and monitor our
          systems for abuse. No system is perfectly secure; if a breach affects your data we will
          notify you and the authorities as the law requires.
        </p>
      </LegalSection>

      <LegalSection id="children" title="9. Children">
        <p>
          Docwellness is intended for adults aged 18 and over. We do not knowingly collect data
          from children. If you believe a child has created an account, contact us and we will
          delete it.
        </p>
      </LegalSection>

      <LegalSection id="cookies" title="10. Website cookies">
        <p>
          This marketing website does not set advertising or tracking cookies. The mobile app does
          not use cookies.
        </p>
      </LegalSection>

      <LegalSection id="changes" title="11. Changes to this policy">
        <p>
          If we make material changes we will update the date above and, where appropriate, notify
          you in the app.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="12. Contact">
        <p>
          Questions about privacy:{" "}
          <a className="text-brand-primary underline" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
          . See also our{" "}
          <Link href="/terms" className="text-brand-primary underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/health-disclaimer" className="text-brand-primary underline">
            Health Disclaimer
          </Link>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
