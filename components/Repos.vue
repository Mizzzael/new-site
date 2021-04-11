<template>
    <section class="screenPage">
        <section class="md:w-10/12 w-11/12 mx-auto pt-8">
            <section v-if="reposList.length" class="w-full py-2">
                <div
                    v-for="(repo, index) in reposList"
                    :key="`repos-${index}`"
                    class="w-full"
                >
                    <Repo :repo="repo" />
                </div>
            </section>
            <div v-if="loading" class="w-4/12 mx-auto">
                <Empty />
            </div>
            <div class="w-full pb-2">
                <button
                    v-if="!loading && reposList.length < repos"
                    class="focus:outline-none repos.btn rounded-4 md:w-6/12 w-11/12 mx-auto bg-palette-2 block py-2 md:text-md text-xs uppercase text-palette-3 hover:bg-palette-1 shadow"
                    @click="getMoreRepos()"
                >
                    Carregar mais repositórios
                </button>
            </div>
        </section>
    </section>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name: 'Repos',
    data() {
        return {
            reposList: [],
            loading: true,
            page: 1,
            limit: 5,
        }
    },
    computed: {
        ...mapGetters({ repos: 'profile/repos', username: 'profile/username' }),
    },
    mounted() {
        this.getRepos()
    },
    methods: {
        getRepos() {
            this.$axios
                .get(
                    `https://api.github.com/users/${
                        this.username || 'Mizzzael'
                    }/repos?page=${this.page}&per_page=${this.limit}`
                )
                .then(({ data }) => {
                    this.reposList = [...this.reposList, ...data]
                    this.loading = false
                })
        },
        getMoreRepos() {
            this.page += 1
            this.loading = true
            this.getRepos()
        },
    },
}
</script>
<style scoped>
.repos\.btn {
    transition: ease 220ms background;
}
</style>
