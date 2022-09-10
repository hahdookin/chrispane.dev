<template>
    <div class="footer">
        <LinkIcons />
    </div>
</template>

<script>
import { Vue, Options } from 'vue-class-component';
import LinkIcons from '@/components/LinkIcons.vue';

@Options({
    components: {
        LinkIcons
    },
})
export default class Footer extends Vue {}
</script>

<style scoped lang="scss">
.footer {
    @include media(xs) { visibility: hidden; }
    @include media(sm) { visibility: visible; }
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 20px;
    font-size: 30px;
}

</style>
