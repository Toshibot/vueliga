<template>
  <div>
    <span>{{ homeTeam }}</span> vs <span>{{ awayTeam }}</span>
  </div>
</template>
<script lang="ts">
export default {
  props: {
    homeTeam: {
      type: String
    },
    awayTeam: {
      type: String
    },
    clubData: {
      type: Object
    }
  }
}
</script>
