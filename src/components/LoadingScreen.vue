<template>
    <div :class="{ loader: true, fadeout: finished }">
    </div>
</template>

<script>
import { Vue, Options } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Options({
    components: {}
})
export default class ComputerRender extends Vue {
    @Prop({ default: true }) 
    finished;
}
</script>

<style scoped lang="scss">
.loader {
    background-color: white;
    display: block;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
}
.fadeout {
    animation: pull-down 1s ease;
    animation-fill-mode: forwards;
}

@keyframes pull-down {
    to {
        opacity: 0;
        visibility: hidden;
    }
}
</style>
