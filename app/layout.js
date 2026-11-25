import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
});

export const metadata = {
  title: "Kiln Systems — Full-Stack, Video, Edge & Signal Engineering",
  description:
    "Software and systems engineering from the sensor to the browser. Full-stack apps, video management, signal processing, edge AI, and cloud operations.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable} scroll-smooth`}>
      <body>{children}</body>
    </html>
  );
}
