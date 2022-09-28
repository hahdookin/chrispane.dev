<template>
    <NavBar />

    <IntroSection />

    <ArrowSVG />

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
import LoadingScreen from '@/components/LoadingScreen.vue';
import CubeSVG from '@/components/CubeSVG.vue';
import ArrowSVG from '@/components/ArrowSVG.vue';

import NavBar from '@/components/NavBar.vue';
import IntroSection from '@/components/IntroSection.vue';
import AboutSection from '@/components/AboutSection.vue';
import PortfolioSection from '@/components/PortfolioSection.vue';
import ContactSection from '@/components/ContactSection.vue';
import FooterSection from '@/components/FooterSection.vue';

@Options({
    components: {
        LoadingScreen,
        CubeSVG,
        ArrowSVG,

        NavBar,
        IntroSection,
        AboutSection,
        PortfolioSection,
        ContactSection,
        FooterSection,
    },
})
export default class App extends Vue {
    created() {
        document.title = 'Chris Pane';
    }
}
</script>

<style lang="scss">
/* If this block is empty, styles from "index.scss" are not loaded. */
.x { color: red; }
</style>
