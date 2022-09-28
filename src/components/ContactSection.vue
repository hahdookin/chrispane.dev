<template>
    <section id="contact">
        <div class="content">
            <!--<h1>Lorem ipsum.</h1>-->
            <!--<h3>Sub-title Lorem Ipsum</h3>-->
            <p>Feel free to shoot me an email with an opportunity, or just to say hi.</p>
            <!--<EnvelopeSVG />-->
        </div>
    </section>
</template>


<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import EnvelopeSVG from '@/components/EnvelopeSVG.vue';

@Options({
    components: {
        EnvelopeSVG,
    },
})
export default class ContactSection extends Vue {}
</script>

<style lang="scss" scoped>

.content {
    /* padding: 100px 12rem; */
    padding: 3em 0;
    margin: auto;
    width: 100%;
    @include media(sm, md, lg, xl) {
        width: 600px;

    }
}

section {
    width: 100%;
    margin: auto;
    /* margin-top: 60px auto; */
    background-color: #f9f9f9;
    color: $bg;
    * {
        margin: 0;
    }
    h1 {
        margin: 0;
        font-family: Merriweather;
        font-weight: 700;
        font-size: 3em;
    }
    h3 {
        font-family: 'SF UI Text Light';
    }
}


</style>
