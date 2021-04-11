<template>
    <section
        id="load"
        class="w-full full-height fixed left-0 right-0 top-0 bottom-0 m-auto bg-palette-1 flex flex-wrap items-center justify-center"
    >
        <div class="w-full">
            <figure id="loading" class="md:w-2/12 w-4/12 mx-auto"></figure>
            <div class="w-full loading.label">
                <div id="loadingcircle" class="loading.circle mx-auto"></div>
            </div>
        </div>
    </section>
</template>
<script>
import loaded from 'imagesloaded'
import lottie from 'lottie-web'
import anime from 'animejs'
import { mapMutations } from 'vuex'
import Animation from '../assets/animations/loading-octacat.json'
import AnimationCircle from '../assets/animations/loading.json'
export default {
    name: 'Loading',
    mounted() {
        this.initLoading()
        loaded(document.querySelector('body'), () => {
            setTimeout(() => {
                this.$axios
                    .get(`https://api.github.com/users/Mizzzael`)
                    .then(({ data }) => {
                        this.setName(data.name)
                        this.setEmail(data.email)
                        this.setUsername(data.login)
                        this.setFollowing(data.following)
                        this.setFollowers(data.followers)
                        this.setRepos(data.public_repos)
                        this.setBlog(data.blog)
                        this.stopLoading()
                    })
            }, 1000)
        })
    },
    methods: {
        ...mapMutations({
            setName: 'profile/setName',
            setEmail: 'profile/setEmail',
            setUsername: 'profile/setUsername',
            setFollowing: 'profile/setFollowing',
            setFollowers: 'profile/setFollowers',
            setRepos: 'profile/setRepos',
            setBlog: 'profile/setBlog',
        }),
        initLoading() {
            lottie.loadAnimation({
                container: document.getElementById('loading'),
                renderer: 'svg',
                autoplay: true,
                loop: true,
                animationData: Animation,
            })

            lottie.loadAnimation({
                container: document.getElementById('loadingcircle'),
                renderer: 'svg',
                autoplay: true,
                loop: true,
                animationData: AnimationCircle,
            })
        },
        stopLoading() {
            anime.timeline({ loop: false }).add({
                targets: '#load',
                opacity: [1, 0],
                translateY: [0, '-100vh'],
                duration: 1400,
                easing: 'easeOutElastic(1, .6)',
            })
        },
    },
}
</script>

<style scoped>
.full-height {
    height: 100vh;
    z-index: 999999;
}

.loading\.circle {
    width: 100px;
}
</style>
