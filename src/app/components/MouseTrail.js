"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function MouseTrail() {
  const [mouseTrail, setMouseTrail] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      setMouseTrail((prevTrail) => [
        ...prevTrail.slice(-20), // Keep only the last 20 points for better performance
        { x: clientX, y: clientY, id: Math.random() },
      ]);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {mouseTrail.map((point, index) => (
        <motion.div
          key={point.id}
          className="absolute rounded-full pointer-events-none bg-blue-500"
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 0, scale: 2 }} // Creates the "brush spread" effect
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{
            top: point.y,
            left: point.x,
            width: `${Math.random() * 20 + 10}px`, // Random brush size between 10px to 30px
            height: `${Math.random() * 20 + 10}px`,
            filter: "blur(5px)", // Soft brush effect
            background: `radial-gradient(circle, rgba(0, 0, 255, 0.7) 0%, rgba(0, 0, 255, 0) 80%)`,
          }}
        />
      ))}
    </>
  );
}
