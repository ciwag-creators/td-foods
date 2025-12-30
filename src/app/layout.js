import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://td-foods.vercel.app"), // change later
  applicationName: "Crayfish Store",
  category: "Food & Agriculture",
  description: "Buy quality crayfish online",
};


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}

        <Script
          src="https://js.paystack.co/v1/inline.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}

