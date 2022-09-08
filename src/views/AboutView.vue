<template>
    <div class="about-me">
        <div class="about-me-desc">
            <p>Hi, I'm <span class="about-name">Chris Pane</span>, software developer and computer science student at NJIT.</p>
            <!--<p>I enjoy web-dev, full-stack, 3D modeling, game development, and iced coffee.</p>-->
            <p>I'm usually doing web-dev, game-dev, 3D modelling, or tweaking my <a target="_blank" :href="vimrc_url" class="text-link">vimrc</a>.</p>
        </div>
        <img width="330" :src="require('@/assets/cropped2.jpg')" alt="Coco!" />
    </div>
</template>

<script>
import { Options, Vue } from 'vue-class-component';

export default class AboutView extends Vue {
    vimrc_url = "https://github.com/hahdookin/ArchConfigs/blob/main/nvim/init.vim";
}
</script>

<style scoped lang="scss">
.about-me {
    display: flex;
    align-items: center;
    align-content: center;
    font-size: var(--font-xl);
    @media screen and (max-width: 600px) {
        flex-direction: column-reverse;
    }
    img {
        animation: slide-up .5s ease-out forwards;
        animation-delay: 0ms;
    }
}
.about-me-desc {
    padding: 1em;
    text-align: left;
    color: var(--sub-fg);
    @media screen and (max-width: 600px) {
        text-align: center;
    }
    p {
        opacity: 0;
        animation: slide-up .5s ease-out forwards;
        &:nth-child(1) {
            animation-delay: 200ms;
        }
        &:nth-child(2) {
            animation-delay: 400ms;
        }
    }
}
.about-name {
    color: var(--fg);
    font-weight: bold;
}

@keyframes slide-up {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}
</style>
