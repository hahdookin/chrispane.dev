<template>
    <div :class="['card-info', {hide: !show}]">
        <p>{{ data.title }}</p>
        <button @click="$emit('close-card')">Close</button>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { PropType } from 'vue';
import { CardInterface } from '@/components/Card.vue';

@Options({
    props: {
        data: Object as PropType<CardInterface>,
        show: Boolean,
    }
})
export default class CardInfo extends Vue {
    /* onCloseButton() { */
    /* } */
}
</script>

<style scoped>
.card-info {
    border: 1px solid blue;
    position: fixed;
    top: 5%;
    left: 5%;
    width: 90%;
    height: 90%;
    background-color: grey;
    /* display: none; */
    z-index: 1;
}

.hide {
    display: none;
}
</style>
