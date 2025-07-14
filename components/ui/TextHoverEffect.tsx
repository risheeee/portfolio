"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

export const TextHoverEffect = ({
  text,
  duration,
}: {
  text: string;
  duration?: number;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

  useEffect(() => {
    if (svgRef.current && cursor.x !== null && cursor.y !== null) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
      const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
      setMaskPosition({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      });
    }
  }, [cursor]);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="270" // Increased height
      viewBox="0 10 900 200" // Larger viewBox for bigger text
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      className="select-none overflow-visible"
    >
      <defs>
        <linearGradient
          id="textGradient"
          gradientUnits="userSpaceOnUse"
          cx="50%"
          cy="50%"
          r="25%"
        >
          {hovered ? (
            <>
              <stop offset="0%" stopColor="#fde047" />
              <stop offset="25%" stopColor="#f87171" />
              <stop offset="50%" stopColor="#60a5fa" />
              <stop offset="75%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#a78bfa" />
            </>
          ) : (
            <>
              <stop offset="0%" stopColor="#f5f5f5" />
              <stop offset="100%" stopColor="#d4d4d4" />
            </>
          )}
        </linearGradient>

        <motion.radialGradient
          id="revealMask"
          gradientUnits="userSpaceOnUse"
          r={hovered ? "20%" : "50%"} // Larger default mask when not hovered
          initial={{ cx: "50%", cy: "50%" }}
          animate={maskPosition}
          transition={{ duration: duration ?? 0.2, ease: "easeOut" }}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>
        
        <mask id="textMask">
          <rect x="0" y="0" width="100%" height="100%" fill="url(#revealMask)" />
        </mask>
      </defs>

      {/* Base text (always visible) */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="2" // Thicker stroke
        className="fill-white/10 stroke-neutral-200/40 font-[helvetica] text-[200px] font-bold dark:fill-white/5 dark:stroke-neutral-800/40"
        style={{ opacity: 0.7 }} // Always visible
      >
        {text}
      </text>

      {/* Animated outline text */}
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="1.8" // Thicker stroke
        className="fill-transparent stroke-neutral-200 font-[helvetica] text-[200px] font-bold dark:stroke-neutral-700"
        initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
        animate={{
          strokeDashoffset: 0,
          strokeDasharray: 1000,
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
        }}
      >
        {text}
      </motion.text>

      {/* Gradient text with mask */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke="url(#textGradient)"
        strokeWidth="1.8" // Thicker stroke
        mask="url(#textMask)"
        className="fill-transparent font-[helvetica] text-[200px] font-bold"
      >
        {text}
      </text>
    </svg>
  );
};