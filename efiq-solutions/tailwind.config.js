/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}",
        "./pages/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "brand-blue": "#0A84FF",
                "brand-green": "#22C55E",
                "dark-card": "#0d0d0d",
                "dark-surface": "#111111",
            },
            fontFamily: {
                orbitron: ["Orbitron", "sans-serif"],
                manrope: ["Manrope", "sans-serif"],
            },
        },
    },
    plugins: [],
};
