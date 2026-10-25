
import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

export const App: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #111827, #4c1d95)",
        color: "white",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial, sans-serif",
        padding: 60,
      }}
    >
      <div style={{ opacity, textAlign: "center" }}>
        <div style={{ fontSize: 100 }}>🚀</div>
        <h1 style={{ fontSize: 76 }}>NEVER GIVE UP</h1>
        <p style={{ fontSize: 42 }}>Your future is worth fighting for.</p>
      </div>
    </AbsoluteFill>
  );
};
  
