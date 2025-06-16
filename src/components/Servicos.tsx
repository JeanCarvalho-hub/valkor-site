"use client";
import { useEffect } from "react";
import "@/styles/page/servicos.css";

export default function Servicos() {
  useEffect(() => {
    const container = document.getElementById("dot-container");

    if (container) {
      for (let i = 0; i < 200; i++) {
        const dot = document.createElement("div");
        dot.className = "dot";

        const x = (Math.random() - 0.5) * window.innerWidth * 2;
        const y = Math.random() * -window.innerHeight;
        const scale = 0.5 + Math.random() * 1.5;

        dot.style.setProperty("--x", `${x}px`);
        dot.style.setProperty("--y", `${y}px`);
        dot.style.setProperty("--s", `${scale}`);
        dot.style.animationDuration = `${5 + Math.random() * 10}s`;

        container.appendChild(dot);
      }
    }
  }, []);

  return (
    <section className="background">
      <div id="dot-container" />
      <div className="content">
        <h1>Seu conteúdo aqui</h1>
      </div>
    </section>
  );
}
