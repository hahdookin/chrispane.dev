<template>
    <div class="card-holder">
        <div :class="['card', { 'padding-card': entry.title === '' }]" 
             v-for="(entry, i) in portfolio" 
             :key="i">

                <div>
                    <div class="card-top">
                        <font-awesome-icon :icon="['fas', 'file-lines']" />
                        <div class="card-links">

                            <a v-if="entry.demo !== null" class="icon-link" :href="entry.demo" target="_blank">
                                <font-awesome-icon :icon="['fab', 'cube']" />
                            </a>

                            <a class="icon-link" :href="entry.github" target="_blank">
                                <font-awesome-icon :icon="['fab', 'github']" />
                            </a>

                        </div>
                    </div>

                    <h3 class="card-title">
                        <a :href="entry.demo || entry.github" target="_blank">{{ entry.title }}</a>
                    </h3>
                    <p class="card-desc">{{ entry.desc }}</p>
                </div>

                <div>
                    <ul class="card-tech-list">
                       <li class="card-tech" v-for="(tech, i) in entry.technologies" :key="i">{{ tech }}</li>
                    </ul>
                </div>

        </div> <!-- Card -->
    </div> <!-- Holder -->
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import { PortfolioEntry, portfolio } from '@/Lib';

@Options({
    components: {},
})
export default class PortfolioView extends Vue {
    portfolio: PortfolioEntry[] = portfolio;
    created() {
        // Add a dummy card to allow nice flexbox behavior
        if (this.portfolio.length % 2 !== 0)
            this.portfolio.push({
                title: '',
                desc: '',
                github: '',
                demo: '',
                technologies: [],
            });
    }
}
</script>

<style scoped lang="scss">

.card-holder {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 10px;
}
.card {
    width: 40%;
    height: 200px;
    border-radius: 2px;
    padding: 1em;
    min-width: 240px;
    display: flex;
    flex-direction: column;
    text-align: left;
    justify-content: space-between;
    box-shadow: 3px 3px var(--link-color);
    background-color: var(--card-bg);
    transition: transform .2s ease-in-out;

    animation: fade-up .5s ease-out forwards;
    opacity: 0;
    @for $i from 0 through 2 {
        &:nth-child(#{$i * 2 + 1}), &:nth-child(#{$i * 2 + 2}) {
            animation-delay: #{200 + 200 * $i}ms;
        }
    }

    &:hover {
        transform: translateY(-6px);
    }
}
@keyframes fade-up {
    from { opacity: 0; }
    to { opacity: 1; }
}
.card-title {
    margin: 0px 0px 10px;
    font-size: var(--font-xl);
    * {
        transition: color 0.1s linear;
        &:hover {
            color: green;
        }
    }
}
.card-desc {
    /* margin: 0px 0px 10px; */
    margin: 0px 0px 0px;
    font-size: var(--font-sm);
}
.card-github { }
.card-demo { }

.card-top {
    display: flex; 
    justify-content: space-between;
    font-size: 30px;
    color: var(--link-color);
}
.card-links {
    display: flex;
    justify-content: end;
    gap: .5rem;
    width: 100%;
    margin-bottom: 10px;
    * {
        transition: color .1s linear;
        color: var(--link-color);
        &:hover {
            color: var(--link-hover-color);
        }
    }
}

.card-tech-list {
    padding: 0;
    margin: 0;
    gap: 1em;
    list-style-type: none;
    display: flex;
    font-family: 'SF Mono';
}
.card-tech {
    display: inline;
    color: var(--link-color);
    font-size: var(--font-sm);
}
.padding-card {
    opacity: 0;
}

a { 
    text-decoration: none; 
    color: inherit;
    &:visited {
        color: inherit; 
    }
}

/* Icons surrounded by anchor tags causes a bit of
   shifting in vertical alignment. This removes it. */
* {
    vertical-align: 0; 
}

.fade-leave-from { opacity: 1; }
.fade-leave-active { transition: opacity 2s; }
.fade-leave-to { opacity: 0; }
.fade-enter-from { opacity: 0; }
.fade-enter-active { transition: opacity 2s; }
.fade-enter-to { opacity: 1; }
</style>
