<template>
    <section class="w-full">
        <section class="md:w-10/12 w-11/12 mx-auto">
            <header class="w-full py-2">
                <a
                    :href="repo.html_url"
                    target="_blank"
                    class="text-palette-3 md:text-xl text-lg font-bold"
                >
                    {{ repo.name }}
                </a>
            </header>
            <section class="w-full py-2 flex flex-wrap items-end justify-start">
                <div v-if="repo.description" class="md:w-6/12 w-full py-2 px-1">
                    <p class="text-palette-5 md:text-md text-sm font-light">
                        {{ repo.description }}
                    </p>
                </div>
                <div class="md:w-6/12 w-full py-2 px-1">
                    <p class="text-palette-5 text-xs py-2">
                        Atualizado em {{ getDate() }}
                    </p>
                    <p v-if="repo.language" class="text-palette-5 text-xs">
                        <span
                            :style="`background-color: ${getColor(
                                repo.language
                            )};`"
                            class="inline-block align-middle colorLang rounded-full ml-2"
                        ></span>
                        <span class="inline-block align-middle">
                            {{ repo.language }}
                        </span>
                    </p>
                </div>
            </section>
            <footer class="w-full">
                <hr />
            </footer>
        </section>
    </section>
</template>
<script>
import color from 'github-lang-colors'

export default {
    props: ['repo'],
    methods: {
        getColor(lang) {
            return color(lang)
        },
        getDate() {
            const date = new Date(this.repo.updated_at)
            const _day =
                date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
            const _month =
                date.getMonth() + 1 < 10
                    ? `0${date.getMonth() + 1}`
                    : date.getMonth() + 1
            return `${_day}/${_month}/${date.getFullYear()}`
        },
    },
}
</script>

<style scoped>
.colorLang {
    width: 18px;
    height: 18px;
}
</style>
