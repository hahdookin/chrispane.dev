<template>
    <section id="contact">
        <h1>Contact me.</h1>
        <!--<EnvelopeSVG />-->
        <form>
            <div class="first-row">
                <div class="input-group">
                    <label for="name">Name</label>
                    <input id="name" required placeholder="Your name">
                </div>
                <div class="input-group">
                    <label for="email">Email</label>
                    <input id="email" type="email" required placeholder="Your email">
                </div>
            </div>
            <div class="input-group second-row">
                <label for="message">Message</label>
                <textarea rows="3" id="message" required placeholder="Your message"></textarea>
            </div>
            <input type="submit">
        </form>
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

section {
    width: 100%;
    margin: auto;
    padding: 100px 12rem;
    /* margin-top: 60px auto; */
    background-color: #f9f9f9;
    color: $bg;
    h1 {
        margin: 0;
        margin-bottom: 30px;
        font-family: Merriweather;
        font-weight: 700;
        font-size: 60px;//104px;
    }
    form {
        /* border: 1px solid red; */
        width: 60%;
        margin: auto;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
}

.first-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .input-group {
        width: 45%;
    }
}

/* Consists of a label and an input */
.input-group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    label {
        font-family: 'SF UI Text Heavy';
    }
    input, textarea {
        background: transparent;
        border: none;
        width: 100%;
        padding: 0.6em;
        padding-left: 0;
        border-bottom: 1px solid $bg;
        &:focus {
            outline: none;
             &::placeholder {
                 color: transparent;
             }
        }
        resize: none;
    }
    textarea {
        height: 4.2em;
    }
}

.second-row {
    width: 100%;
}


</style>
