<template>
  <div v-for="matchItem in matchData" :key="matchItem.id">
    {{ matchItem.homeTeam.name }} vs {{ matchItem.awayTeam.name }}
  </div>
</template>
<script lang="ts">

  export default {
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
