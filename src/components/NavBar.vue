<template>
    <ul>
        <li class="my-anim"><router-link :class="{ selected: name === 'about' }" to="about">About</router-link></li>
        <!--<li class="my-anim"><router-link :class="{ selected: name === 'links' }" to="links">Links</router-link></li>-->
        <li class="my-anim"><router-link :class="{ selected: name === 'contact' }" to="contact">Contact</router-link></li>
        <li class="my-anim"><router-link :class="{ selected: name === 'portfolio' }" to="portfolio">Portfolio</router-link></li>
        <li class="my-anim"><a class="resume" :href="`${publicPath}Christopher_Pane_Resume.pdf`" target="_blank"><span class="resume-link">Resume</span></a></li>
    </ul>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Watch } from 'vue-property-decorator';

export default class NavBar extends Vue {
    name = "";
    publicPath = process.env.BASE_URL;
    @Watch('$route', { immediate: true, deep: true })
    onUrlChange(newVal: any) {
        this.name = newVal.name;
    }
}
</script>

<style scoped lang="scss">

@keyframes navbar-slide-in {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
}

.my-anim {
    opacity: 0;
    animation: navbar-slide-in 1s;
    animation-fill-mode: forwards;
    @for $i from 1 through 4 {
        &:nth-child(#{$i}) { animation-delay: calc(500ms + #{200 * $i}ms); }
    }
}

ul {
    padding: 0;
    margin: 0;
    display: flex;
    gap: 10px;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin-top: 16px;
    margin-bottom: 16px;
}

li {
    display: inline-block;
    list-style-type: none;
    font-size: 18px;
}

a {
    @include underline-link($link-color, $link-hover-color);
}

.selected {
    color: $link-hover-color;
}
.resume:hover {
    color: $special-fg;
}
.resume-link::after {
    @include media(xs) { opacity: 0; }
    content: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3Csvg viewBox='0 0 512 512' fill='hwb(237deg 44% 36%)' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 234.5 5.709 C 248.4 0.738 263.6 0.738 277.5 5.709 L 469.5 74.28 C 494.1 83.38 512 107.5 512 134.6 L 512 377.4 C 512 404.5 494.1 428.6 469.5 437.7 L 277.5 506.3 C 263.6 511.3 248.4 511.3 234.5 506.3 L 42.47 437.7 C 17 428.6 0 404.5 0 377.4 L 0 134.6 C 0 107.5 17 83.38 42.47 74.28 L 234.5 5.709 Z M 82.34 128 L 256 190 L 82.34 128 Z M 32.666 391.913 L 237.386 465.86 L 238.164 226.891 L 33.445 153.723 L 32.666 391.913 Z M 276.246 466.347 L 480.965 393.179 L 480.187 154.21 L 275.467 228.157 L 276.246 466.347 Z M 466.543 116.316 L 252.758 38.947 L 42.027 116.316 L 254.795 192.668 L 466.543 116.316 Z'/%3E%3C/svg%3E%0A");
    margin-left: .5em;
    position: absolute;
    display: inline-block;
    width: $font-xl;
}
</style>
