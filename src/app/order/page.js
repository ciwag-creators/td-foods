"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

/* ✅ STYLES MUST BE TOP-LEVEL */
const styles = {
  container: {
    minHeight: "100vh",
    padding: 20,
    fontFamily: "Arial",
    backgroundImage: "url('/images/crayfish-bg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  overlay: {
    backgroundColor: "rgba(255,255,255,0.9)",
    maxWidth: 500,
    padding: 20,
    borderRadius: 10,
    margin: "40px auto",
  },
  title: { fontSize: "2rem", fontWeight: "bold" },
  input: { padding: 10, margin: "8px 0", width: "100%" },
  button: {
    padding: 12,
    backgroundColor: "#0aa",
    color: "#fff",
    border: "none",
    fontSize: "1rem",
    cursor: "pointer",
    width: "100%",
  },
};

export default function Home() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);

  const pricePerKg = 3500;

  const sendWhatsAppAlert = (reference) => {
    const message = `
NEW CRAYFISH ORDER 🦐

Name: ${name}
Phone: ${phone}
Address: ${address}
Quantity: ${quantity} kg
Amount: ₦${quantity * pricePerKg}
Payment Ref: ${reference}
Status: PAID
`;
    window.open(
      `https://wa.me/2347066922332?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const sendCustomerReceipt = (reference) => {
    const message = `
TD FOODS 🦐 – PAYMENT RECEIPT

Hello ${name},

Quantity: ${quantity} kg
Total Paid: ₦${quantity * pricePerKg}
Payment Ref: ${reference}

Delivery Address:
${address}
`;

    const formattedPhone = phone.startsWith("0")
      ? "234" + phone.slice(1)
      : phone;

    window.open(
      `https://wa.me/${formattedPhone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const saveOrder = async (reference) => {
    const amount = quantity * pricePerKg;

    const { error } = await supabase.from("orders").insert([
      {
        customer_name: name,
        phone,
        address,
        quantity,
        amount,
        payment_reference: reference,
        payment_status: "paid",
      },
    ]);

    setLoading(false);

    if (error) {
      alert("Payment received but order saving failed");
      return;
    }

    sendWhatsAppAlert(reference);
    sendCustomerReceipt(reference);

    setName("");
    setPhone("");
    setAddress("");
    setQuantity(1);
  };

  const payWithPaystack = () => {
    if (!window.PaystackPop) {
      alert("Payment system not ready");
      return;
    }

    if (!name || !phone || !address) {
      alert("Fill all fields");
      return;
    }

    setLoading(true);

    window.PaystackPop.setup({
      key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
      email: `${phone}@crayfish.com`,
      amount: quantity * pricePerKg * 100,
      currency: "NGN",
      ref: "CRAY_" + Date.now(),
      callback: (res) => saveOrder(res.reference),
      onClose: () => setLoading(false),
    }).openIframe();
  };

  return (
    <div style={styles.container}>
      <div style={styles.overlay}>
        <h1 style={styles.title}>TD FOODS STORE 🦐</h1>
        <p>₦{pricePerKg} per kg</p>

        <input style={styles.input} placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input style={styles.input} placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <input style={styles.input} placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
        <input style={styles.input} type="number" min="1" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} />

        <button style={styles.button} onClick={payWithPaystack} disabled={loading}>
          {loading ? "Processing..." : "Pay Now"}
        </button>
      </div>
    </div>
  );
}
