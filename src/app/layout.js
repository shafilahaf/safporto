import { Press_Start_2P } from "next/font/google";
import "./globals.css";

const pressStart2P = Press_Start_2P({
  subsets: ["latin"],
  weight: ['400'],
});

export const metadata = {
  title: "Portfolio - Shafilah",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${pressStart2P.className} antialiased`}  // Applying the pixel font here
      >
        {children}
      </body>
    </html>
  );
}
