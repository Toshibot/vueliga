<template>
  <span class="match-item-container" v-for="matchItem in matchData" :key="matchItem.id">
    <Match 
      :homeTeamName="matchItem.homeTeam.name"
      :homeTeamLogo="matchItem.homeTeam.crest"
      :awayTeamName="matchItem.awayTeam.name"
      :awayTeamLogo="matchItem.awayTeam.crest"
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
