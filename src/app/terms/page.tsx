import { PageShell } from "@/components/PageShell";

export default function TermsPage() {
  return (
    <PageShell
      title="Terms and Conditions - Decor Haven Home"
      subtitle="Please read these terms carefully before using our website and services."
    >
      <div className="space-y-6 rounded-3xl border bg-background p-6 text-sm leading-7 text-[color:var(--color-muted)]">
        <p>
          Welcome to Decor Haven Home! By accessing and using our website and
          services, you agree to comply with the following Terms and Conditions.
        </p>

        <div>
          <h2 className="mb-2 text-base font-semibold text-foreground">
            General Terms
          </h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              These Terms and Conditions govern your use of Decor Haven Home&apos;s
              website, products, and services.
            </li>
            <li>
              We reserve the right to modify these terms at any time, and
              updates will be posted on our website.
            </li>
            <li>
              Your continued use of our website constitutes acceptance of any
              changes.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-2 text-base font-semibold text-foreground">
            Products and Services
          </h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>All products listed on our website are subject to availability.</li>
            <li>
              We make every effort to display product images and descriptions
              accurately, but slight differences may occur.
            </li>
            <li>We provide our products at reasonable prices.</li>
          </ul>
        </div>

        <div>
          <h2 className="mb-2 text-base font-semibold text-foreground">
            Orders and Payments
          </h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              By placing an order, you agree to provide accurate and complete
              information.
            </li>
            <li>We accept payments through secure payment gateways.</li>
            <li>
              Orders will only be processed after successful payment
              confirmation.
            </li>
            <li>
              We reserve the right to cancel any order due to errors,
              fraudulent activity, or stock unavailability.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-2 text-base font-semibold text-foreground">
            Shipping and Delivery
          </h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              Delivery times are based on location and product availability.
            </li>
            <li>
              We are not responsible for delays caused by shipping providers or
              unforeseen circumstances.
            </li>
            <li>
              Any damages or issues with delivery must be reported within 48
              hours of receiving the product.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-2 text-base font-semibold text-foreground">
            Returns and Refunds
          </h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              We accept returns only if the product is damaged or defective
              upon arrival.
            </li>
            <li>
              Return requests must be submitted within 7 days of receiving the
              item.
            </li>
            <li>
              Items must be returned in their original condition with packaging
              intact.
            </li>
            <li>
              Refunds will be processed only after the returned item is
              inspected and approved.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-2 text-base font-semibold text-foreground">
            Intellectual Property
          </h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              All content, including images, text, and designs, on the Decor
              Haven Home website is the property of Decor Haven Home.
            </li>
            <li>
              No one is authorized to copy, reproduce, or distribute any
              content without the owner&apos;s permission.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-2 text-base font-semibold text-foreground">
            Privacy and Security
          </h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              We respect your privacy and ensure that your personal information
              is protected.
            </li>
            <li>
              Please review our Privacy Policy for details on how we collect and
              use your data.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-2 text-base font-semibold text-foreground">
            Contact Us
          </h2>
          <p>
            If you have any questions regarding our Terms and Conditions, feel
            free to contact us at:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Your Email</li>
            <li>Your Contact Number</li>
          </ul>
        </div>

        <p className="font-medium text-foreground">
          Thank you for choosing Decor Haven Home!
        </p>
      </div>
    </PageShell>
  );
}

