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
    font-size: 30px;
}

a {
    color: var(--link-color);
    transition: all .1s linear;
    /* Move link up */
    &:hover {
        transform: translateY(-4px);
        transition: transform .1s linear;
    }
    /* Recolor link's icon */
    & > *:hover {
        color: var(--link-hover-color);
        transition: color .1s linear;
    }
    &:visited { color: var(--link-color); }
    &:active { color: var(--link-color); }
}

@keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes slide-down {
    from { opacity: 1; transform: translateY(0); }
    to { opacity: 0; transform: translateY(6px); }
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
