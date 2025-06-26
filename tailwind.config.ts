import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				chart: {
					1: "hsl(var(--chart-1))",
					2: "hsl(var(--chart-2))",
					3: "hsl(var(--chart-3))",
					4: "hsl(var(--chart-4))",
					5: "hsl(var(--chart-5))",
				},
				// Custom health theme colors
				'health-primary': 'hsl(var(--health-primary))',
				'health-secondary': 'hsl(var(--health-secondary))',
				'health-accent': 'hsl(var(--health-accent))',
				'health-success': 'hsl(var(--health-success))',
				'health-warning': 'hsl(var(--health-warning))',
				'health-error': 'hsl(var(--health-error))',
				'health-neutral': 'hsl(var(--health-neutral))',
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				fadeInUpSmooth: {
					"0%": { opacity: "0", transform: "translateY(100px)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
				fadeInUp: {
					"0%": { opacity: "0", transform: "translateY(30px)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
				slideInLeft: {
					"0%": { opacity: "0", transform: "translateX(-30px)" },
					"100%": { opacity: "1", transform: "translateX(0)" },
				},
				"pulse-soft": {
					"0%, 100%": { opacity: "1" },
					"50%": { opacity: "0.8" },
				},
			},
			animation: {
				fadeInUpSmooth: "fadeInUpSmooth 0.8s ease-out forwards",
				"fade-in-up": "fadeInUp 0.6s ease-out",
				"slide-in-left": "slideInLeft 0.6s ease-out",
				"pulse-soft": "pulse-soft 2s ease-in-out infinite",
			},
			fontFamily: {
				'inter': ['Inter', 'sans-serif'],
				'poppins': ['Poppins', 'sans-serif'],
			},
		},
	},
	plugins: [tailwindcssAnimate],
} satisfies Config;