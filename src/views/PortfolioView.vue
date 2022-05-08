<template>
    <ul class="carousel-indicator">
        <li :class="{ 'carousel-indicator-current': i === currentCarouselIndex }" 
            v-for="(c, i) in cards" 
            :key="i"
            @click="setCarouselCard(i)">
        </li>
    </ul>
    <font-awesome-icon icon="fa-solid fa-file-code" />
    <div v-for="(c, i) in currentCarouselCard()" :key="i" class="carousel-display">
        <h3>{{ c.title }}</h3>
        <p>{{ c.desc }}</p>
    </div>

    <!--<div class="card-holder">-->
        <!--<Card :data="card" v-for="(card, i) in cards" :key="i"/>-->
    <!--</div>-->
    <!--<div>-->
        <!--<CardInfo :data="card" v-for="(card, i) in cards" :key="i"/>-->
    <!--</div>-->
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import Card, { CardInterface } from '@/components/Card.vue';
import CardInfo from '@/components/CardInfo.vue';

@Options({
    components: {
        Card,
        CardInfo
    },
})
export default class PortfolioView extends Vue {
    cards: CardInterface[] = [];
    currentCarouselIndex = 0;
    carouselInterval = 0;
    runTestHeader = false;
    created() {
        this.cards.push({
            title: 'JESS Programming Language',
            imgsrc: 'src',
            desc: 'Recursive descent parser for a dynamically typed language'
        });
        this.cards.push({
            title: 'gamesense.vim',
            imgsrc: 'src',
            desc: '(N)Vim plugin for asynchronous SteelSeries GameSense interaction'
        });
        this.cards.push({
            title: 'Exam Central',
            imgsrc: 'src',
            desc: 'Web app for creating and taking exams'
        });
    }
    mounted() {
        this.carouselInterval = setInterval(this.nextCarouselCard, 5000);
        setTimeout(() => {
            this.runTestHeader = true;
        }, 1000);
    }
    currentCarouselCard(): CardInterface[] {
        return this.cards.filter((c, i) => i === this.currentCarouselIndex);
    }
    nextCarouselCard() {
        if (this.currentCarouselIndex === this.cards.length - 1) {
            this.currentCarouselIndex = 0;
        } else {
            this.currentCarouselIndex++;
        }
    }
    setCarouselCard(i: number) {
        this.currentCarouselIndex = i;
        clearInterval(this.carouselInterval);
        this.carouselInterval = setInterval(this.nextCarouselCard, 5000);
    }
}
</script>

<style scoped>
.card-holder {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-top: 10px;
    padding-bottom: 10px;
}
.carousel-indicator {
    padding-left: 0;
    display: flex;
    justify-content: center;
    gap: 10px;
}

.carousel-indicator li {
    display: inline-block;
    list-style-type: none;
    width: 35px;
    height: 8px;
    border: 2px solid black;
    border-radius: 4px;
    transition: background-color 0.3s linear;
}

.carousel-indicator-current {
    background-color: black;
}

.carousel-display {
    border: 2px solid black;
    border-radius: 4px;
    height: 300px;
    width: 80%;
    margin-bottom: 16px;
    margin-right: auto;
    margin-left: auto;
}

.fade-leave-from { opacity: 1; }
.fade-leave-active { transition: opacity 2s; }
.fade-leave-to { opacity: 0; }
.fade-enter-from { opacity: 0; }
.fade-enter-active { transition: opacity 2s; }
.fade-enter-to { opacity: 1; }
</style>
