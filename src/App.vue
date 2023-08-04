<script setup lang="ts">
</script>

<template>
  <body id="Body" class="t-dark">
    <main class="o-main u-vert-center">
      <Matches :data="compData" />
    </main>
  </body>
</template>

<style scoped lang="scss">

</style>
<script lang="ts">
import Matches from "./components/Matches.vue"

export default {
  components: {
    Matches,
  },
  data() {
    return {
      compData: {},
    }
  },
  methods: {
    async getData() {
      try {
        let response = fetch("https://api.football-data.org/v4/competitions", {
          mode: "no-cors",
          credentials: "include"
        });
        this.compData = await response.json;
      } catch (error) {
        console.log(error);
      }
    }
  },
  created() {
    this.getData();
  }
}
</script>
<style scoped lang="scss">

</style>

