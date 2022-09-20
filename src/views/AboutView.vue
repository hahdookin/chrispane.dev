<template>
    <div class="about-me">
        <div class="about-me-desc">
            <p>Hi, I'm <span class="about-name">Chris Pane</span>, software developer and computer science student at NJIT.</p>
            <!--<p>I enjoy web-dev, full-stack, 3D modeling, game development, and iced coffee.</p>-->
            <p>I'm usually doing web-dev, game-dev, 3D modelling, or tweaking my <a target="_blank" :href="vimrc_url" class="text-link">vimrc</a>.</p>
        </div>
        <img width="330" :src="require('@/assets/headshot.jpg')" alt="Coco!" />
    </div>
</template>

<script>
import { Options, Vue } from 'vue-class-component';

export default class AboutView extends Vue {
    vimrc_url = "https://github.com/hahdookin/ArchConfigs/blob/main/nvim/init.vim";
}
</script>

<style scoped lang="scss">
/* @include keyframes(slide-up) { */
/*     from { opacity: 0; transform: translateY(20px); } */
/*     to { opacity: 1; transform: translateY(0px); } */
/* } */
@include slide-up-anim(slide-up, 20px)
.text-link {
    @include underline-link($link-hover-color, $special-fg);
}
.about-me {
    display: flex;
    align-items: center;
    align-content: center;
    font-size: $font-xl;
    @include media(xs, sm) { flex-direction: column-reverse; }
    @include media(md) { flex-direction: row; }
    img {
        @include media(xs, sm) { width: 60vw; }
        @include media(md) { width: 330px; }
        animation: slide-up .5s ease-out forwards;
        animation-delay: 0ms;
    }
}
.about-me-desc {
    padding: 1em;
    text-align: left;
    color: $sub-fg;
    /* @media screen and (max-width: 600px) { */
    /*     text-align: center; */
    /* } */
    @include media(xs) { 
        text-align: center; 
        font-size: $font-md;
    }
    p {
        opacity: 0;
        animation: slide-up .5s ease-out forwards;
        @for $i from 1 through 2 {
            &:nth-child(#{$i}) {
                animation-delay: #{$i * 200}ms;
            }
        }
    }

}
.about-name {
    color: $fg;
    font-weight: bold;
}
</style>
