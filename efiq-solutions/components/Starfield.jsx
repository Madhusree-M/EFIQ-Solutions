"use client";
import React, { useEffect, useRef } from "react";

export default function Starfield() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        let animationFrameId;

        const stars = [];
        const numStars = 700; // Increased star count for visibility

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", resize);
        resize();

        class Star {
            constructor() {
                this.x = Math.random() * canvas.width - canvas.width / 2;
                this.y = Math.random() * canvas.height - canvas.height / 2;
                this.z = Math.random() * canvas.width;
                this.pz = this.z;
            }

            update(speed) {
                this.z -= speed;
                if (this.z < 1) {
                    this.z = canvas.width;
                    this.x = Math.random() * canvas.width - canvas.width / 2;
                    this.y = Math.random() * canvas.height - canvas.height / 2;
                    this.pz = this.z;
                }
            }

            draw() {
                const cx = canvas.width / 2;
                const cy = canvas.height / 2;

                const sx = (this.x / this.z) * canvas.width + cx;
                const sy = (this.y / this.z) * canvas.height + cy;

                // Increased base size for stars to make them more visible
                const r = Math.max(0.5, (1 - this.z / canvas.width) * 4);

                const px = (this.x / this.pz) * canvas.width + cx;
                const py = (this.y / this.pz) * canvas.height + cy;

                this.pz = this.z;

                ctx.beginPath();
                // Brighter opacity 
                const opacity = Math.min(1, (1 - (this.z / canvas.width)) * 2);

                // More vibrant colors 
                const isBlue = Math.random() > 0.7;
                const isPurple = Math.random() > 0.9;

                if (isPurple) {
                    ctx.strokeStyle = `rgba(180, 100, 255, ${opacity})`;
                } else if (isBlue) {
                    ctx.strokeStyle = `rgba(100, 180, 255, ${opacity})`;
                } else {
                    ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
                }

                ctx.lineWidth = r;
                ctx.lineCap = "round"; // Softer star edges
                ctx.moveTo(px, py);
                ctx.lineTo(sx, sy);
                ctx.stroke();
            }
        }

        for (let i = 0; i < numStars; i++) {
            stars.push(new Star());
        }

        let time = 0;

        const animate = () => {
            time += 0.005;

            // Slightly faster base speed
            const baseSpeed = 4;
            const warpModifier = Math.sin(time) > 0.8 ? (Math.sin(time) - 0.8) * 80 : 0;
            const currentSpeed = baseSpeed + warpModifier;

            // Less opaque trailing effect for brighter trails
            ctx.fillStyle = "rgba(0, 0, 0, 0.15)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            stars.forEach((star) => {
                star.update(currentSpeed);
                star.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            style={{ background: "#000" }}
        />
    );
}
