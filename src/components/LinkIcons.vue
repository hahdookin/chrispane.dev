<template>
    <div>
        <a v-for="(v, k, i) in socials" 
           :key="i" 
           :href="v" 
           class="fade-in-anim"
           target="_blank">
           <font-awesome-icon :icon="['fab', k]" />
       </a>
    </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import { socials } from '@/Lib';

export default class LinkIcons extends Vue {
    socials = socials;
}
</script>

<style scoped lang="scss">
div {
    display: flex;
    justify-content: center;
    gap: 30px;
    @include media(xs) {
        flex-direction: column;
        font-size: 6vh;
    }
    @include media(sm) {
        font-size: 50px;
        flex-direction: row;
    }
    @include media(md) {
        font-size: 30px;
    }
}

a {
    color: $link-color;
    transition: all .1s linear;
    /* Move link up */
    &:hover {
        transform: translateY(-4px);
        transition: transform .1s linear;
    }
    /* Recolor link's icon */
    & > *:hover {
        color: $link-hover-color;
        transition: color .1s linear;
    }
    &:visited { color: $link-color; }
    &:active { color: $link-color; }
}

@include keyframes(fade-in) {
    from { opacity: 0; }
    to { opacity: 1; }
}

.fade-in-anim {
    opacity: 0;
    animation: fade-in 1s;
    animation-fill-mode: forwards;
    @for $i from 1 through 5 {
        &:nth-child(#{$i}) {
            animation-delay: #{500 + ($i - 1) * 200}ms;
        }
    }
}
</style>
