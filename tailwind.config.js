const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');



/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        fontFamily:{
            primary: "Playfair Display",
            body: "work Sans",
        },
        container: {
            padding: {
                DEFAULT: "1rem",
                lg: "3rem"
            },
        },
        extend:{
            colors: {


                "light-primary": "#EDEDED",
                "light-secondary": "#D8D9CF",
                "light-tail-100": "#2DD4BF",
                "light-tail-500": "#302709",

                "dark-primary": "#000000",
                "dark-secondary": "#150050",
                "dark-navy-100": "#610094",
                "dark-navy-500": "#3F0071",
                accent:{
                    DEFAULT: "#998643",
                    hover: "#97CCC2",
                },
                paragraph: "#878e99",
                blue: colors.blue,
                indigo: colors.indigo,
                green: colors.green,
                red: colors.red,
            },

        },
    },

    plugins: [require('@tailwindcss/forms')],
};
