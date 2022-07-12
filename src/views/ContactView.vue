<template>
  <div>
    <ul>
        <li><font-awesome-icon :icon="['fa', 'envelope']" /> <a :href="`mailto:${contact.email}`">{{ contact.email }}</a></li>
        <li><font-awesome-icon :icon="['fab', 'discord']" /> {{ contact.discord }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { contact } from '@/Lib';

export default class ContactView extends Vue {
    contact = contact;
}
</script>

<style scoped lang="scss">
a {
    text-decoration: none;
    color: inherit;
}
ul {
    list-style-type: none;
    padding: 10px 0;
    margin: 0;
}
li {
    animation: slide-up .5s ease-out forwards;
    opacity: 0;
    /* display: flex; */
    /* justify-content: space-between; */
    /* align-items: center; */
    /* width: 40%; */
    /* margin: auto; */
}
@for $i from 1 through 2 {
    li:nth-child(#{$i}) {
        animation-delay: #{($i - 1) * 200}ms;
    }
}
@keyframes slide-up {
    from { opacity: 0; transform: translateY(6px); }
    to { opacity: 1; transform: translateY(0); }
}
</style>
