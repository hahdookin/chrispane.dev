<template>
    <LinkIcons />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HomeAnim from '@/components/HomeAnim.vue';
import LinkIcons from '@/components/LinkIcons.vue';

@Options({
    components: {
        HomeAnim,
        LinkIcons
    },
})
export default class HomeView extends Vue {}
</script>

<style scoped>
</style>
