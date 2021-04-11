<template>
    <section class="screenPage">
        <section class="md:w-10/12 w-11/12 mx-auto">
            <header class="w-full">
                <h4 class="md:text-lg text-md text-palette-3 font-bold py-8">
                    Bios
                </h4>
            </header>
            <section class="w-full">
                <p class="text-palette-5 md:text-sm text-xs">
                    Olá, sou Mizael, como costumo dizer, um desenvolvedor em
                    busca da singularidade, é um prazer conhece-lo(a), espero
                    que esteja tudo bem, esse é o meu site pessoal, apenas um
                    espaço para que eu possa partilhar um pouco da minha
                    carreira, a 6 anos no mercado, sou um programador FullStack
                    de {{ new Date().getFullYear() - 1996 }} anos, me formei no
                    SENAC em 2014, e desde então tenho ingressado na carreira de
                    desenvolvedor web, já atuei em inúmeros cenários, e posso
                    dizer que estou em um nível pleno na minha carreira, porém
                    toda a escada se sobe de degrau em degrau e hoje tenho
                    estudado técnicas de Machine Learning, não por uma tendência
                    de mercado, mas simplesmente pelo prazer de aprender, e um
                    dia poder criar algo que você e outros possam usufruir,
                    afinal de contas, no final são nossos atos que contam nossas
                    histórias, e gostaria de um final feliz nas minhas, e espero
                    que na suas também, e falando nisso, fique a vontade para me
                    mandar uma mensagem, desde já, muito obrigado pela visita, e
                    que a força esteja com você!
                </p>
                <p class="py-6">
                    <a
                        href="https://github.com/Mizzzael"
                        class="md:text-lg bios.link text-sm text-palette-4 hover:text-palette-2 font-bold"
                        target="_blank"
                    >
                        <i class="fa fa-laptop"></i>
                        https://github.com/Mizzzael </a
                    ><br />
                    <a
                        href="https://www.linx.com.br/"
                        class="md:text-lg bios.link text-sm text-palette-4 hover:text-palette-2 font-bold"
                        target="_blank"
                    >
                        <i class="fa fa-building"></i>
                        Linx
                    </a>
                </p>
            </section>
        </section>
    </section>
</template>
<style scoped>
.bios\.link {
    transition: ease 220ms color;
}
</style>
