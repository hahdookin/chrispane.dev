<template>
    <!--<LoadingScreen :finished="loadingScreenFinished" />-->

    <NavBar />

    <!-- TODO: Move to a IntroSection.vue -->
    <section class="intro-section">
        <div class="intro-header">
            <!--<div class="svg-wrapper">-->
                <!--<CubeSVG id="mainCube" />-->
            <!--</div>-->
            <div class="desc-wrapper">
                <h1>Software Developer.</h1>
                <p>This is the text that will be occupying the sub-title section. Some more text will justify this.</p>
            </div>
        </div>
        <div class="render-wrapper">
            <ComputerRender />
            <!--<div class="screen-wrapper">-->
            <!--</div>-->
        </div>
    </section>

    <div class="arrow-wrapper">
        <ArrowSVG/>
    </div>
    <AboutSection />

    <PortfolioSection />

    <ContactSection />

    <FooterSection />
</template>

* Navbar 
* Intro
* About
* Portfolio
* Contact
* Footer

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
/* import { Watch } from 'vue-property-decorator'; */
import ComputerRender from '@/components/ComputerRender.vue';
import LoadingScreen from '@/components/LoadingScreen.vue';
import AboutSection from '@/components/AboutSection.vue';
import CubeSVG from '@/components/CubeSVG.vue';
import ArrowSVG from '@/components/ArrowSVG.vue';
import ContactSection from '@/components/ContactSection.vue';
import FooterSection from '@/components/FooterSection.vue';
import NavBar from '@/components/NavBar.vue';
import CubestormSVG from '@/components/CubestormSVG.vue';
import PortfolioSection from '@/components/PortfolioSection.vue';

@Options({
    components: {
        ComputerRender,
        LoadingScreen,
        AboutSection,
        ContactSection,
        CubeSVG,
        ArrowSVG,
        FooterSection,
        NavBar,
        CubestormSVG,
        PortfolioSection,
    },
})
export default class App extends Vue {
    curRoute = "";
    // 2s + 500ms
    loadingScreenFinished = false;
    mainCubeVisible = false;
    created() {
        document.title = 'Chris Pane';
    }
    mounted() {
        setTimeout(() => {
            this.loadingScreenFinished = true;
        }, 1500);
        addEventListener('keydown', e => {
            if (e.key === " ") {
                location.reload();
            }
        });
        /* const observer = new IntersectionObserver(entries => { */
        /*     entries.forEach(entry => { */
        /*         if (entry.isIntersecting) { */
        /*             entry.target.classList.add('square-animation') */
        /*         } */
        /*     }) */
        /* }); */
        /* observer.observe(document.getElementById('headshot') as Element); */

        const mainCubeObserver = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.mainCubeVisible = true;
                    } else {
                        this.mainCubeVisible = false;
                    }
                })
        });
        mainCubeObserver.observe(document.getElementById('mainCube') as Element);
    }
    /* @Watch('$route', { immediate: true, deep: true }) */
    /* onUrlChange(newVal: any) { */
    /*     this.curRoute = newVal.name; */
    /*     console.log(this.curRoute); */
    /* } */
}
</script>

<style lang="scss">
/* @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap'); */
/* @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap'); */
/* @import url('https://fonts.cdnfonts.com/css/sf-mono'); */
/* @import url('https://fonts.cdnfonts.com/css/sf-pro-display'); */

body {
    font-family: 'SF UI Text Regular';
    font-weight: 500;
    color: $fg;
    font-size: $font-lg;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;

    margin: 0; 
    padding: 0; 
    background-color: $bg;
}

$dot-size: 2px;
$dot-spacing: 12px;
$dot-first-color: $bg;
$dot-second-color: #333;
.render-wrapper {
    position: relative;
    &::before {
        content: '';
        position: absolute;
        opacity: 0;
        @include dotted-background(2px, 12px, $bg, $bg3);
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        @include media(sm, md, lg, xl) {
            left: initial;
            right: -5%;
            width: 90%;
            height: 80%;
        }
        z-index: -10;
        animation: slide-left 1s ease;
        animation-delay: 1s;
        animation-fill-mode: forwards;
    }
}

/* .screen-wrapper { */
/*     position: absolute; */
/*     background-color: red; */
/*     width: 260px; */
/*     height: 180px; */
/*     top: 18.8%; */
/*     left: 29.5%; */
/*     transform: rotateX(-17deg) rotateY(45deg); */
/* } */

.intro-section {
    width: 90%;
    margin: auto;
    padding: 30px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex-direction: column-reverse;
    height: 60vh;
    @include media(sm, md, lg, xl) {
        height: initial;
        padding: 60px 0;
        flex-direction: row;
    }
    .intro-header {
        width: 100%;
        @include media(sm, md, lg, xl) {
            width: 540px;
            display: flex;
        }
        flex-direction: column;
        gap: 1em;
        justify-content: center;
        text-align: left;
        height: inherit;
        @include media(sm, md, lg, xl) {
            height: 300px;
        }
        & > * {
            margin: 0;
            padding: 0;
        }
        .desc-wrapper {
            width: fit-content;
            margin: 0;
            padding: 0;
            padding-left: 2em;
            display: flex;
            flex-direction: column;
            gap: 2em;
            h1 {
                line-height: 1.1;
                margin: 0;
            }
        }
        h1 {
            font-family: 'Roboto Slab', serif;
            font-weight: 700;
            font-size: 2.0em;
            @include media(sm, md, lg, xl) {
                font-size: 5.0em;
            }
            /* font-size: 80px; */
            color: $fg;
            /* @include text-color-gradient(linear-gradient(to right, #d5d1bf 40%, #20c4db)); */
            /* @include text-color-gradient(linear-gradient(to right, #a0e9ff 30%, #a162e8 50%, #f093b0 70%, #edca85 94%)); */
            @include text-color-gradient(linear-gradient(to right, $comp-blue, $comp-beige 50%));
            /* filter: drop-shadow(3px 3px 3px #111); */
            opacity: 0;
            animation: slide-left .3s ease;
            animation-delay: 1300ms;
            animation-fill-mode: forwards;
            letter-spacing: 1.1px;
        }
        p {
            /* font-family: 'Quicksand'; */
            color: $fg;
            font-family: 'SF UI Text Regular';
            font-size: 20px;
            text-align: left;
            /* letter-spacing: 0.05em; */
            line-height: 1.6;
            width: 90%;
            margin: 0;
            opacity: 0;
            animation: slide-left .3s ease;
            animation-delay: 1500ms;
            animation-fill-mode: forwards;
        }
        position: relative;
        .svg-wrapper {
            position: absolute;
            left: 50%;
            top: 0;
            transform: translate(-50%, -100%);
        }
    }
}

@include slide-side-anim(slide-left, 20px);

a {
    text-decoration: none;
    color: $fg;

    &:visited { text-decoration: none; }
    &:selected { text-decoration: none; }
    &:hover {
        color: $comp-blue;
    }
    transition: color .2s ease;
}

/* .arrow-wrapper { */
    /* animation: up-and-down 2s linear infinite; */
/* } */
/* $bounce-amount: 6px; */
/* @keyframes up-and-down { */
/*     0% { */
/*         transform: translateY(0px); */
/*     } */
/*     25% { */
/*         transform: translateY(-1 * $bounce-amount); */
/*     } */
/*     75% { */
/*         transform: translateY($bounce-amount); */
/*     } */
/*     100% { */
/*         transform: translateY(0px); */
/*     } */
/* } */


</style>
