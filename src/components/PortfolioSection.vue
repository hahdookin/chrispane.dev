<template>
    <section id="portfolio">

        <div class="header">
            <h1>My work.</h1>
            <div class="anim-wrapper">
                <CubestormSVG />
            </div>
        </div>

        <div class="main-deck">
            <div class="main-card" v-for="(e, i) in [1, 2, 3]" :key="i">
                <div class="image-wrapper"><img :src="require('@/assets/miniterm.gif')"></div>
                <div class="entry-wrapper">

                    <div class="upper">
                        <div>
                            <div class="title-line">
                                <h1>Main Title</h1>
                                <span>FEATURED</span>
                            </div>
                            <h3>SHORT DESC</h3>
                        </div>
                        <p>Short description of the software being shown in the showcase position. It looks sufficient.</p>
                    </div>

                    <ul>
                        <li>JavaScript</li>
                        <li>C++</li>
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
    imgURL: string;
    shortDesc: string;
}
@Options({
    components: {
        CubestormSVG,
    },
})
export default class PortfolioSection extends Vue {
    portfolio = portfolio;
    main_sellers = portfolio.slice(0, 3);
    /* created() { */

    /* } */
}
</script>

<style lang="scss" scoped>

@mixin low-text {
    color: grey;
    letter-spacing: 1.1px;
    font-family: 'SF UI Text Light';
    font-size: $font-md;
}

.main-deck {
    display: flex;
    flex-direction: column;
}

.main-card {
    /* @include card-mixin; */
    /* background-color: orange; */
    position: relative;
    border: 1px solid orange;
    width: 60%;
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
        box-shadow: 4px 4px 20px black;
        gap: 3em;
    }
    ul {
        display: flex;
        margin: 0;
        padding: 0;
        gap: 2em;
        li {
            list-style-type: none;
        }
    }
    .upper {
        /* Flexs title-line and short desc against long desc */
        display: flex;
        flex-direction: column;
        gap: 3em;
        .title-line {
            /* Flexes main title to featured */
            display: flex;
            justify-content: space-between;
            span {
                @include low-text;
            }
        }
        & > div { 
            /* Flexes title-line against short desc */
            display: flex;
            flex-direction: column;
            gap: .75em;
            h3 {
                @include low-text;
            }
        }
        p {
            font-family: 'SF UI Text Light';
            font-size: $font-md;
            line-height: 1.4;
        }
    }
}

.two-column {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    /* gap: 2.5em; */
    /* width: 90%; */
    margin: auto;
    padding: 2em 0;
    & > div {
        /* height: 100%; */
    }
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
