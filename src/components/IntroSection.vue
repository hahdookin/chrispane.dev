<template>
    <section class="intro-section">
        <div class="intro-header">
            <div class="desc-wrapper">
                <div class="headers">
                    <h3>Hi, I'm Chris Pane,</h3>
                    <h1>Software <br>Developer.</h1>
                </div>
                <p>I'm a full-stack developer @ <a target="_blank" :href="iesmach">WellStat</a> and working in 3D web development.</p>
            </div>
        </div>
        <div class="render-wrapper">
            <ComputerRender />
        </div>
    </section>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import ComputerRender from '@/components/ComputerRender.vue';
import CubeSVG from '@/components/CubeSVG.vue';

import { socials } from '@/Lib';

@Options({
    components: {
        ComputerRender,
        CubeSVG,
    },
})
export default class App extends Vue {
    curRoute = "";
    github = socials.github;
    iesmach = "https://wellstat.io";
    njit = "https://njit.edu";
    mainCubeVisible = false;
}
</script>

<style lang="scss" scoped>

a {
    @include inline-link;
}

$dot-size: 2px;
$dot-spacing: 12px;
$dot-first-color: $bg;
$dot-second-color: #333;
.render-wrapper {
    display: none;
    @include media(sm, md, lg, xl) {
        display: initial;
    }
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


.intro-section {
    width: 90%;
    margin: auto;
    padding: 30px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    gap: 0px;
    flex-direction: column-reverse;
    height: 60vh;
    @include media(sm, md, lg) {
        gap: 0px;
        height: initial;
        padding: 60px 0;
        flex-direction: row;
    }
    @include media(xl) {
        height: initial;
        padding: 60px 0;
        flex-direction: row;
        gap: 20px;
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
            .headers {
                h3 {
                    margin: 0; 
                    margin-bottom: 0.5em;
                    font-family: 'SF UI Text Light';
                    font-size: $font-lg;
                    letter-spacing: 1.1px;
                }
            }
        }
        h1 {
            font-family: 'Roboto Slab', serif;
            font-weight: 700;
            font-size: 14vw;
            @include media(sm, md, lg) {
                font-size: 6vw;
            }
            /* @include media(sm, md, lg, xl) { */
            @include media(xl) {
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
        h3 {
            opacity: 0;
            animation: slide-left .3s ease;
            animation-delay: 1100ms;
            animation-fill-mode: forwards;
        }
        p {
            font-family: 'SF UI Text Regular';
            font-size: 20px;
            text-align: left;
            letter-spacing: 0.025em;
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
</style>
