/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "random-img": "url('https://picsum.photos/1024/400')",
        "random-img1": "url('https://picsum.photos/400')",
        "random-img2": "url('https://picsum.photos/800/400')",
      },
    },
  },
  plugins: [],
};
