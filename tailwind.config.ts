import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    blue: "#1e3a8a", // Deeper, more sophisticated blue
                    green: "#065f46", // Deeper emerald green
                    sky: "#f0f9ff",
                    mint: "#f0fdf4",
                },
                brand: {
                    50: '#f0f4ff',
                    100: '#d9e2ff',
                    200: '#bcd0ff',
                    300: '#8fb1ff',
                    400: '#5c8aff',
                    500: '#3366ff', // Vibrant but professional blue
                    600: '#2952db',
                    700: '#1e3eb3',
                    800: '#193494',
                    900: '#142a78',
                },
                surface: {
                    50: '#f8fafc',
                    100: '#f1f5f9',
                    200: '#e2e8f0',
                }
            },
            fontFamily: {
                sans: ["var(--font-jakarta)", "Inter", "sans-serif"],
            },
            boxShadow: {
                'premium': '0 0 50px -12px rgba(0, 0, 0, 0.08)',
                'premium-hover': '0 20px 50px -12px rgba(0, 0, 0, 0.12)',
            },
            backgroundImage: {
                'mesh-gradient': "radial-gradient(at 0% 0%, hsla(225, 100%, 94%, 1) 0, transparent 50%), radial-gradient(at 50% 0%, hsla(160, 100%, 96%, 1) 0, transparent 50%), radial-gradient(at 100% 0%, hsla(215, 100%, 95%, 1) 0, transparent 50%)",
            }
        },
    },
    plugins: [],
};
export default config;
