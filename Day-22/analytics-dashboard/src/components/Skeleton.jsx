import React from "react";

export default function Skeleton({ width = "100%", height = "20px", radius = "8px" }) {
  return (
    <div
      style={{
        width,
        height,
        borderRadius: radius,
        background: "linear-gradient(90deg, #2a2a3a 25%, #3a3a4a 50%, #2a2a3a 75%)",
        backgroundSize: "200% 100%",
        animation: "shimmer 1.4s infinite",
      }}
    />
  );
}