<template>
    <section class="w-full">
        <div id="emptyload" class="w-10/12 mx-auto"></div>
        <div id="emptyloadcircle" class="w-2/12 mx-auto"></div>
    </section>
</template>
<script>
import lottie from 'lottie-web'
import Animation from '~/assets/animations/not-found.json'
import Loading from '~/assets/animations/loading.json'
// import anime from 'animejs'

export default {
    mounted() {
        this.initLoading()
    },
    methods: {
        initLoading() {
            lottie.loadAnimation({
                container: document.getElementById('emptyload'),
                renderer: 'svg',
                autoplay: true,
                loop: true,
                animationData: Animation,
            })

            lottie.loadAnimation({
                container: document.getElementById('emptyloadcircle'),
                renderer: 'svg',
                autoplay: true,
                loop: true,
                animationData: Loading,
            })
        },
    },
}
</script>
