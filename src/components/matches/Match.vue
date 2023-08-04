<template>
  <div class="match-item">
    <div class="match-item-team-container">
      <div class="match-item-team-logo-container">
        <img class="team-logo" :src="homeTeamLogo" />
      </div>
      {{ homeTeamName }}
    </div><span class="match-item-vs">vs</span>
    <div class="match-item-team-container">
      <div class="match-item-team-logo-container">
        <img class="team-logo" :src="awayTeamLogo" />
      </div>
      {{ awayTeamName }}
    </div>
  </div>
</template>
<script lang="ts">
export default {
  props: {
    homeTeamName: {
      type: String
    },
    homeTeamLogo: {
      type: String
    },
    awayTeamName: {
      type: String
    },
    awayTeamLogo: {
      type: String
    },
    clubData: {
      type: Object
    }
  }
}
</script>
<style scoped lang="scss">
  .match-item {
    background: $color-grey-dark;
    text-align: center;
    width: 300px;
    display: inline-flex;
    flex-direction: row;
    padding: 10px;
    height: 200px;
    margin-bottom: 15px;
    img.team-logo {
      max-width: 50px;
      max-height: 50px;
      display: inline-block;
    }
    &-team-container {
      width: 45%;
      padding-top: 40px;
      display: flex;
      flex-direction: column;
      text-align: center;
    }
    &-vs {
      display: inline-flex;
      flex-direction: column;
      justify-content: space-around;
    }
  }
</style>
