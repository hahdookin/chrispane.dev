<template>
    <section id="portfolio">

        <div class="header">
            <CubestormSVG />
            <h1>My <br>work.</h1>
        </div>

        <div class="main-deck">
            <div :class="['main-card', {'main-card-flipped': i % 2 === 1}]" v-for="(e, i) in main_sellers" :key="i">
                <div class="image-wrapper"><a target="_blank" :href="e.entry.github"><img :src="e.imgURL"></a></div>

                <div class="entry-wrapper">
                    <div class="upper">
                        <div>
                            <div class="title-line">
                                <h1><a target="_blank" :href="e.entry.demo">{{ e.entry.title }}</a></h1>
                                <span>FEATURED</span>
                            </div>
                            <h3>{{ e.genre }}</h3>
                        </div>
                        <p>{{ e.entry.desc }}</p>
                    </div>

                    <ul>
                        <li v-for="(tech, i) in e.entry.technologies" :key="i">{{ tech }}</li>
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
    genre: string;
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
                genre: 'VIM PLUGIN',
                imgURL: require('@/assets/img/portfolio/miniterm.gif'),
            },
            {
                entry: portfolio.find((e) => e.title === 'CG Museum') as PortfolioEntry,
                genre: '3D GRAPHICS',
                imgURL: require('@/assets/img/portfolio/cgmuseum.png'),
            },
            {
                entry: portfolio.find((e) => e.title === 'JESS REPL') as PortfolioEntry,
                genre: 'WEB DEVELOPMENT',
                imgURL: require('@/assets/img/portfolio/jessrepl.png'),
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

.main-deck {
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 3em;
    padding-bottom: 3em;
}

.main-card {
    position: relative;
    padding: 1em 0;
    display: flex;
    flex-direction: column;
    @include media(sm, md, lg, xl) {
        flex-direction: row;
    }
    justify-content: center;
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
        width: 100%;
        height: 45%;
        @include media(sm, md, lg, xl) {
            width: 45%;
        }
        img {
            box-shadow: $card-shadow;
            width: 100%;
            @include media(sm, md, lg, xl) {
                width: 40vw;
                min-width: 600px;
            }
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
        width: 100%;
        min-width: initial;
        z-index: 100;
        @include media(sm, md, lg, xl) {
            width: 30vw;
            min-width: 400px;
        }
    }
    ul {
        @include low-text;
        display: flex;
        margin: 0;
        padding: 0;
        gap: 1em;
        @include media(sm, md, lg, xl) {
            gap: 2em;
        }
        li {
            font-size: $font-xxs;
            @include media(sm, md, lg, xl) {
                font-size: $font-sm;
            }
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
    direction: ltr;
    flex-direction: column;
    @include media(sm, md, lg, xl) {
        .image-wrapper {
            direction: rtl;
        }
        flex-direction: row-reverse;
    }
}

.header {
    padding-top: 1em;
    width: 100%;
    @include media(sm, md, lg, xl) {
        width: 600px;
    }
    margin: auto;
    position: relative;
    h1 {
        font-family: 'SF UI Text Heavy';
        font-size: 20vw;
        @include media(sm, md, lg, xl) {
            font-size: 104px;
        }
        color: white;
        
        /* Center text over cube storm */
        position: absolute;
        margin: 0;
        padding: 0;
        z-index: 100;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}



</style>
