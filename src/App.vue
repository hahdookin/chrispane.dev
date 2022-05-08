<template>
    <!--<BackgroundCanvas />-->
    <div class="container">
        <h1 class="name">
            <router-link class="text-link" to="/">Chris Pane</router-link>
        </h1>
        <NavBar />

        <!--<router-view />-->
        <router-view v-if="loadBody" v-slot="{ Component, route }">
            <Transition appear name="route" mode="out-in">
                <div class="content" :key="route.name">
                    <component :is="Component"></component>
                </div>
            </Transition>
        </router-view>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import NavBar from '@/components/NavBar.vue';
import BackgroundCanvas from '@/components/BackgroundCanvas.vue';
import { tree } from '@/Lib';

@Options({
    components: {
        NavBar,
        BackgroundCanvas,
    },
})
export default class App extends Vue {
    // 2s + 500ms
    loadBody = false;
    created() {
        document.title = 'Chris Pane';
    }
    mounted() {
        tree.print();
        setTimeout(() => {
            this.loadBody = true;
        }, 1500);
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');

*, *::before, *::after {
    box-sizing: border-box;
}
body { 
    margin: 0; 
    padding: 0; 
    background-color: var(--bg);
} 

/* Route transition */
.route-enter-from { opacity: 0; }
.route-enter-active { transition: all 0.3s; }
.route-enter-to { opacity: 1; }
.route-leave-active { transition: all 0.3s; }
.route-leave-to { opacity: 0; }

:root {
    /* --bg: #FFFDDE; */
    /* --bg: #eee; */
    --bg: #fff;
    /* --bg: #0d1821; */
    /* --fg: #2c3e50; */
    /* --fg: #1E2022; */
    /* --fg: rgb(75, 76, 77); */
    --fg: #413d45;
    /* --fg: #DCE9F4; */
    --color1: #E9EFC0;
    --color2: #B4E197;
    --color3: #83BD75;
    --color4: #4E944F;
    /* --color4: #52616B; */
    /* --link-color: */ 
    /* --link-hover-color: */
}

/* BG MAIN SUB */
/* #0d1821 #DCE9F4 #9FA9B3 */

#app {
    font-family: 'Lato', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: var(--fg);
    font-size: 18px;
}

/* Make link look like normal text */
.text-link {
    text-decoration: none;
    color: var(--fg);
}
.text-link:hover { }
.text-link:visited { }
.text-link:hover { }
.text-link:active { }

/* .container { */
/*     position: fixed; */
/*     top: 20%; */
/*     left: 50%; */
/*     -moz-transform: translateX(-50%) translateY(-50%); */
/*     -webkit-transform: translateX(-50%) translateY(-50%); */
/*     transform: translateX(-50%) translateY(-50%); */
/* } */
.container {
    position: relative;
    top: 18vh;
    /* left: 50vw; */
    margin-left: auto;
    margin-right: auto;
    /* -moz-transform: translateX(-50%) translateY(-50%); */
    /* -webkit-transform: translateX(-50%) translateY(-50%); */
    /* transform: translateX(-50%) translateY(-50%); */
    -moz-transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    max-width: 600px;
}

.content {
    position: absolute;
    border: 4px solid var(--color4);
    border-radius: 15px;
    padding-left: 10px;
    padding-right: 10px;
    left: 50%;
    transform: translate(-50%, 0);
    width: 70vw;
    max-width: 800px;
}

/* Header styling */
.name {
    margin: 0;
    font-size: 48px;
    font-weight: bold;
    animation: header-slide-up 1.0s ease-out;
}

@keyframes header-fade-in {
    from { opacity: 0; }
}

@keyframes header-slide-up {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

</style>
