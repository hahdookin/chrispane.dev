<template>
<span></span>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import NavBar from '@/components/NavBar.vue'

@Options({
  components: {
    NavBar
  },
})
export default class HomeView extends Vue {
    content = "Hello there!";
}
</script>

<style scoped>
</style>
