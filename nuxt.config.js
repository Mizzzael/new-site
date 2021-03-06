export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Mizael - The Web Dev',
        htmlAttrs: {
            lang: 'pt-br',
        },
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            { hid: 'description', name: 'description', content: '' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
            {
                rel: 'stylesheet',
                href:
                    'https://fonts.googleapis.com/css2?family=Libre+Franklin:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap',
            },
        ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        './node_modules/font-awesome/css/font-awesome.min.css',
        './assets/css/style.css',
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: ['./plugins/axios.js'],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: ['@nuxtjs/axios'],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
}
