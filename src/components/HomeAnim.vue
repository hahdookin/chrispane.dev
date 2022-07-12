<template>
    <!--<div class="ball"></div>-->
    <div class="anim-container">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
</template>

<script>
import { Vue } from 'vue-class-component';
import { socials } from '@/Lib';

export default class HomeAnim extends Vue {
    socials = socials;
}
</script>

<style scoped lang="scss">
$google-ease: cubic-bezier(.82, .02, .19, .97);
$mag: 30px;
$width: 60px;
$height: 60px;
$gap: 3px;

.anim-container {
    margin: auto;
    display: flex;
    gap: $gap;
    flex-wrap: wrap;
    height: $height * 2 + $gap;
    width: $width * 2 + $gap;
    div {
        width: $width;
        height: $height;
        background-color: var(--fg);
        animation: r 1s $google-ease forwards;
        animation-iteration-count: infinite;
    }
}
@for $i from 1 through 4 {
    .anim-container > div {
        &:nth-child(#{$i}) {

        }
    }
}
@keyframes r {
    50% {  transform: rotateY(30deg);  }
    to { transform: rotateY(0deg); }
}
</style>
