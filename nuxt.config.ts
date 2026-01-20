// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    modules: ['@bootstrap-vue-next/nuxt', '@pinia/nuxt', '@vueuse/nuxt', 'nuxt-icon'],
    devtools: { enabled: true },
    router: {
        options: {
            linkActiveClass: 'active'
        }
    },
    routeRules: {
        '/': { redirect: '/dashboards/analytics' }
    },
    pinia: {
        storesDirs: ['./stores/**'],
    },
    ignore: ['pages/**/**/**/components/*'],
    plugins: [
        { src: '~/plugins/apexcharts', mode: "client" },
        { src: "~/plugins/jquery", mode: "client" },
        { src: "~/plugins/jsvectormap", mode: "client" },
    ],
    ssr: true,
});
