import type { Metadata } from "next";
import Link from "next/link";
import { Callout, LegalPage, LegalSection } from "@/components/legal-page";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Support & Contact",
  description: "Get help with the Docwellness app, your account, or a privacy request.",
};

export default function SupportPage() {
  return (
    <LegalPage
      title="Support & contact"
      intro={<p>We are happy to help. Here is the quickest way to get an answer.</p>}
    >
      <LegalSection id="email" title="Email us">
        <p>
          Write to{" "}
          <a className="text-brand-primary underline" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
          . Please include the email address you signed up with and, for app problems, your phone
          model and Android version. We aim to reply within two working days.
        </p>
      </LegalSection>

      <LegalSection id="dietician" title="Questions about your plan">
        <p>
          For anything about your diet plan, meals or progress, message your dietician directly
          from the <strong>Chat</strong> tab in the app — they know your plan best.
        </p>
      </LegalSection>

      <LegalSection id="account" title="Account and privacy requests">
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <Link href="/delete-account" className="text-brand-primary underline">
              Delete your account and data
            </Link>
          </li>
          <li>
            Access, correct or export your data: email us with the subject &quot;Data
            request&quot;.
          </li>
          <li>
            Forgot your password? Use <strong>Forgot password</strong> on the sign-in screen.
          </li>
        </ul>
      </LegalSection>

      <Callout>
        <p className="font-semibold">Medical emergency?</p>
        <p className="mt-1">
          Docwellness is not an emergency service. If you think you are having a medical
          emergency, call your local emergency number (112 in the EU) immediately.
        </p>
      </Callout>
    </LegalPage>
  );
}
