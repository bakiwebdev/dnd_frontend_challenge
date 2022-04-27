module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg": "#F9F9FB",
        "primary": "#EF463E",
        "primary-light": "#FEE5E5",
        "secondary": "#5F9BE0",
        "secondary-light": "#E2EDF9",
        "tertiary": "#3EA89C",
        "tertiary-light": "#D0EAE7",
      },
      height: {
        "100": "30rem",
        "105": "35rem",
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}