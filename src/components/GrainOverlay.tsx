"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

function GrainCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let resizeTimer: ReturnType<typeof setTimeout>;

    const generateNoise = () => {
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const value = Math.random() * 255;
        data[i] = value;
        data[i + 1] = value;
        data[i + 2] = value;
        data[i + 3] = 20;
      }

      ctx.putImageData(imageData, 0, 0);
    };

    // Throttle resize : on ne regénère que si la DPR ou la taille réelle change
    const resize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        generateNoise();
      }, 150);
    };

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    generateNoise();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      clearTimeout(resizeTimer);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 9998,
        opacity: 0.15,
      }}
    />
  );
}

export default function GrainOverlay({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {children}
      {mounted && createPortal(<GrainCanvas />, document.body)}
    </>
  );
}
