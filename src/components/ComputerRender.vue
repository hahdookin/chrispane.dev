<template>
    <div>
        <img id="computer" :src="require('@/assets/img/computer/computer.png')">
        <img id="monitor" :src="require('@/assets/img/computer/monitor.png')">
        <img id="keyboard" :src="require('@/assets/img/computer/keyboard.png')">
    </div>
</template>

<script>
import { Vue, Options } from 'vue-class-component';

@Options({
    components: {},
})
export default class ComputerRender extends Vue {}
</script>

<style scoped lang="scss">
$image-aspect-ratio: 5.5/6.6;

div {
    /* border: 1px solid cyan; */
    padding: 0;
    margin: 0;
    width: 200px;
    height: 150px;
    opacity: 1;
    @include media(sm, md, lg) {
        width: 40vw;
        height: 40vw * $image-aspect-ratio;
    }
    @include media(xl) {
        opacity: 1;
        width: 660px;
        height: 550px;
    }
    position: relative;

    transform: scaleX(-1);
}
img {
    position: absolute;
    width: inherit;
    left: 0;
    opacity: 0;
    animation: slide-down 1s ease;
    animation-fill-mode: forwards;
}

#computer {
    animation-delay: 200ms;
}
#monitor {
    animation-delay: 500ms;
}
#keyboard {
    animation-delay: 800ms;
}

@keyframes slide-down {
    from {
        opacity: 0;
        transform: translateY(-100px);
    }
    to {
        opacity: 1;
        transform: translateY(0px);

    }
}

</style>
