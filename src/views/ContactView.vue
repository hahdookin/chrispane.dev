<template>
  <div>
    <!--<p>Here is how to contact me.</p>-->
    <ul>
        <!--<li v-for="(v, k, i) in socials" :key="i">-->
            <!--{{ k }}: {{ v }}-->
        <!--</li>-->
        <li>email: <a href="mailto: ChrisPaneCS@gmail.com">ChrisPaneCS@gmail.com</a></li>
        <li>discord: Chris pane#9774</li>

    </ul>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

export default class ContactView extends Vue {
    socials = {
        'email': 'ChrisPaneCS@gmail.com',
        'discord': 'Chris pane#9774',
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
</style>
