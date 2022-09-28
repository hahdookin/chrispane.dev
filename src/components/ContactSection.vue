<template>
    <section id="contact">
        <div class="content">
            <!--<h1>Lorem ipsum.</h1>-->
            <!--<h3>Sub-title Lorem Ipsum</h3>-->
            <p>Feel free to shoot me an email with an opportunity, or just to say hi, and I'll try to get back to you as soon as possible.</p>
            <a :href="'mailto:' + contact.email">
                <EnvelopeSVG />
            </a>
        </div>
    </section>
</template>


<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import EnvelopeSVG from '@/components/EnvelopeSVG.vue';
import { contact } from '@/Lib';

@Options({
    components: {
        EnvelopeSVG,
    },
})
export default class ContactSection extends Vue {
    contact = contact;
}
</script>

<style lang="scss" scoped>
.content {
    /* padding: 100px 12rem; */
    margin: auto;
    padding: 3em 1em;
    width: 100%;
    @include media(sm, md, lg, xl) {
        width: 600px;
        padding: 6em 0;
    }
    display: flex;
    flex-direction: column;
    gap: 1em;
    a {
        width: fit-content;
        margin: auto;
    }
}

section {
    background-color: #f9f9f9;
    color: $bg;
    * {
        margin: 0;
    }
}


</style>
