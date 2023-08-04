<template>
  <div class="match-item">
    <div class="match-item-date">
        <span class="match-item-date-day">{{gameTime(timestamp).day}}</span>
        <span class="match-item-date-month">{{gameTime(timestamp).month}}</span>
        <span class="match-item-date-date">{{gameTime(timestamp).date}}</span>
    </div>
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
    timestamp: {
      type: String
    },
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
  },
  methods: {
    gameTime(timestamp:any) {
        let date = new Date(timestamp);
        let dayValue = date.getDay();
        let monthValue = date.getMonth();
        let dateValue = date.getDate();
        let hoursValue = date.getHours();
        let minutesValue = date.getMinutes();
        let daysOfTheWeek = [
          "Sunday", 
          "Monday", 
          "Tuesday", 
          "Wednesday", 
          "Thursday", 
          "Friday", 
          "Saturday"
        ];
        let monthsOfTheYear = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ];
        return {
          day: daysOfTheWeek[dayValue],
          month: monthsOfTheYear[monthValue],
          date: dateValue,
          time: hoursValue + ':' + minutesValue
        }
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
