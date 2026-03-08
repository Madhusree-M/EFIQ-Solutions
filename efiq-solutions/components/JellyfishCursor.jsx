"use client";

import React, { useEffect, useRef } from 'react';

const JellyfishCursor = () => {
    const canvasRef = useRef(null);
    const mouseRef = useRef({ x: 0, y: 0 });
    const tentaclesRef = useRef([]);
    const headRef = useRef({ x: 0, y: 0 });

    const NUM_TENTACLES = 8;
    const POINTS_PER_TENTACLE = 15;

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let time = 0;

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            // Re-init on resize to prevent weird lines
            headRef.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
            initTentacles();
        };

        const handleMouseMove = (e) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };

        const initTentacles = () => {
            const tentacles = [];
            for (let i = 0; i < NUM_TENTACLES; i++) {
                const angle = (i / NUM_TENTACLES) * Math.PI * 2;
                const points = Array.from({ length: POINTS_PER_TENTACLE }, () => ({
                    x: headRef.current.x,
                    y: headRef.current.y,
                    angle: angle
                }));
                tentacles.push(points);
            }
            tentaclesRef.current = tentacles;
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);
        handleResize();

        const animate = () => {
            time += 0.02;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // 1. Move the head towards mouse
            headRef.current.x += (mouseRef.current.x - headRef.current.x) * 0.15;
            headRef.current.y += (mouseRef.current.y - headRef.current.y) * 0.15;

            // 2. Draw head pulse/glow
            const headPulse = Math.sin(time * 2) * 5 + 15;
            const headGradient = ctx.createRadialGradient(
                headRef.current.x, headRef.current.y, 0,
                headRef.current.x, headRef.current.y, headPulse
            );
            headGradient.addColorStop(0, 'rgba(10, 132, 255, 0.4)');
            headGradient.addColorStop(1, 'rgba(10, 132, 255, 0)');

            ctx.fillStyle = headGradient;
            ctx.beginPath();
            ctx.arc(headRef.current.x, headRef.current.y, headPulse, 0, Math.PI * 2);
            ctx.fill();

            // 3. Update and draw tentacles
            tentaclesRef.current.forEach((points, tIndex) => {
                const angleOffset = (tIndex / NUM_TENTACLES) * Math.PI * 2;
                const startX = headRef.current.x + Math.cos(angleOffset) * 5;
                const startY = headRef.current.y + Math.sin(angleOffset) * 5;

                ctx.beginPath();
                ctx.moveTo(startX, startY);

                points.forEach((p, pIndex) => {
                    const drag = 0.15 + (pIndex / POINTS_PER_TENTACLE) * 0.2;

                    let targetX = (pIndex === 0) ? startX : points[pIndex - 1].x;
                    let targetY = (pIndex === 0) ? startY : points[pIndex - 1].y;

                    // Sinusoidal wavy "Jellyfish swimming" motion
                    const waveIntensity = (pIndex / POINTS_PER_TENTACLE) * 8;
                    const waveSpeed = time * 2.5 + (pIndex * 0.4);
                    targetX += Math.cos(waveSpeed + angleOffset) * waveIntensity;
                    targetY += Math.sin(waveSpeed + angleOffset) * waveIntensity;

                    p.x += (targetX - p.x) * drag;
                    p.y += (targetY - p.y) * drag;

                    if (pIndex > 0) {
                        const xc = (points[pIndex - 1].x + p.x) / 2;
                        const yc = (points[pIndex - 1].y + p.y) / 2;
                        ctx.quadraticCurveTo(points[pIndex - 1].x, points[pIndex - 1].y, xc, yc);
                    }
                });

                // Style tentacle with a fading gradient
                const gradient = ctx.createLinearGradient(
                    startX, startY,
                    points[POINTS_PER_TENTACLE - 1].x, points[POINTS_PER_TENTACLE - 1].y
                );
                gradient.addColorStop(0, 'rgba(10, 132, 255, 0.5)');
                gradient.addColorStop(1, 'rgba(10, 132, 255, 0)');

                ctx.strokeStyle = gradient;
                ctx.lineWidth = Math.max(0.5, 3 - (tIndex % 3)); // Varied thickness
                ctx.lineCap = 'round';
                ctx.stroke();
            });

            // 4. Global Bloom/Glow
            ctx.shadowColor = 'rgba(10, 132, 255, 0.3)';
            ctx.shadowBlur = 10;

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-[9999]"
        />
    );
};

export default JellyfishCursor;
