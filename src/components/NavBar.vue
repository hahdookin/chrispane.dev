<template>
    <header>
        <nav>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <ul>
                <li> 
                    <PopupMenu />
                </li>
            </ul>
            <!--<div v-show="!mainCubeVisible" style="position: fixed; top: 20px;">-->
                <!--<CubeSVG />-->
            <!--</div>-->
        </nav>
    </header>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import PopupMenu from '@/components/PopupMenu.vue';
/* import { Watch } from 'vue-property-decorator'; */

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
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 8rem;
    ul {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0;
        gap: 4em;
        li {
            list-style-type: none;
            margin: 0;
            padding: 10px 0;
        }
    }
}
</style>
