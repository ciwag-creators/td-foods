"use client";
import Link from "next/link";
import Image from "next/image";
export const metadata = {
  title: "TD Foods | Premium Dry Crayfish in Nigeria",
  description:
    "Buy premium dry crayfish from TD Foods. Clean, hygienically packaged, no sand, no odor. Fast delivery across Nigeria. Order online or via WhatsApp.",

  keywords: [
    "dry crayfish Nigeria",
    "buy crayfish online",
    "premium crayfish",
    "crayfish supplier",
    "TD Foods crayfish",
    "seafood Nigeria",
  ],

  authors: [{ name: "TD Foods" }],
  creator: "TD Foods",

  openGraph: {
    title: "TD Foods | Premium Dry Crayfish 🦐",
    description:
      "Fresh, clean and hygienically packaged dry crayfish. Trusted by homes and restaurants nationwide.",
    url: "https://td-foods.vercel.app", // change to your real domain
    siteName: "TD Foods",
    images: [
      {
        url: "/images/crayfish.jpg",
        width: 1200,
        height: 630,
        alt: "Premium dry crayfish from TD Foods",
      },
    ],
    locale: "en_NG",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "TD Foods | Premium Dry Crayfish",
    description:
      "Order premium dry crayfish online. Clean, fresh, and trusted nationwide.",
    images: ["/images/crayfish.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};


export default function HomePage() {
  const whatsappMessage = `Hello TD Foods 👋

I want to place an order for dry crayfish 🦐

Please share price and delivery details.

Thank you.`;

  return (
    <main style={styles.wrapper}>
      {/* HERO SECTION */}
      <section style={styles.hero}>
        <div style={styles.heroText}>
          <h1 style={styles.title}>TD-Foods Dry Crayfish 🦐</h1>

          <p style={styles.subtitle}>
            Premium Quality • Ready to Eat • Deliciously Clean
          </p>

          <p style={styles.subtitle}>
            Fresh, clean and hygienically packaged
          </p>

          <div style={{ display: "flex", gap: 12 }}>
            <Link href="/order">
              <button style={styles.cta}>Order Now</button>
            </Link>

            <a
              href={`https://wa.me/2347066922332?text=${encodeURIComponent(
                whatsappMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button style={styles.whatsappBtn}>WhatsApp</button>
            </a>
          </div>
        </div>

        {/* IMAGES ROW */}
        <div style={styles.imageRow}>
          <Image
            src="/images/crayfish.jpg"
            alt="Premium crayfish"
            width={300}
            height={220}
            style={styles.heroImage}
            priority
          />

          <Image
            src="/images/crayfish-bg.jpg"
            alt="Packaged crayfish"
            width={300}
            height={220}
            style={styles.heroImage}
          />
        </div>
      </section>

      {/* INFO SECTION */}
      <section style={styles.info}>
        <h2>Why Choose TD Foods?</h2>

        <div style={styles.features}>
          <div style={styles.card}>✔ 100% Clean & Dry</div>
          <div style={styles.card}>✔ No Sand, No Odor</div>
          <div style={styles.card}>✔ Trusted by Homes & Restaurants</div>
          <div style={styles.card}>✔ Nationwide Delivery</div>
        </div>
      </section>
<section style={styles.pricing}>
  <h2>Pricing & Supply Capacity</h2>

  <p style={styles.pricingText}>
    We supply <strong>premium dry crayfish</strong> suitable for homes,
    restaurants, caterers, and bulk buyers.
  </p>

  <div style={styles.pricingGrid}>
    <div style={styles.pricingCard}>
      <h3>💰 Price Range</h3>
      <p>₦3,500 per kg (retail)</p>
      <p>Discounts available for bulk orders</p>
    </div>

    <div style={styles.pricingCard}>
      <h3>📦 Supply Capacity</h3>
      <p>Minimum order: 1 kg</p>
      <p>Maximum supply: 500 kg+</p>
      <p>Daily & bulk supply available</p>
    </div>

    <div style={styles.pricingCard}>
      <h3>🚚 Delivery</h3>
      <p>Nationwide delivery</p>
      <p>Fast & reliable logistics</p>
    </div>
  </div>

  <p style={styles.pricingNote}>
    📲 For bulk orders, wholesale pricing, or restaurant supply, please contact
    us via WhatsApp.
  </p>
</section>


      {/* FINAL CTA */}
      <section style={styles.final}>
        <h2>Ready to Place an Order?</h2>
        <p>Fast payment • Instant confirmation • WhatsApp receipt</p>

        <Link href="/order">
          <button style={styles.ctaAlt}>Proceed to Order</button>
        </Link>
      </section>

      {/* FLOATING WHATSAPP */}
      <a
        href={`https://wa.me/2347066922332?text=${encodeURIComponent(
          whatsappMessage
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        style={styles.whatsappFloat}
      >
        💬
      </a>
    </main>
  );
}

/* ================= STYLES ================= */

const styles = {
  wrapper: {
    fontFamily: "Arial, sans-serif",
    color: "#222",
  },

  hero: {
    display: "flex",
    gap: 60,
    alignItems: "center",
    justifyContent: "space-between",
    padding: "60px 20px",
    maxWidth: 1100,
    margin: "0 auto",
    flexWrap: "wrap",
  },

  heroText: {
    maxWidth: 500,
  },

  title: {
    fontSize: "3rem",
    marginBottom: 10,
    lineHeight: 1.2,
  },

  subtitle: {
    fontSize: "1.15rem",
    marginBottom: 12,
    color: "#555",
  },

  imageRow: {
    display: "flex",
    gap: 20,
    flexWrap: "wrap",
    justifyContent: "center",
  },

  heroImage: {
    borderRadius: 16,
    objectFit: "cover",
  },

  cta: {
    padding: "14px 28px",
    fontSize: "1rem",
    backgroundColor: "#0aa",
    color: "#fff",
    border: "none",
    borderRadius: 6,
    cursor: "pointer",
  },

  whatsappBtn: {
    padding: "14px 22px",
    fontSize: "1rem",
    backgroundColor: "#25D366",
    color: "#fff",
    border: "none",
    borderRadius: 6,
    cursor: "pointer",
  },

  info: {
    background: "#f7f7f7",
    padding: "60px 20px",
    textAlign: "center",
  },

  features: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: 16,
    maxWidth: 900,
    margin: "30px auto 0",
  },

  card: {
    background: "#fff",
    padding: 20,
    borderRadius: 8,
    fontWeight: "bold",
  },

  final: {
    textAlign: "center",
    padding: "60px 20px",
  },

  ctaAlt: {
    padding: "14px 30px",
    fontSize: "1rem",
    backgroundColor: "#008080",
    color: "#fff",
    border: "none",
    borderRadius: 6,
    cursor: "pointer",
  },

  whatsappFloat: {
    position: "fixed",
    bottom: 20,
    right: 20,
    width: 56,
    height: 56,
    backgroundColor: "#25D366",
    color: "#fff",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "26px",
    textDecoration: "none",
    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
    zIndex: 1000,
  },
};
