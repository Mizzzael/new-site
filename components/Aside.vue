<template>
    <aside class="aside md:w-auto w-full md:block flex flex-wrap items-center">
        <hr class="md:hidden block w-full" />
        <div data-url="/" class="md:w-full w-6/12">
            <NuxtLink to="/">
                <button
                    class="aside.button focus:outline-none py-4 w-full text-center bg-palette-1 text-palette-3 md:text-xl text-lg hover:bg-palette-2"
                >
                    Sobre
                </button>
            </NuxtLink>
        </div>
        <hr class="md:block hidden" />
        <div data-url="/projetos" class="md:w-full w-6/12">
            <NuxtLink to="/projetos">
                <button
                    class="aside.button focus:outline-none w-full py-4 text-center bg-palette-1 text-palette-3 md:text-xl text-lg hover:bg-palette-2"
                >
                    Projetos
                </button>
            </NuxtLink>
        </div>
        <hr class="md:hidden block w-full" />
    </aside>
</template>
<script>
export default {
    name: 'Aside',
    mounted() {
        const param = this.$nuxt._route.fullPath
        const target = document.querySelector('[data-url="' + param + '"]')
        target.classList.add('md:border-r-2')
        target.classList.add('border-b-2')
        target.classList.add('md:border-b-0')
        target.classList.add('border-palette-4')
    },
}
</script>

<style scoped>
.aside\.button {
    transition: ease 220ms background;
}

@media only screen and (min-width: 768px) {
    .aside {
        width: 163px;
        min-height: 100vh;
        height: 100%;
        padding-top: 90px;
    }
}

@media only screen and (min-width: 1024px) {
    .aside {
        width: 245.52px;
    }
}

@media only screen and (min-width: 1280px) {
    .aside {
        width: 266px;
    }
}

@media only screen and (min-width: 1536px) {
    .aside {
        width: 317.2px;
    }
}
</style>
