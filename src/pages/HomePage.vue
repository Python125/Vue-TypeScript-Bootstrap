<template>
  <div class="home">
    <h1>Hello there</h1>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class HomeView extends Vue {}
</script>

<style lang="scss" scoped></style>