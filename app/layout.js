import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weights: ['400', '500', '600', '700'],
});



export const metadata = {
  title: "Blog App",
  description: "I'm a blog app created with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
