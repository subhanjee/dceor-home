import { PageShell } from "@/components/PageShell";

export default function PrivacyPage() {
  return (
    <PageShell
      title="Privacy Policy - Decor Haven Home"
      subtitle="Learn how we collect, use, and protect your personal information."
    >
      <div className="space-y-6 rounded-3xl border bg-background p-6 text-sm leading-7 text-[color:var(--color-muted)]">
        <p>
          At Decor Haven Home, we are committed to protecting our customers&apos;
          privacy in our online environment. Based in Lahore, Punjab, Pakistan,
          we prioritize secure and trustworthy interactions with our valued
          customers. Your trust is important to us, and we work hard to
          maintain strong relationships with every customer.
        </p>

        <p>
          At Decor Haven Home, we value your privacy and are committed to
          protecting your personal information. This Privacy Policy explains how
          we collect, use, and protect your data when you visit our website or
          engage with our services.
        </p>

        <div>
          <h2 className="mb-2 text-base font-semibold text-foreground">
            1. Information We Collect
          </h2>
          <p>When you visit Decor Haven Home, we may collect:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>
              Personal Information: Name, email, phone number, and address (if
              provided during a purchase or inquiry).
            </li>
            <li>
              Technical Data: IP address, browser type, and visit duration to
              enhance your experience.
            </li>
            <li>
              Order Information: Details about your purchases, including payment
              and shipping details.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-2 text-base font-semibold text-foreground">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>Process and deliver your orders.</li>
            <li>Improve our website and customer experience.</li>
            <li>Analyze website traffic and user preferences.</li>
          </ul>
        </div>

        <div>
          <h2 className="mb-2 text-base font-semibold text-foreground">
            3. Data Protection and Security
          </h2>
          <p>
            We take strict measures to protect your personal data from
            unauthorized access, misuse, or loss. While we implement security
            safeguards, no system is entirely immune to potential cyber threats.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-base font-semibold text-foreground">
            4. Sharing of Information
          </h2>
          <p>
            We do not sell or rent your personal data. However, we share
            necessary details with:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Payment processors for secure transactions.</li>
            <li>Shipping providers for order delivery.</li>
            <li>Marketing and analytics partners to improve our services.</li>
          </ul>
        </div>

        <div>
          <h2 className="mb-2 text-base font-semibold text-foreground">
            5. Policy Updates
          </h2>
          <p>
            We may update this Privacy Policy as needed. Any changes will be
            posted on our website, and continued use of our site implies
            acceptance of the updated terms.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-base font-semibold text-foreground">
            Important Note
          </h2>
          <p>
            We are proud of the quality of our products. If anyone claims our
            products as their own and attempts to sell copied versions, please
            verify authenticity before purchasing. Unauthorized copying of our
            designs is strictly prohibited. We distribute our products through
            trusted brokers and partner shops to serve customers better.
          </p>
        </div>
      </div>
    </PageShell>
  );
}

