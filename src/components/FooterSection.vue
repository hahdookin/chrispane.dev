<template>
    <footer>
        <div class="footer-container">

            <div class="upper">
                <!-- TODO: Replace these with table tags -->
                <div>
                    <span>Contact Info</span>
                    <ul>
                        <li><a :href="`mailto:${contact.email}`">{{ contact.email }}</a></li>
                        <li>{{ contact.discord }}</li>
                    </ul>
                </div>

                <div>
                    <span>Docs</span>
                    <ul>
                        <li>
                            <a target="_blank" :href="`${publicPath}Christopher_Pane_Resume.pdf`">Resume</a>
                        </li>
                        <li><a target="_blank" href="/blog">Blog</a></li>
                    </ul>
                </div>
            </div>

            <div class="lower">
                <span>Christoper Pane</span>
                <ul>
                    <li><a target="_blank" :href="socials['github']"><font-awesome-icon :icon="['fab', 'github']" /></a></li>
                    <li><a target="_blank" :href="socials['linkedin']"><font-awesome-icon :icon="['fab', 'linkedin']" /></a></li>
                    <li><a target="_blank" :href="socials['twitter']"><font-awesome-icon :icon="['fab', 'twitter']" /></a></li>
                </ul>
            </div>

        </div>
    </footer>
</template>

* email
* linkedin
* github

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { socials, contact } from '@/Lib';

@Options({
    components: {},
})
export default class FooterSection extends Vue {
    socials = socials;
    contact = contact;
    publicPath = process.env.BASE_URL;
}
</script>

<style lang="scss" scoped>

footer {
    font-size: $font-sm;
    @include media(sm, md, lg, xl) {
        font-size: $font-md;
    }
    width: 100%;
    margin: auto;
    padding: 100px 0;
    background-color: $bg2;
}
li {
    list-style-type: none;
}

.footer-container {
    width: 80%;
    /* border: 1px solid red; */
    margin: auto;
    padding: 1em;
}
.lower {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid $fg;
    padding-top: 2.5em;
    ul {
        margin: 0;
        display: flex;
        padding: 0;
        gap: 2em;
        li {
            * {
                font-size: 20px;
            }
            list-style-type: none;
        }
    }
}

.upper {
    display: flex;
    gap: 10%;
    height: 20vh;
    & > div {
        display: flex;
        flex-direction: column;
        justify-content: start;
        gap: 20%;
        text-align: left;
        height: 100px;
        span {
            color: grey;
            letter-spacing: 1.1px;
            font-family: 'SF UI Text Light';
        }
        ul {
            display: flex;
            flex-direction: column;
            height: 50px;
            justify-content: space-between;
        }
    }
    ul {
        padding: 0;
        margin: 0;
    }
}

</style>
