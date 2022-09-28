<template>
    <section id="about">
        <div class="two-column">
            <div class="img-wrapper">
                <img id="headshot" :src="require('@/assets/img/headshot.jpg')" alt="Coco!" />
            </div>
            <div class="desc-wrapper">
                <h1>Hi there.</h1>
                <p>I began programming in the Fall of 2019 and instantly fell in love. Since then, I've been always trying to get better and learn new technologies.</p>
                <p>Currently, I'm finishing my final semester at NJIT. I have the opprotunity to work with companies and peers to make great software.</p>
                <p>My current interests are full-stack web-dev, game-dev, UI/UX, 3D modelling, and computer graphics. But I'm usually just tweaking my <a target="_blank" :href="vimrc_url">vimrc</a>.</p>
            </div>
        </div>
    </section>
</template>

<script lang="ts"> import { Options, Vue } from 'vue-class-component';

@Options({})
export default class AboutSection extends Vue {
    vimrc_url = "https://github.com/hahdookin/ArchConfigs/blob/main/nvim/init.vim";
    mounted() {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('square-animation')
                }
            })
        });
        observer.observe(document.getElementById('headshot') as Element);
    }
}
</script>

<style lang="scss" scoped>

a {
    @include inline-link;
}

section {
    width: 90%;
    @include media(sm, md, lg, xl) {
        width: 60%;
        min-width: 900px;
    }
    /* margin: auto; */
    @include card-mixin;
    padding: 30px 0;
    margin: 60px auto 0;
    h1 {
        margin: 0;
        margin-bottom: 30px;
        font-family: Merriweather;
        font-weight: 700;
        font-size: 60px;//104px;
    }
    z-index: -100;
}

.two-column {
    display: flex;
    flex-direction: column;
    @include media(sm, md, lg, xl) {
        flex-direction: row-reverse;
    }
    justify-content: center;
    align-items: center;
    gap: 2.5em;
    width: 90%;
    margin: auto;
    padding: 2em 0;
}

.desc-wrapper {
    h1 {
        font-family: 'SF UI Text Regular';
        font-size: 3em;
        margin: 0;
    }
    text-align: left;
    /* border: 1px solid coral; */
    font-family: 'SF UI Text Light';
    font-size: $font-md;
    line-height: 1.4;

    padding: 0 1em;
    @include media(sm, md, lg, xl) {
        padding: 0;
        max-width: 50%;
    }
}

$border-offset-x: 8%;
$border-offset-y: 5%;
.img-wrapper {
    position: relative;
    width: max-content;
    margin: 0;
    img {
        position: relative;
        z-index: 100;
        width: 60vw;
        @include media(sm, md, lg, xl) {
            width: 330px;
        }
        transition: transform .2s $ease-out-back;
        &:hover {
            transform: translate($border-offset-x / 8, $border-offset-y / 8);
        }
        &:active {
            transform: translate($border-offset-x / 4, $border-offset-y / 4);
        }
    }
    /* Img square border */
    &::before {
        content: '';
        position: absolute;
        border: 2px solid $fg;
        left: 10%;
        top: 10%;
        right: -1 * $border-offset-x;
        bottom: -1 * $border-offset-y;
        z-index: 0;
    }
    /* Img dotted bg */
    &::after {
        content: '';
        position: absolute;
        @include dotted-background(2px, 12px, $bg2, #333);
        left: -10%;
        top: -10%;
        height: 80%;
        z-index: 10;
        width: 90%;
    }
}

@keyframes scale-up {
    0% {
        transform: scale(0.7);
    }
    100% {
        transform: scale(1);
    }
}
.square-animation {
    animation: scale-up 1s $ease-out-back;
}

</style>
