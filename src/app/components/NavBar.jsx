"use client"; // Add this directive to make sure the component runs on the client side

import { useState, useEffect } from "react";
import Image from "next/image";
import localFont from 'next/font/local'



const LatoBold = localFont({src: '../../fonts/Lato/Lato-Bold.ttf'})

export default function NavBar() {
  const [isNightMode, setIsNightMode] = useState(false);

  useEffect(() => {
    // Check if the user has already selected night mode previously
    const storedMode = localStorage.getItem("nightMode");
    if (storedMode) {
      setIsNightMode(storedMode === "true");
    }
  }, []);

  useEffect(() => {
    // Update the body's class based on the night mode state
    if (isNightMode) {
      document.body.classList.add("nightmode");
      localStorage.setItem("nightMode", "true");
    } else {
      document.body.classList.remove("nightmode");
      localStorage.setItem("nightMode", "false");
    }
  }, [isNightMode]);

  return (
    <nav className="navbar">
              <Image
          className="dark:invert"
          src="/paraw.png"
          alt="Next.js logo"
          width={38}
          height={38}
          priority
        />
      <div className="logo">Kasimanwa</div>
      <button
        className="nightmode-switch"
        onClick={() => setIsNightMode(!isNightMode)}
      >
        {isNightMode ? "🌙 Dulom" : "🌞 Sanag"}
      </button>
    </nav>
  );
}
