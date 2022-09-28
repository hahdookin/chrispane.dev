<template>
    <header>
        <nav>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div class="popup-wrapper">
                <PopupMenu />
            </div>
        </nav>
    </header>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import PopupMenu from '@/components/PopupMenu.vue';

@Options({
    components: {
        PopupMenu,
    },
})
export default class NavBar extends Vue {
    /* name = ""; */
    /* publicPath = process.env.BASE_URL; */
    /* @Watch('$route', { immediate: true, deep: true }) */
    /* onUrlChange(newVal: any) { */
    /*     this.name = newVal.name; */
    /* } */
}
</script>

<style scoped lang="scss">
header {
    width: 100%;
    position: sticky;
    top: 0;
    right: 0;
    z-index: 1000;
    @include media(sm, md, lg, xl) {
        /* top: initial; */
        /* right: 0; */
        position: static;
    }
}
nav {
    display: flex;
    justify-content: right;
    align-items: center;
    margin: 0 1rem;
    @include media(sm, md, lg, xl) {
        justify-content: space-between;
        margin: 0 8rem;
    }
    .popup-wrapper {
        padding: 20px 0;
    }
    ul {
        padding: 0;
        display: none;
        @include media(sm, md, lg, xl) {
            display: flex;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            gap: 4em;
        }
        li {
            list-style-type: none;
            margin: 0;
            padding: 10px 0;
        }
    }
}
</style>
