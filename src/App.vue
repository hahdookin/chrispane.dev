<template>
    <div class="container">
        <h1 class="name">
            <router-link class="text-link" to="/">Chris Pane</router-link>
        </h1>
        <NavBar />

        <router-view v-if="loadBody" v-slot="{ Component, route }">
            <Transition appear name="route" mode="out-in">
                <!--<div :class="['content', { 'home-content': route.name === 'home' }]" :key="route.name">-->
                <div class="content" :key="route.name">
                    <component :is="Component"></component>
                </div>
            </Transition>
        </router-view>

    </div>

    <Transition name="route" mode="out-in">
        <Footer v-show="curRoute !== 'home'" />
    </Transition>

</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Watch } from 'vue-property-decorator';
import NavBar from '@/components/NavBar.vue';
import BackgroundCanvas from '@/components/BackgroundCanvas.vue';
import Footer from '@/components/Footer.vue';

@Options({
    components: {
        NavBar,
        BackgroundCanvas,
        Footer,
    },
})
export default class App extends Vue {
    curRoute = "";
    // 2s + 500ms
    loadBody = true;
    created() {
        document.title = 'Chris Pane';
    }
    mounted() {
        setTimeout(() => {
            this.loadBody = true;
        }, 1500);
    }
    @Watch('$route', { immediate: true, deep: true })
    onUrlChange(newVal: any) {
        this.curRoute = newVal.name;
        console.log(this.curRoute);
    }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');
@import url('https://fonts.cdnfonts.com/css/sf-mono');
@import url('https://fonts.cdnfonts.com/css/sf-pro-display');


*, *::before, *::after {
    box-sizing: border-box;
}
/* Route transition */
.route-enter-from { opacity: 0; }
.route-enter-active { transition: all 0.3s; }
.route-enter-to { opacity: 1; }
.route-leave-active { transition: all 0.3s; }
.route-leave-to { opacity: 0; }

body { 
    margin: 0; 
    padding: 0; 
    background-color: $bg;
    /* @include xs { background: white; } */
    /* @include media(sm) { background: red; } */
    /* @include media(md) { background: pink; } */
    /* @include media(lg) { background: yellow; } */
    /* @include media(xl) { background: green; } */
} 

/* BG MAIN SUB */
/* #0d1821 #DCE9F4 #9FA9B3 */

#app {
    font-family: 'Lato', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: $fg;
    font-size: $font-lg;
}

/* Make link look like normal text */
.text-link {
    text-decoration: none;
    color: $fg;
}
.text-link:hover { }
.text-link:visited { }
.text-link:hover { }
.text-link:active { }

.container {
    position: relative;
    top: 14vh;
    /* top: 18vh; */
    /* left: 50vw; */
    margin-left: auto;
    margin-right: auto;
    -moz-transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    max-width: 600px;
}

.content {
    @include media(xs) { width: auto; }
    @include media(sm) { width: 80vw; }
    position: absolute;
    /* border: 4px solid var(--color4); */
    /* border-radius: 15px; */
    /* padding-left: 10px; */
    /* padding-right: 10px; */
    left: 50%;
    -moz-transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    width: 80vw;
    max-width: 800px;
    padding: 1em;
    margin-top: 1em;
    background-color: $content-bg;
    box-shadow: 3px 3px $link-color;
}

.home-content {
    background-color: inherit;
    box-shadow: 0 0;
}


/* Header styling */
.name {
    @include media(xs) {
        font-size: $font-header + 10;
    }
    margin: 0;
    font-size: $font-header;
    font-weight: bold;
    animation: header-slide-up 1.0s ease-out;
}

@include slide-up-anim(header-slide-up, 20px);

</style>
