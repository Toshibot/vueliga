<template>
  <span class="match-item-container" v-for="matchItem in matchData" :key="matchItem.id">
    <Match 
      :homeTeam="matchItem.homeTeam.name"
      :awayTeam="matchItem.awayTeam.name"
    />
  </span>
</template>
<script lang="ts">
import Match from './Match.vue'

  export default {
    components: {
      Match
    },
    props: {
      matchData: {
        type: Object
      },
      clubData: {
        type: Object
      }
    }

  }
</script>
