<template>
    <header class="container mx-auto w-full header">
        <section
            class="w-full header.body flex flex-wrap items-end justify-center"
        >
            <figure
                class="avatar overflow-hidden rounded-full flex flex-wrap items-center justify-center bg-white shadow-lg"
            >
                <div class="avatar.box rounded-full overflow-hidden">
                    <img
                        src="https://avatars.githubusercontent.com/u/20111827?v=4"
                        class="w-full"
                        alt="Mizael - The Web Dev"
                    />
                </div>
            </figure>
            <section class="profile.content">
                <section
                    class="w-full flex flex-wrap items-center justify-center"
                >
                    <section class="md:w-6/12 md:pl-8 py-4 w-full">
                        <h4
                            class="lg:text-2xl md:text-xl md:text-left text-lg text-center text-palette-1 font-bold"
                        >
                            {{ name }}
                        </h4>
                        <p
                            class="lg:text-lg md:text-md md:text-left text-md text-center text-palette-1"
                        >
                            <i class="fa fa-user"></i>
                            {{ username }}
                        </p>
                    </section>
                    <section class="md:w-6/12 w-full">
                        <section
                            class="w-full flex flex-wrap items-center md:justify-end justify-center md:py-0 py-2 md:bg-transparent bg-palette-1"
                        >
                            <div class="px-2 md:w-auto w-4/12">
                                <p
                                    class="lg:text-lg md:text-palette-2 text-palette-3 text-center"
                                >
                                    <i class="fa fa-male"></i> {{ following }}
                                </p>
                                <p
                                    class="lg:text-xl md:text-palette-2 text-palette-3 text-center"
                                >
                                    Seguindo
                                </p>
                            </div>
                            <div class="px-2 md:w-auto w-4/12">
                                <p
                                    class="lg:text-lg md:text-palette-2 text-palette-3 text-center"
                                >
                                    <i class="fa fa-folder-open"></i>
                                    {{ repos }}
                                </p>
                                <p
                                    class="lg:text-xl md:text-palette-2 text-palette-3 text-center"
                                >
                                    Projetos
                                </p>
                            </div>
                            <div class="px-2 md:w-auto w-4/12">
                                <p
                                    class="lg:text-lg md:text-palette-2 text-palette-3 text-center"
                                >
                                    <i class="fa fa-users"></i> {{ followers }}
                                </p>
                                <p
                                    class="lg:text-xl md:text-palette-2 text-palette-3 text-center"
                                >
                                    Seguidores
                                </p>
                            </div>
                        </section>
                    </section>
                </section>
            </section>
        </section>
    </header>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
    name: 'Pofile',
    computed: {
        ...mapGetters({
            name: 'profile/name',
            username: 'profile/username',
            following: 'profile/following',
            followers: 'profile/followers',
            repos: 'profile/repos',
        }),
    },
}
</script>

<style scoped>
.header {
    background-repeat: no-repeat;
    background-size: contain;
    background-position: top center;
    background-attachment: fixed;
}

@media only screen and (min-width: 320px) {
    .header {
        background-image: url('~/assets/images/karina-vorozheeva-rW-I87aPY5Y-unsplash.jpg');
        height: 320px;
    }

    .header\.body {
        height: 320px;
    }

    .avatar {
        width: 153px;
        height: 153px;
        transform: translateY(25px);
    }

    .profile\.content {
        width: 100%;
    }

    .avatar\.box {
        width: 143px;
        height: 143px;
    }
}

@media only screen and (min-width: 768px) {
    .header {
        background-image: url('~/assets/images/Full-HD-vincentiu-solomon-Z4wF0h47fy8-unsplash.jpg');
        height: 320px;
    }

    .profile\.content {
        width: 594.4px;
    }
}

@media only screen and (min-width: 1024px) {
    .avatar {
        width: 235.52px;
        height: 235.52px;
        transform: translateY(55px);
    }

    .profile\.content {
        width: 768.48px;
    }

    .avatar\.box {
        width: 225.52px;
        height: 225.52px;
    }
}

@media only screen and (min-width: 1280px) {
    .header {
        background-image: url('~/assets/images/4k-vincentiu-solomon-Z4wF0h47fy8-unsplash.jpg');
        height: 420px;
    }

    .header\.body {
        height: 420px;
    }

    .avatar {
        width: 256px;
        height: 256px;
        transform: translateY(55px);
    }

    .profile\.content {
        width: 1014px;
    }

    .avatar\.box {
        width: 236px;
        height: 236px;
    }
}

@media only screen and (min-width: 1536px) {
    .header {
        background-image: url('~/assets/images/5k-vincentiu-solomon-Z4wF0h47fy8-unsplash.jpg');
    }

    .avatar {
        width: 307.2px;
        height: 307.2px;
        transform: translateY(75px);
    }

    .profile\.content {
        width: 1208.8px;
    }

    .avatar\.box {
        width: 287.2px;
        height: 287.2px;
    }
}
</style>
