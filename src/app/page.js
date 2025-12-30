import HomePage from "./components/HomePage";


export const metadata = {
  title: "TD Foods | Premium Dry Crayfish in Nigeria",
  description:
    "Buy premium dry crayfish from TD Foods. Clean, hygienically packaged, no sand, no odor. Nationwide delivery across Nigeria.",

  keywords: [
    "dry crayfish Nigeria",
    "buy crayfish online",
    "premium crayfish",
    "crayfish supplier",
    "TD Foods",
  ],

  openGraph: {
    title: "TD Foods | Premium Dry Crayfish 🦐",
    description:
      "Fresh, clean and hygienically packaged dry crayfish. Trusted nationwide.",
    images: ["/images/crayfish.jpg"],
    locale: "en_NG",
    type: "website",
  },
};

export default function Page() {
  return <HomePage />;
}
