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
    "We develop software for online and mobile applications, video systems, signal processing, edge AI, and cloud operations, all of which run from the sensor to the browser.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable} scroll-smooth`}>
      <body>{children}</body>
    </html>
  );
}
