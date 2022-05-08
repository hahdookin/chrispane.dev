<template>
  <div class="about">
    <!--<p>Here are some of my links.</p>-->
    <ul>
        <li v-for="(v, k, i) in socials" :key="i">
            <a :href="v" target="_blank">{{ k }}</a>
        </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

export default class LinksView extends Vue {
    socials = {
        'github': 'https://github.com/hahdookin',
        'twitter': 'https://twitter.com/chrispane_',
        'youtube': 'https://www.youtube.com/channel/UCkpkIHMJ2c3eTPzlzdC7E3A?app=desktop',
        'tiktok': 'https://www.tiktok.com/@chrispane100000'
    };
}
</script>

<style scoped>
ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    padding-top: 10px;
    padding-bottom: 10px;
}
li {
    padding-top: 2.5px;
    padding-bottom: 2.5px;
}
</style>
