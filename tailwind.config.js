const colors = require('tailwindcss/colors')
const font = ["'Libre Franklin'", 'sans-serif']

module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        colors: {
            gray: colors.coolGray,
            rose: colors.rose,
            transparent: 'transparent',
            black: colors.black,
            white: colors.white,
            palette: {
                1: '#FFFAF2',
                2: '#F5D6AB',
                3: '#C66C49',
                4: '#8B4136',
                5: '#333333',
            },
        },
        fontFamily: {
            sans: font,
            mono: font,
            display: font,
            body: font,
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
