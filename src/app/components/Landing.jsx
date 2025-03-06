"use client"; // Ensure it runs on the client side

import { motion } from "framer-motion";
import { Caveat_Brush } from "next/font/google"; // Import the font

// Load the Caveat Brush font
const caveatBrush = Caveat_Brush({
  subsets: ["latin"],
  weight: "400",
});

const Landing = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center p-4">
      <motion.h2 
        initial={{ y: -20, opacity: 0, rotate: -3 }} 
        animate={{ y: 0, opacity: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 10, duration: 0.5 }}
        className={`text-4xl sm:text-6xl font-bold relative px-4 py-2 ${caveatBrush.className}`}
      >
        <motion.span
          className="bg-yellow-200 px-4 py-2 inline-block shadow-lg text-gray-800 font-semibold
                     relative before:content-[''] before:absolute before:w-full before:h-full
                     before:bg-gray-300 before:top-1 before:left-1 
                     before:rounded-lg before:-z-10 
                     clip-path-[polygon(5%_0%,_95%_0%,_100%_90%,_0%_100%)]"
          initial={{ rotate: -2, scale: 0.8 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          whileHover={{ rotate: 2, scale: 1.05 }}
        >
          Kanami guid ya bala ‼️
        </motion.span>
      </motion.h2>
    </div>
  );
};

export default Landing;
