<template>
  <div @mouseenter="onMouseEnter" 
       @mouseleave="onMouseLeave" 
       @click="onClick"
       :class="[hovered ? 'hovered' : '', 'card-container']">
      <h3 style="height: 50px;">{{ data.title }}</h3>
      <img src="@/assets/logo.png">
      <p>{{ data.desc }}</p>
  </div>
  <CardInfo @close-card="showCardInfo = false" :data="data" :show="showCardInfo"/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { PropType } from 'vue';
import CardInfo from '@/components/CardInfo.vue';

export interface CardInterface {
    title: string;
    imgsrc: string;
    desc: string;
    /* github: string; */
    /* demo: string; */
}

@Options({
    props: {
        data: Object as PropType<CardInterface>
    },
    components: {
        CardInfo
    }
})
export default class Card extends Vue {
    hovered = false;
    clicked = false;
    showCardInfo = false;
    onMouseEnter() {
        this.hovered = true;
        /* this.showCardInfo = true; */
    }
    onMouseLeave() {
        this.hovered = false;
        /* this.showCardInfo = false; */
    }
    onClick() {
        this.showCardInfo = true;
    }
}
</script>

<style scoped>
.card-container {
    border: 2px solid #777;
    border-radius: 10px;
    background-color: #FFFDDE;
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    /* filter: drop-shadow(6px 6px 10px grey); */
}

.hovered {
    background-color: #777;
}

.clicked {
    background-color: #333;
}
</style>
