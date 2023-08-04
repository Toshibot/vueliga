<template>
  <div class="matches-container">
    <span class="match-item-container" v-for="matchItem in matchData" :key="matchItem.id">
      <Match 
        :timestamp="matchItem.utcDate"
        :homeTeamName="matchItem.homeTeam.name"
        :homeTeamLogo="matchItem.homeTeam.crest"
        :awayTeamName="matchItem.awayTeam.name"
        :awayTeamLogo="matchItem.awayTeam.crest"
      />
    </span>
  </div>
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
<style scoped lang="scss">
  .matches-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
</style>
