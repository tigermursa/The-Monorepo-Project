/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gray: {
          DEFAULT: "#595959",
        },
        primary: "#19525A",
      },
    },
  },
  plugins: [],
};

{
  /* 
<Container>
<Industries />
</Container>
<Features />
<Container>
<AppointmentStacks />
</Container> */
}
