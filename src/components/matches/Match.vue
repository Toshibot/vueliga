<template>
  <div class="match-item">
    <div class="match-item-date">
        <span class="match-item-date-day">{{gameTime(timestamp).day}}</span>
        <span class="match-item-date-month">{{gameTime(timestamp).month}}</span>
        <span class="match-item-date-date">{{gameTime(timestamp).date}}</span>
    </div>
    <div class="match-item-teams">
      <div class="match-item-team-container">
        <div class="match-item-team-logo-container">
          <img class="team-logo" :src="homeTeamLogo" />
        </div>
        <span class="match-item-team-name">{{ homeTeamName }}</span>
      </div><span class="match-item-vs">vs</span>
      <div class="match-item-team-container">
        <div class="match-item-team-logo-container">
          <img class="team-logo" :src="awayTeamLogo" />
        </div>
        <span class="match-item-team-name">{{ awayTeamName }}</span>
      </div>
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
    padding: 10px;
    height: 200px;
    margin-bottom: 15px;

    &-date {
      &-day,
      &-month {
        padding-right: 5px;
      }
    }

    &-teams {
      width: 100%;
      display: inline-flex;
      flex-direction: row;
    }

    img.team-logo {
      max-width: 50px;
      max-height: 50px;
      display: inline-block;
    }

    &-team {
      &-container {
        width: 45%;
        padding-top: 30px;
        display: flex;
        flex-direction: column;
        text-align: center;
      }
      &-name {
        line-height: 16px;
      }
    }

    &-vs {
      display: inline-block;
      width: 10%;
      padding-top: 50px;
    }
  }
</style>
