import type { Metadata } from "next";
import Link from "next/link";
import { Bullets, LegalPage, LegalSection } from "@/components/legal-page";
import { CONTACT_EMAIL, LEGAL_LAST_UPDATED } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms governing your use of the Docwellness app and services.",
};

const mailLink = (
  <a className="text-brand-primary underline" href={`mailto:${CONTACT_EMAIL}`}>
    {CONTACT_EMAIL}
  </a>
);

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated={LEGAL_LAST_UPDATED}
      intro={<p>Welcome to Docwellness. By using our app, you agree to these Terms of Service.</p>}
    >
      <LegalSection id="acceptance" title="1. Acceptance of Terms">
        <p>
          By accessing or using Docwellness, you agree to be bound by these terms. If you do not
          agree, please do not use the app.
        </p>
      </LegalSection>

      <LegalSection id="service" title="2. Description of Service">
        <p>
          Docwellness provides diet planning, meal tracking, and wellness monitoring services. Our
          dieticians create personalized diet plans based on your health profile.
        </p>
      </LegalSection>

      <LegalSection id="responsibilities" title="3. User Responsibilities">
        <Bullets
          items={[
            "Provide accurate health information",
            "Follow diet plans as recommended by your dietician",
            "Keep your account credentials secure",
            "Use the app for personal, non-commercial purposes only",
          ]}
        />
      </LegalSection>

      <LegalSection id="health" title="4. Health Disclaimer">
        <p>
          Docwellness is not a substitute for professional medical advice. Always consult with your
          healthcare provider before making significant dietary changes. Our dieticians provide
          dietary guidance, not medical treatment. See our{" "}
          <Link href="/health-disclaimer" className="text-brand-primary underline">
            Health Disclaimer
          </Link>{" "}
          for details.
        </p>
      </LegalSection>

      <LegalSection id="payment" title="5. Payment">
        <p>
          Diet plan services may require payment. The price, the length of the plan and what it
          includes are shown in the app before you pay. [TODO-LEGAL: confirm whether prices include
          taxes (VAT or GST) in each country we sell to]. [TODO-LEGAL: confirm whether any plan
          renews automatically and, if so, the notice and cancellation terms]. Refunds are covered
          in the Refunds section below.
        </p>
      </LegalSection>

      <LegalSection id="refunds" title="Refunds">
        <p>
          <strong>Right to withdraw (EEA, UK and similar consumer laws).</strong> If you are a
          consumer, you can withdraw from your purchase within 14 days of buying it without giving
          a reason, by emailing {mailLink}. If you asked us to start your plan during those 14
          days, you pay a proportionate amount for what has been provided up to the time you told
          us you were withdrawing, and we refund the rest.
        </p>
        <p>
          Pay after consultation: for a first-time membership request, the amount is payable after
          your first consultation with the dietician, as the app tells you before you submit the
          request. Submitting the request does not charge you.
        </p>
        <p>
          [TODO-LEGAL: confirm whether we refund the unused part of a plan if we end an account
          without a breach of these terms (see Account Termination)].
        </p>
        <p>
          Other refunds: [TODO-LEGAL: commercial refund terms (eligibility, time limits, how to
          request, how and when refunds are paid)].
        </p>
      </LegalSection>

      <LegalSection id="consumer-rights" title="Your consumer rights">
        <p>
          Nothing in these terms limits rights you have as a consumer under the law of the country
          where you live and that cannot be excluded by contract. This includes, for example, the
          statutory guarantees in the EU, the UK Consumer Rights Act 2015, the Australian Consumer
          Law and the New Zealand Consumer Guarantees Act. If you are a consumer you may bring a
          claim in the courts of your country of residence.
        </p>
      </LegalSection>

      <LegalSection id="termination" title="6. Account Termination">
        <p>
          You may delete your account at any time from the app (Profile → Account → Delete
          Account) or by following the steps on our{" "}
          <Link href="/delete-account" className="text-brand-primary underline">
            Delete Account
          </Link>{" "}
          page. We may suspend or terminate an account that seriously or repeatedly breaks these
          terms, and will tell you why and give you the chance to respond unless doing so would put
          others at risk. [TODO-LEGAL: confirm whether we refund the unused part of a plan if we end
          an account without such a breach].
        </p>
      </LegalSection>

      <LegalSection id="liability" title="7. Limitation of Liability">
        <p>
          To the extent the law allows, we are not liable for health outcomes that result from
          following or not following the dietary guidance in the app, which is general guidance and
          not medical treatment. Nothing in these terms excludes or limits our liability for death
          or personal injury caused by our negligence, for fraud, for gross negligence or intent,
          or for anything else that cannot be excluded under the law that applies to you.
        </p>
      </LegalSection>

      <LegalSection id="age" title="8. Age">
        <p>
          You must be at least 16 years old to create an account. If you are under 18, check with
          a parent, guardian or doctor before changing your diet.
        </p>
      </LegalSection>

      <LegalSection id="changes" title="9. Changes to Terms">
        <p>
          We may update these terms from time to time. For material changes we will notify you in
          the app [TODO-LEGAL: confirm the notice period before changes take effect (draft: at
          least 30 days)] before they take effect, and you may delete your account before then if
          you do not agree. [TODO-LEGAL: confirm whether changes may apply to plans already paid
          for (draft: never in a way that makes them worse for the customer)].
        </p>
      </LegalSection>

      <LegalSection id="contact" title="10. Contact">
        <p>
          Questions about these terms: {mailLink}. Our{" "}
          <Link href="/privacy" className="text-brand-primary underline">
            Privacy Policy
          </Link>{" "}
          explains how we handle your personal data.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
