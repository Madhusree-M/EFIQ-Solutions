"use client";

import React, { useEffect, useRef } from "react";

export default function AnimatedCursor() {
    const canvasRef = useRef(null);

    useEffect(() => {
        // Run only on client side and if the device supports hover
        if (typeof window !== "undefined" && canvasRef.current) {

            // Devices without hover won't render the effect
            if (window.matchMedia("(hover: none)").matches) {
                return;
            }

            import("webgl-fluid").then((webGLFluidEnhanced) => {
                const initFluid = webGLFluidEnhanced.default || webGLFluidEnhanced;

                initFluid(canvasRef.current, {
                    IMMEDIATE: false,
                    TRIGGER: "hover",
                    SIM_RESOLUTION: 128,
                    DYE_RESOLUTION: 1024,
                    CAPTURE_RESOLUTION: 512,
                    DENSITY_DISSIPATION: 2.5,
                    VELOCITY_DISSIPATION: 1.5,
                    PRESSURE: 0.1,
                    PRESSURE_ITERATIONS: 20,
                    CURL: 5,
                    SPLAT_RADIUS: 0.25,
                    SPLAT_FORCE: 6000,
                    SHADING: true,
                    COLORFUL: true,
                    COLOR_UPDATE_SPEED: 10,
                    PAUSED: false,
                    TRANSPARENT: true,
                    BLOOM: true,
                    BLOOM_ITERATIONS: 8,
                    BLOOM_RESOLUTION: 256,
                    BLOOM_INTENSITY: 0.8,
                    BLOOM_THRESHOLD: 0.6,
                    BLOOM_SOFT_KNEE: 0.7,
                    SUNRAYS: true,
                    SUNRAYS_RESOLUTION: 196,
                    SUNRAYS_WEIGHT: 1.0,
                });
            });
        }
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-screen h-screen pointer-events-none z-[9998]"
        />
    );
}
