<template>
    <section id="portfolio">

        <div class="header">
            <h1>My work.</h1>
            <div class="anim-wrapper">
                <CubestormSVG />
            </div>
        </div>

        <div class="main-deck">
            <div :class="['main-card', {'main-card-flipped': i % 2 === 1}]" v-for="(e, i) in main_sellers" :key="i">
                <div class="image-wrapper"><a :href="e.entry.github"><img :src="e.imgURL"></a></div>
                <div class="entry-wrapper">

                    <div class="upper">
                        <div>
                            <div class="title-line">
                                <h1><a target="_blank" :href="e.entry.demo">{{ e.entry.title }}</a></h1>
                                <span>FEATURED</span>
                            </div>
                            <h3>{{ e.shortDesc }}</h3>
                        </div>
                        <p>{{ e.entry.desc }}</p>
                    </div>

                    <ul>
                        <li v-for="(tech, i) in e.entry.technologies" :key="i">{{ tech }}</li>
                        <!--<li>JavaScript</li>-->
                        <!--<li>C++</li>-->
                    </ul>

                </div>
            </div>
        </div>

    </section>
</template>


<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import CubestormSVG from '@/components/CubestormSVG.vue';
import { portfolio, PortfolioEntry } from '@/Lib';

interface MainPortfolioEntry {
    entry: PortfolioEntry;
    shortDesc: string;
    imgURL: string;
}
@Options({
    components: {
        CubestormSVG,
    },
})
export default class PortfolioSection extends Vue {
    portfolio = portfolio;
    main_sellers: MainPortfolioEntry[] = [];
    mounted() {
        this.main_sellers = [
            {
                entry: portfolio.find((e) => e.title === 'miniterm.vim') as PortfolioEntry,
                shortDesc: 'VIM PLUGIN',
                imgURL: require('@/assets/miniterm.gif'),
            },
            {
                entry: portfolio.find((e) => e.title === 'CG Museum') as PortfolioEntry,
                shortDesc: '3D GRAPHICS',
                imgURL: require('@/assets/miniterm.gif'),
            },
            {
                entry: portfolio.find((e) => e.title === 'chrispane.dev') as PortfolioEntry,
                shortDesc: 'WEB DEVELOPMENT',
                imgURL: require('@/assets/miniterm.gif'),
            },
        ];
    }
}
</script>

<style lang="scss" scoped>

$card-shadow: 4px 4px 20px black;

@mixin low-text {
    color: grey;
    letter-spacing: 1.1px;
    font-family: 'SF UI Text Light';
    font-size: $font-md;
}

section {
    max-width: 1200px;
    margin: auto;
}

.main-deck {
    display: flex;
    flex-direction: column;
    gap: 3em;
}

.main-card {
    /* @include card-mixin; */
    /* background-color: orange; */
    position: relative;
    /* border: 1px solid orange; */
    /* width: 80%; */
    margin: auto;
    padding: 1em 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    text-align: left;
    * {
        padding: 0;
        margin: 0;
    }
    & > div {
        width: 45%;
    }
    .image-wrapper {
        overflow: visible;
        width: 45%;
        height: 45%;
        img {
            box-shadow: $card-shadow;
            width: 40vw;
        }
    }
    .entry-wrapper {
        /* Flexes upper card with lower technologies */
        background-color: $bg2;
        padding: 1em;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        box-shadow: $card-shadow;
        gap: 3em;
    }
    ul {
        @include low-text;
        display: flex;
        margin: 0;
        padding: 0;
        gap: 2em;
        li {
            font-size: $font-sm;
            list-style-type: none;
        }
    }
    .upper {
        /* Flexs title-line and short desc against long desc */
        display: flex;
        flex-direction: column;
        gap: 2em;
        .title-line {
            /* Flexes main title to featured */
            display: flex;
            justify-content: space-between;
            span {
                @include low-text;
                color: $comp-blue;
                font-size: $font-sm;
            }
        }
        & > div { 
            /* Flexes title-line against short desc */
            display: flex;
            flex-direction: column;
            gap: .75em;
            h3 {
                @include low-text;
                font-size: $font-sm;
            }
        }
        p {
            font-family: 'SF UI Text Light';
            font-size: $font-md;
            line-height: 1.4;
        }
    }
}

.main-card-flipped {
    .image-wrapper {
        direction: rtl;
    }
    flex-direction: row-reverse;
}

.header {
    width: 600px;
    height: 400px;
    margin: auto;
    position: relative;
    /* border: 1px solid blue; */
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    h1 {
        font-family: 'SF UI Text Heavy';
        font-weight: 900;
        font-size: 104px;
        color: white;
        margin: 0;
        padding: 0;
        z-index: 1000;
    }
    .anim-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -5;
    }
}


</style>
