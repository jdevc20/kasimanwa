import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";
import NavBar from "@/app/components/NavBar"; 
import localFont from "next/font/local";
import MouseTrail from "./components/MouseTrail";

// Fonts
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const LatoRegular = localFont({ src: "../fonts/Lato/Lato-Regular.ttf" });
const CaveatRegular = localFont({ src: "../fonts/Caveat/Caveat-Regular.ttf" });

// ✅ Move metadata here (Server Component)
export const metadata = {
  title: "Kasimanwa",
  description: "Western Visayan Archives",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${CaveatRegular.className} antialiased`}>
        <MouseTrail/>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
