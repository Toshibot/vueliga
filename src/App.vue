<script setup lang="ts">
</script>

<template>
  <body id="Body" class="t-dark">
    <main class="o-main u-vert-center">
      <Matches :matchData="matchData" />
    </main>
  </body>
</template>

<style scoped lang="scss">

</style>
<script lang="ts">
import axios from 'axios'
import Matches from "./components/matches/Matches.vue"

export default {
  components: {
    Matches,
  },
  data() {
    return {
      clubData: [],
      tableData: [],
      matchData: []
    }
  },
  mounted() {
    // Club Data - Hosted
    axios.get('./data/data-teams.json')
      .then(response => {
        console.log(response.data);
        this.clubData = response.data;
      })
    axios.get('./data/table-data.json')
      .then(response => {
        console.log(response.data);
        this.tableData = response.data;
      })
    axios.get('./data/match-data.json')
      .then(response => {
        console.log(response.data);
        this.matchData = response.data.matches;
      })
  }
}
</script>
<style scoped lang="scss">

</style>

