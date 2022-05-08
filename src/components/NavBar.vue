<template>
    <ul>
        <li class="my-anim"><router-link :class="{ selected: name !== 'about' }" to="about">About</router-link></li>
        <li class="my-anim"><router-link :class="{ selected: name !== 'links' }" to="links">Links</router-link></li>
        <li class="my-anim"><router-link :class="{ selected: name !== 'contact' }" to="contact">Contact</router-link></li>
        <li class="my-anim"><router-link :class="{ selected: name !== 'portfolio' }" to="portfolio">Portfolio</router-link></li>
    </ul>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Watch } from 'vue-property-decorator';

export default class NavBar extends Vue {
    name = "";
    @Watch('$route', { immediate: true, deep: true })
    onUrlChange(newVal: any) {
        this.name = newVal.name;
    }
}
</script>

<style scoped>

@keyframes navbar-slide-in {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
}

.my-anim {
    opacity: 0;
    animation: navbar-slide-in 1s;
    animation-fill-mode: forwards;
}
.my-anim:nth-child(1) { animation-delay: calc(500ms + 100ms); }
.my-anim:nth-child(2) { animation-delay: calc(500ms + 300ms); }
.my-anim:nth-child(3) { animation-delay: calc(500ms + 500ms); }
.my-anim:nth-child(4) { animation-delay: calc(500ms + 700ms); }

ul {
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin-top: 16px;
    margin-bottom: 16px;
}

li {
    display: inline-block;
    list-style-type: none;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 18px;
}

a {
    text-decoration: none;
    color: #333;
}
a:hover {
    color: var(--fg);
}
a:visited { }
a:active { }

.selected {
    color: #777;
}
</style>
