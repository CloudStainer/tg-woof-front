import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {      
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" }
        },
        moveUp: {  
          "0%": { transform: "translateY(0)" },
          "50%": { text: "xl" },
          "100%": { transform: "translateY(-100px)" } /* Adjust -20px for how far you want it to move */  
        }  
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle, rgba(97, 150, 255, 1) 0%, black 100%)',  
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",        
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'ping-slow': 'ping 2s ease-in-out',
        'wiggle': "wiggle 200ms ease-in-out",
        'move-up-slow': 'moveUp 400ms ease-in-out forwards',
      },
    },
  },       
  plugins: [],
};
export default config;
