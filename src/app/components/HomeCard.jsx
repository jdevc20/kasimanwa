"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function HomeCard({ Title, Content, children }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-3 max-w-md mx-auto my-8">
      <h1 className="text-2xl font-semibold text-gray-800 mb-2">{Title}</h1>
      <div className="text-gray-600 text-base mb-6">{Content}</div>
      
      {/* Children Section */}
      <div className="text-gray-800">{children}</div>
    </div>
  );
}
