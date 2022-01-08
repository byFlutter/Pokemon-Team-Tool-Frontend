<template>
  <div class="row row-cols-1 row-cols-md-3 g-4">
    <div class="col" v-for="team in teams" :key="team.id">
      <team-card :team="team"></team-card>
    </div>
  </div>
</template>

<script>
import TeamCard from '@/components/TeamCard'

export default {
  name: 'TeamsCardList',
  components: {
    TeamCard
  },
  props: {
    teams: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
