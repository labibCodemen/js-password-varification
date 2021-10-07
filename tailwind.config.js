module.exports = {
  purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
          spacing: {
            "row": "calc(100% + 2rem)",
          },
        },
    },
    variants: {
        extend: {
            filter: ['hover', 'focus'],
            brightness: ['hover', 'focus'],
        },
    },
    plugins: [],
}
