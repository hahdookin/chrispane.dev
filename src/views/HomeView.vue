<template>
    <!--<LinkIcons />-->
    <div class="splash">
        <ComputerRender />
        <div>
            <h1>Hi. I'm Chris.</h1>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import ComputerRender from '@/components/ComputerRender.vue';

@Options({
    components: {
        ComputerRender
    },
})
export default class HomeView extends Vue {}
</script>

<style scoped lang="scss">
h1 {
    font-family: serif;
}
.splash {
    display: flex;
    justify-content: space-evenly;
}
</style>
