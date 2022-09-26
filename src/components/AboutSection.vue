<template>
    <section id="about">
        <!--<h1>About me.</h1>-->
        <div class="two-column">
            <div class="img-wrapper">
                <img id="headshot" :src="require('@/assets/headshot.jpg')" alt="Coco!" />
            </div>
            <div class="desc-wrapper">
                <h1>Hi there.</h1>
                <p>I'm a software developer and computer science student at NJIT. Hi, I'm Chris Pane, software developer and computer science student at NJIT.</p>
                <p>I'm a software engineer slowly finding a love and appreciation for technical art, as well as beginning to understand this concept of UI/UX.</p>
                <p>Hi, I'm Chris Pane, software developer and computer science student at NJIT. Hi, I'm Chris Pane, software developer and computer science student at NJIT.</p>
            </div>
        </div>
    </section>
</template>

<script lang="ts"> import { Options, Vue } from 'vue-class-component';

@Options({})
export default class AboutSection extends Vue {
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

section {
    @include media(sm) {
    }
    width: 60%;
    min-width: 900px;
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
    flex-direction: row-reverse;
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
    max-width: 50%;
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
        width: 330px;
        transition: transform .2s $ease-out-back;
        &:hover {
            transform: translate($border-offset-x / 8, $border-offset-y / 8);
        }
        &:active {
            transform: translate($border-offset-x / 4, $border-offset-y / 4);
        }
    }
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
    &::after {
        content: '';
        position: absolute;
        @include dotted-background(2px, 12px, $bg2, #333);
        left: -10%;
        top: -10%;
        width: 90%;
        height: 80%;
        z-index: 10;
    }
}

@keyframes scale-up {
    0% {
        transform: scale(0);
    }
    100% {
        transform: scale(1);
    }
}
.square-animation {
    animation: scale-up 1s $ease-out-back;
}

</style>
