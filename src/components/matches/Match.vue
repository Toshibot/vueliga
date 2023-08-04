<template>
  <div class="match-item">
    <span>
      <div class="match-item-team-container">
        <img class="team-logo" :src="homeTeamLogo" />
        {{ homeTeamName }}
      </div>
    </span> vs <span>
      <div class="match-item-team-container">
        <img class="team-logo" :src="awayTeamLogo" />
        {{ awayTeamName }}
      </div>
    </span>
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
    img.team-logo {
      max-width: 50px;
      max-height: 50px;
      display: block;
    }
    &-team-container {
      text-align: center;
    }
  }
</style>
