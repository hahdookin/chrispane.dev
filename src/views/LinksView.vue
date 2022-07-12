<template>
  <div class="about">
    <ul>
        <li v-for="(v, k, i) in socials" :key="i">
            <a :href="v" target="_blank">{{ k }}</a>
        </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { socials } from '@/Lib';

export default class LinksView extends Vue {
    socials = socials;
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
