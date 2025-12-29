import Link from "next/link";

export default function HomePage() {
  return (
    <div style={styles.container}>
      <div style={styles.overlay}>
        {/* HERO */}
        <h1 style={styles.heroTitle}>
          Fresh, Clean & Premium Crayfish 🦐
        </h1>

        <p style={styles.heroText}>
          At <strong>TD Foods</strong>, we supply high-quality, hygienically
          processed crayfish sourced from trusted coastal suppliers.
        </p>

        <p style={styles.price}>₦2,000 per kg</p>

        {/* PRODUCT IMAGE */}
        <img
          src="/images/Crayfish.jpg"
          alt="Premium dried crayfish"
          style={styles.productImage}
        />

        {/* FEATURES */}
        <div style={styles.features}>
          <p>✔ Premium Grade Crayfish</p>
          <p>✔ Hygienically Processed</p>
          <p>✔ Affordable Pricing</p>
          <p>✔ Fast & Reliable Delivery</p>
          <p>✔ Secure Paystack Payment</p>
        </div>

        {/* HOW IT WORKS */}
        <h2 style={styles.subTitle}>How It Works</h2>
        <ol style={styles.steps}>
          <li>Fill in your order details</li>
          <li>Pay securely online</li>
          <li>Receive WhatsApp confirmation</li>
          <li>We arrange delivery immediately</li>
        </ol>

        {/* CTA */}
        <Link href="/order">
          <button style={styles.ctaButton}>
            Order Now 🦐
          </button>
        </Link>

        <p style={styles.footer}>
          TD Foods — Trusted Supplier of Quality Crayfish
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    backgroundImage: "url('/images/crayfish-bg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: 20,
  },

  overlay: {
    backgroundColor: "rgba(255,255,255,0.93)",
    maxWidth: 650,
    margin: "40px auto",
    padding: 30,
    borderRadius: 12,
    textAlign: "center",
    fontFamily: "Arial",
  },

  heroTitle: {
    fontSize: "2.2rem",
    fontWeight: "bold",
  },

  heroText: {
    marginTop: 10,
    fontSize: "1.1rem",
  },

  price: {
    marginTop: 15,
    fontSize: "1.4rem",
    fontWeight: "bold",
    color: "#0aa",
  },

  productImage: {
    width: "100%",
    maxHeight: 300,
    objectFit: "cover",
    borderRadius: 10,
    marginTop: 20,
  },

  features: {
    textAlign: "left",
    marginTop: 25,
    fontSize: "1rem",
  },

  subTitle: {
    marginTop: 30,
    fontSize: "1.5rem",
  },

  steps: {
    textAlign: "left",
    marginTop: 10,
  },

  ctaButton: {
    marginTop: 25,
    padding: 15,
    width: "100%",
    backgroundColor: "#0aa",
    color: "#fff",
    fontSize: "1.1rem",
    border: "none",
    borderRadius: 8,
    cursor: "pointer",
  },

  footer: {
    marginTop: 30,
    fontSize: "0.9rem",
    color: "#555",
  },
};
