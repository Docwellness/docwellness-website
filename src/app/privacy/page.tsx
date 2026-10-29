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
            controller of the data described here: [TODO-LEGAL: controller legal name and
            registered address]. You can reach us about privacy at{" "}
            <a className="text-brand-primary underline" href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL}
            </a>
            .
          </p>
          <p>
            Our representative in the EU and UK: [TODO-LEGAL: EU/UK representative or confirmation
            none required].
          </p>
          <Callout>
            <p className="font-semibold">In short</p>
            <p className="mt-1">
              We collect the health and food information you give us so a dietician can build and
              adjust your plan, and only after you agree on a separate consent screen. Crash
              reports and usage analytics are off unless you turn them on. We do not show ads, we
              do not sell your data, and we do not use it for advertising. You can withdraw
              consent, download your data, or delete your account and data at any time in the app
              —{" "}
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
          process it only with your explicit consent. We ask for it on a dedicated screen after you
          verify your email and before you enter any health details, and we keep a record of when
          you gave it and for which version of this policy. You can withdraw it at any time in
          Settings → Privacy and consent.
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
              "Push-notification token, device platform and a security signal (whether the device is rooted/jailbroken). Only if you opt in: crash reports, and in-app usage events such as screens viewed and meals logged, together with your user ID and traits such as goal and gender.",
              "Delivering notifications, keeping the service secure and, if you opt in, fixing errors and improving the app.",
            ],
            [
              "Consent records",
              "Whether and when you gave or withdrew consent (health data, crash reports, analytics), the policy version, and where you gave it.",
              "Proving and honouring your choices.",
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
            "To keep the service secure and prevent abuse.",
            "Only if you opt in: to fix crashes (crash reports) and to understand how the app is used so we can improve it (product analytics, see section 4). You choose each separately and can change it any time in Settings → Privacy and consent.",
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
            [
              "Sentry (only if you opt in)",
              "Crash and error reporting",
              "Technical diagnostics such as device, OS and app version, error details, stack traces and breadcrumbs (the steps leading up to an error). The app does not attach your user ID.",
            ],
            [
              "PostHog, EU region (only if you opt in)",
              "Product analytics",
              "In-app usage events, your IP address, and device and app properties and, when you opt in, profile traits such as goal and gender, linked to your user ID. Session recording is not used.",
            ],
          ]}
        />
        <p>
          We may also disclose data where the law requires it, or to protect the rights and safety
          of our users.
        </p>
      </LegalSection>

      <LegalSection id="transfers" title="5. International transfers">
        <p>
          Some providers above (for example OpenAI, Cloudinary and Google) may process data
          outside the European Economic Area, including in the United States. Where they do, we
          rely on a transfer safeguard recognised by the GDPR: [TODO-LEGAL: confirm transfer
          mechanism per provider]. [TODO-LEGAL: confirm Sentry&apos;s data region (the app sends
          reports to an EU ingest host) and the transfer mechanism, if any].
        </p>
        <p>
          Where your data is stored: [TODO-LEGAL: storage location of the database, hosting and
          each provider (database region, hosting, Cloudinary, Supabase, Resend, Firebase Cloud
          Messaging)].
        </p>
      </LegalSection>

      <LegalSection id="retention" title="6. How long we keep data">
        <p>
          We keep your data while your account is active. When you delete your account we remove
          your personal and health data, except for records we are legally required to keep, such
          as payment records, which we keep only for the legally required period. You can also
          delete individual categories of data without closing your account. How long each
          category is kept:
        </p>
        <DataTable
          head={["Category", "Retention"]}
          rows={[
            ["Diet plans and meal schedules", "[TODO-LEGAL: retention period for diet plans]"],
            ["Meal logs", "[TODO-LEGAL: retention period for meal logs]"],
            ["Water logs", "[TODO-LEGAL: retention period for water logs]"],
            ["Exercise plans and logs", "[TODO-LEGAL: retention period for exercise plans and logs]"],
            ["Progress entries and body photos", "[TODO-LEGAL: retention period for progress entries and photos]"],
            ["Goals, milestones and check-ins", "[TODO-LEGAL: retention period for goals and check-ins]"],
            ["First consultation and lab reports", "[TODO-LEGAL: retention period for consultation and lab reports]"],
            ["Chat messages", "[TODO-LEGAL: retention period for chat messages]"],
            ["Notifications and nudges", "[TODO-LEGAL: retention period for notifications and nudges]"],
            ["Payment proofs and subscription records", "[TODO-LEGAL: retention period for payment and subscription records]"],
            ["Need-attention flags and reviews", "[TODO-LEGAL: retention period for flags and reviews]"],
            ["Consent records", "[TODO-LEGAL: retention period for consent records]"],
            ["Crash reports and analytics at our providers", "[TODO-LEGAL: retention period for crash and analytics data at providers]"],
          ]}
        />
      </LegalSection>

      <LegalSection id="rights" title="7. Your rights">
        <p>
          Under the GDPR (and similar laws) you can: access your data; correct it; delete it;
          restrict or object to processing; receive your data in a portable format; and withdraw
          consent at any time without affecting earlier processing. You can also complain to your
          local data-protection authority.
        </p>
        <p>
          In the app (Settings → Privacy and consent) you can withdraw your health-data consent,
          turn crash reports and analytics on or off, and download a copy of your data as a file.
          To delete your account and data, follow{" "}
          <Link href="/delete-account" className="text-brand-primary underline">
            these steps
          </Link>
          . For any other request, email{" "}
          <a className="text-brand-primary underline" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
          ; we respond within one month (or sooner if your local law requires). We may ask you to
          confirm your identity first. Exercising your rights is free, and we will not treat you
          worse for doing so. If the downloaded file says it was shortened, email us for a
          complete copy.
        </p>
      </LegalSection>

      <LegalSection id="legal-bases" title="8. Legal bases for processing">
        <p>
          If you are in the EEA or the UK, we process personal data on these legal bases.
          Providing the data in section 1 is needed to build a personalised plan; without it we
          cannot provide the service.
        </p>
        <DataTable
          head={["Purpose", "Legal basis"]}
          rows={[
            [
              "Creating your account, building your plan, chat with your dietician, managing your subscription",
              "Performance of our contract with you (GDPR Art. 6(1)(b)).",
            ],
            [
              "Health, body, consultation and progress data, including photos and lab reports",
              "Your explicit consent (GDPR Art. 9(2)(a)), given on a dedicated screen, together with the contract above. You can withdraw consent at any time in Settings → Privacy and consent; withdrawing means we can no longer provide a personalised plan. Withdrawal does not affect earlier processing.",
            ],
            [
              "Security and abuse prevention",
              "Our legitimate interest in keeping the service secure (Art. 6(1)(f)).",
            ],
            [
              "Crash reporting",
              "Your consent (Art. 6(1)(a)), off unless you turn it on. You can withdraw it at any time in Settings → Privacy and consent.",
            ],
            [
              "Product analytics (screens viewed, meals logged)",
              "Your consent (Art. 6(1)(a)), off unless you turn it on. You can withdraw it at any time in Settings → Privacy and consent.",
            ],
            ["Payment and invoicing records", "Legal obligation (Art. 6(1)(c))."],
          ]}
        />
      </LegalSection>

      <LegalSection id="regions" title="9. Your rights where you live">
        <p>
          We follow the data-protection law that applies to you. In every region you can email{" "}
          <a className="text-brand-primary underline" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>{" "}
          to access, correct or delete your data, or to withdraw consent; the details below add to
          section 7.
        </p>
        <DataTable
          head={["Where you live", "Law", "What it adds"]}
          rows={[
            [
              "Austria, France, Germany, Greece, Hungary, Iceland, Netherlands, Poland (EEA)",
              "GDPR and national data-protection laws",
              "All rights in section 7. You may complain to your national authority (for example CNIL in France, the Austrian DSB, the German federal or state authority, the Hellenic DPA, NAIH in Hungary, Persónuvernd in Iceland, the Dutch AP, UODO in Poland).",
            ],
            [
              "United Kingdom",
              "UK GDPR and Data Protection Act 2018",
              "Same rights as the GDPR. You may complain to the Information Commissioner (ICO).",
            ],
            [
              "India",
              "Digital Personal Data Protection Act, 2023",
              `Access a summary of your data, correct or erase it, withdraw consent, nominate someone to exercise your rights if you die or cannot, and use grievance redressal. Write to ${CONTACT_EMAIL} first; if unresolved you may approach the Data Protection Board of India.`,
            ],
            [
              "Canada",
              "PIPEDA and provincial laws (including Quebec Law 25)",
              "Access and correct your data, withdraw consent, and ask about where it is processed. You may complain to the Office of the Privacy Commissioner of Canada or your provincial commissioner.",
            ],
            [
              "Australia",
              "Privacy Act 1988 (Australian Privacy Principles)",
              "Access and correction rights. If you are unhappy with our response you may complain to the Office of the Australian Information Commissioner (OAIC). We follow the Notifiable Data Breaches scheme.",
            ],
            [
              "New Zealand",
              "Privacy Act 2020",
              "Access and correction rights. You may complain to the Privacy Commissioner.",
            ],
            [
              "United States",
              "State privacy and consumer-health-data laws (for example California CCPA/CPRA, Washington My Health My Data Act, Nevada)",
              "Where applicable: know what we hold, delete or correct it, withdraw consent for consumer health data, and appeal our decision by replying to us. We do not sell personal data or share it for cross-context behavioural advertising, so there is nothing to opt out of. Consumer health data is used only to provide the service and is shared only with the providers in section 4.",
            ],
            [
              "Saudi Arabia",
              "Personal Data Protection Law (PDPL)",
              "Know how your data is used, access it, get a copy, correct or destroy it, and withdraw consent. You may complain to SDAIA.",
            ],
            [
              "United Arab Emirates",
              "Federal Decree-Law No. 45 of 2021 (PDPL)",
              "Access, correct, erase, restrict or object to processing, receive your data in a portable format, and withdraw consent. You may complain to the UAE Data Office.",
            ],
          ]}
        />
      </LegalSection>

      <LegalSection id="security" title="10. Security">
        <p>
          Data is transmitted over encrypted (HTTPS) connections. Passwords are handled by our
          authentication provider and are never stored in readable form by us. Access to health
          data is limited to you and your assigned dietician, and we rate-limit and monitor our
          systems for abuse. No system is perfectly secure. If a breach affects your data we will
          notify you and the relevant authorities as the law requires. [TODO-LEGAL: confirm the
          breach-notification commitment and timing (draft: the authority within 72 hours of
          becoming aware, in the EEA and UK, where the breach is likely to put you at risk)].
        </p>
      </LegalSection>

      <LegalSection id="children" title="11. Age requirement">
        <p>
          Docwellness is intended for people aged 16 and over. We do not knowingly collect data
          from anyone under 16. If you believe someone under 16 has created an account, contact
          us and we will delete it.
        </p>
      </LegalSection>

      <LegalSection id="cookies" title="12. Website cookies">
        <p>
          This marketing website does not set advertising or tracking cookies. The mobile app does
          not use cookies.
        </p>
      </LegalSection>

      <LegalSection id="changes" title="13. Changes to this policy">
        <p>
          If we make material changes we will update the date above and notify you in the app
          before they take effect. If a change needs your consent, we will ask for it again.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="14. Contact">
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
