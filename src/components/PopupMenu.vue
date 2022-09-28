<template>
    <div class="popup">
        <!-- When the popup is hovered, open with the CSS (no style bindings) -->
        <!-- When the icon is clicked, make menu visible via style binding -->
        <div @click="menuOpen = !menuOpen" :class="['icon', {'icon-toggled': menuOpen}]">
            <div class="bar bar1"></div>
            <div class="bar bar2"></div>
            <div class="bar bar3"></div>
        </div>
        <div :class="['popup-menu', {'popup-menu-visible': menuOpen}]">
            <div class="column">
                <span class="column-title">Docs/</span>
                <a target="_blank" :href="`${publicPath}Christopher_Pane_Resume.pdf`">Resume</a>
            </div>

            <div class="column">
                <span class="column-title">Links/</span>
                <a target="_blank" :href="socials['linkedin']">LinkedIn</a>
                <a target="_blank" :href="socials['github']">Github</a>
                <a target="_blank" :href="socials['twitter']">Twitter</a>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import { socials } from '@/Lib';

export default class PopupMenu extends Vue {
    socials = socials;
    menuOpen = false;
    publicPath = process.env.BASE_URL;
}
</script>


<style scoped lang="scss">
.icon {
    width: 2em;
    height: 2em;
    /* border: 1px solid green; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .bar {
        z-index: 1000;
        width: 100%;
        background-color: $comp-beige;
        border: 1px solid $comp-beige;
        border-radius: 10px;
        height: 15%;
        transition: transform .35s $ease-out-back;
    }
    cursor: pointer;
}

.icon-toggled {
        .bar1, .bar3 {
            transform: scale(0); 
        }
        .bar2 {
            height: 100%;
            border-radius: 100px;
            border: 2px solid $comp-beige;
            transform: scaleX(.75);
            background-color: transparent;
        }
}

/* Container that holds the popup menu and button that enables it */
.popup {
    position: relative;
    z-index: 1000;

    /* Icon or menu is hovered */
    /* If the device supports hover, allow hover to show the menu */
    @media (hover: hover) {
        &:hover {
            .popup-menu  {
                visibility: visible;
                opacity: 1;
                transform: scale(1);
            }
            .bar1, .bar3 {
                transform: scale(0); 
            }
            .bar2 {
                height: 100%;
                border-radius: 100px;
                transform: scaleX(.75);
            }
        }
    }
}
.popup-menu {
    position: absolute;
    width: 70vw;
    height: 60vh;
    font-size: $font-xl;

    box-shadow: 4px 2px 20px #000;


    @include media(sm, md, lg, xl) {
        width: 14em;
        height: initial;
        font-size: $font-md;
        justify-content: revert;
    }
    right: -10%;
    top: -10%;
    transform: scale(0.9);
    transform-origin: top right;
    
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 3.0em;
    padding: 2.5em 1.5em;
    /* justify-content: space-between; */

    opacity: 0;
    visibility: hidden;
    transition: opacity .2s $ease-out-back, 
                visibility .2s $ease-out-back, 
                transform .2s $ease-out-back;

    border-radius: 10px;
    background: $bg2;
    /* opacity: 1; */
    /* visibility: visible; */
    /* transform: scale(1); */

}
.popup-menu-visible {
    opacity: 1;
    visibility: visible;
    transform: scale(1);
}
.column {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1em;
}
.column-title {
    color: grey;
    letter-spacing: 1.1px;
    font-family: 'SF UI Text Light';
    font-size: $font-md;
}
</style>
