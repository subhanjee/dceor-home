import { PageShell } from "@/components/PageShell";

export default function AboutPage() {
  return (
    <PageShell
      title="About Us - Decor Haven Home"
      subtitle="We bring elegance, style, and handcrafted charm to every space."
    >
      <div className="space-y-6 rounded-3xl border bg-background p-6 text-sm leading-7 text-[color:var(--color-muted)]">
        <p>
          At Decor Haven Home, we believe every home deserves a touch of
          elegance and style. Our passion for home decor inspires us to offer
          unique, high-quality decorative products that enhance your living
          space with beauty and charm.
        </p>

        <div>
          <h2 className="mb-2 text-base font-semibold text-foreground">
            Who We Are
          </h2>
          <p>
            We are a dedicated team committed to bringing you beautifully
            crafted decor items that blend aesthetics with functionality. From
            decorative cycles to planter stands and wall hangings, our products
            are designed to add a stylish and modern touch to homes, offices,
            hotels, and more.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-base font-semibold text-foreground">
            Our Collection
          </h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>Decorative Cycles - Elegant and artistic accents for any space.</li>
            <li>Home Corner Planters - Stylish planters to bring greenery indoors.</li>
            <li>
              Decorative Round and Square Cages - Unique decor pieces with a
              vintage appeal.
            </li>
            <li>
              Round Planters and Planter Stands (3 and 4 Pots) - Perfect for
              displaying plants beautifully.
            </li>
            <li>
              Decorative Wall Hangings - Eye-catching pieces to elevate your
              walls.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-2 text-base font-semibold text-foreground">
            Why Choose Decor Haven Home?
          </h2>
          <p>
            We offer unique, high-quality home decor products that blend style
            and elegance. Our products are crafted for durability, adding beauty
            to your space while remaining practical. You can also share a photo
            of any decor product you love, and we will create it for you.
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            <li>
              Premium Quality - We prioritize durability and craftsmanship in
              every product.
            </li>
            <li>
              Elegant Designs - Modern yet timeless styles that complement any
              home.
            </li>
            <li>
              Customer Satisfaction - Your happiness is our priority, and we
              strive to provide the best service.
            </li>
          </ul>
        </div>

        <p>
          At Decor Haven Home, our goal is simple: to help you create a home
          that reflects your personality and style. Whether you are looking for
          a small decorative accent or a statement piece, we have something
          special for you.
        </p>

        <p className="font-medium text-foreground">
          Enhance your home with Decor Haven Home today!
        </p>
      </div>
    </PageShell>
  );
}

