module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideUp: {
          from: { transform: "translateY(50%)" ,
                  opacity: '0'
                },
          to: { transform: "translateY(0)",
                opacity: '1'
              },
        },
        slideDown: {
          from: { transform: "translateY(0)" ,
                  opacity: '1'
                },
          to: { transform: "translateY(111%)",
                opacity: '0'
              },
        },
      },
      animation: {
        slideUp: "slideUp 0.3s ease forwards",
        slideDown: "slideDown 0.3s ease forwards",
      },
    },
  },
};