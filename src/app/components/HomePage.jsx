"use client";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main style={styles.wrapper}>
      
      {/* HERO SECTION */}
      <section style={styles.hero}>
        <div style={styles.heroText}>
          <h1 style={styles.title}>Premium Dry Crayfish 🦐</h1>
          <p style={styles.subtitle}>
            Fresh • Clean • Hygienically Packaged
          </p>

          <Link href="/order">
            <button style={styles.cta}>Order Now</button>
          </Link>
        </div>

        <Image
          src="/images/crayfish.jpg"
          alt="Premium crayfish"
          width={420}
          height={320}
          style={styles.heroImage}
          priority
        />
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

      {/* IMAGE BREAK */}
      <section style={styles.imageBreak}>
        <Image
          src="/images/crayfish-bg.jpg"
          alt="Packaged crayfish"
          width={1000}
          height={450}
          style={styles.fullImage}
        />
      </section>

      {/* FINAL CTA */}
      <section style={styles.final}>
        <h2>Ready to Place an Order?</h2>
        <p>Fast payment • Instant confirmation • WhatsApp receipt</p>

        <Link href="/order">
          <button style={styles.ctaAlt}>Proceed to Order</button>
        </Link>
      </section>

    </main>
  );
}

const styles = {
  wrapper: {
    fontFamily: "Arial, sans-serif",
    color: "#222",
  },

  hero: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "60px 20px",
    maxWidth: 1100,
    margin: "0 auto",
  },

  heroText: {
    maxWidth: 500,
  },

  title: {
    fontSize: "2.8rem",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: "1.2rem",
    marginBottom: 20,
  },

  heroImage: {
    borderRadius: 14,
    marginTop: 20,
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

  imageBreak: {
    maxWidth: 1100,
    margin: "60px auto",
    padding: "0 20px",
  },

  fullImage: {
    width: "100%",
    borderRadius: 12,
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
};
