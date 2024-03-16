import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Dalu's Portfolio",
  description: "Dalu's portfolio website generated with NEXTJS.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={kanit.className}>{children}</body>
    </html>
  );
}
