"use client";

import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  const whatsappMessage = `Hello TD Foods 👋

I want to place an order for dry crayfish 🦐

Please share price and delivery details.`;

  return (
    <main style={styles.wrapper}>
      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.heroText}>
          <h1 style={styles.title}>TD-Foods Dry Crayfish 🦐</h1>

          <p style={styles.subtitle}>
            Premium Quality • Ready to Eat • Deliciously Clean
          </p>

          <p style={styles.subtitle}>
            Fresh, clean and hygienically packaged
          </p>

          <div style={styles.buttonRow}>
            <Link href="/order">
              <button style={styles.cta}>Order Now</button>
            </Link>

            <a
              href={`https://wa.me/2348105121657?text=${encodeURIComponent(
                whatsappMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button style={styles.whatsappBtn}>WhatsApp</button>
            </a>
          </div>
        </div>

        {/* IMAGES */}
        <div className="image-row" style={styles.imageRow}>
          <Image
            src="/images/crayfish.jpg"
            alt="Dry crayfish"
            width={500}
            height={350}
            style={styles.heroImage}
            priority
          />
          <Image
            src="/images/crayfish-bg.jpg"
            alt="Packaged crayfish"
            width={500}
            height={350}
            style={styles.heroImage}
          />
        </div>
      </section>

      {/* INFO */}
      <section style={styles.info}>
        <h2>Why Choose TD Foods?</h2>
        <div style={styles.features}>
          <div style={styles.card}>✔ 100% Clean & Dry</div>
          <div style={styles.card}>✔ No Sand, No Odor</div>
          <div style={styles.card}>✔ Trusted Nationwide</div>
          <div style={styles.card}>✔ Fast Delivery</div>
        </div>
      </section>

      {/* PRICING */}
      <section style={styles.pricing}>
        <h2 style={styles.pricingTitle}>Pricing & Supply Capacity</h2>

        <div style={styles.pricingGrid}>
          <div style={styles.pricingCard}>
            <h3>💰 Price</h3>
            <p>₦3,500 per kg</p>
            <p>Bulk discounts available</p>
          </div>

          <div style={styles.pricingCard}>
            <h3>📦 Quantity</h3>
            <p>1 kg – 500 kg+</p>
          </div>

          <div style={styles.pricingCard}>
            <h3>🚚 Delivery</h3>
            <p>Nationwide coverage</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={styles.final}>
        <h2>Ready to Order?</h2>
        <Link href="/order">
          <button style={styles.ctaAlt}>Proceed to Order</button>
        </Link>
      </section>

      {/* FLOATING WHATSAPP */}
      <a
        href={`https://wa.me/2348105121657?text=${encodeURIComponent(
          whatsappMessage
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        style={styles.whatsappFloat}
      >
        💬
      </a>

      {/* MOBILE RESPONSIVENESS */}
      <style jsx>{`
        @media (max-width: 768px) {
          h1 {
            white-space: normal;
            text-align: center;
          }

          .image-row {
            flex-direction: column;
          }
        }
      `}</style>
    </main>
  );
}

const styles = {
  wrapper: { fontFamily: "Arial, sans-serif", color: "#222" },

  hero: {
    display: "flex",
    gap: 50,
    padding: "70px 20px",
    maxWidth: 1200,
    margin: "0 auto",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },

  heroText: { maxWidth: 500 },

  title: {
    fontSize: "3rem",
    marginBottom: 14,
    whiteSpace: "nowrap",
  },

  subtitle: { fontSize: "1.15rem", color: "#555" },

  buttonRow: { display: "flex", gap: 12 },

  imageRow: {
    display: "flex",
    gap: 24,
    alignItems: "center",
  },

  heroImage: {
    borderRadius: 18,
    objectFit: "cover",
  },

  cta: {
    padding: "14px 28px",
    background: "#0aa",
    color: "#fff",
    borderRadius: 6,
    border: "none",
    cursor: "pointer",
  },

  whatsappBtn: {
    padding: "14px 22px",
    background: "#25D366",
    color: "#fff",
    borderRadius: 6,
    border: "none",
  },

  whatsappFloat: {
    position: "fixed",
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    background: "#25D366",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: 28,
    zIndex: 1000,
  },

  info: { padding: 60, background: "#f7f7f7", textAlign: "center" },

  features: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: 16,
  },

  card: {
    background: "#fff",
    padding: 20,
    borderRadius: 10,
  },

  pricing: { padding: 60 },

  pricingGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: 20,
  },

  pricingCard: {
    padding: 28,
    borderRadius: 14,
    background: "#f9f9f9",
  },

  final: { textAlign: "center", padding: 60 },

  ctaAlt: {
    padding: "14px 30px",
    background: "#008080",
    color: "#fff",
    borderRadius: 6,
  },
};
