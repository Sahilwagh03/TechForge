import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kassi_classic: ['Kassiclassic', 'sans-serif'],
        aktivgrotesk: ['Aktivgrotesk', 'sans-serif'],
        urbanist:['Urbanist','sans-serif']
      },
    },
  },
  plugins: [],
} satisfies Config;
