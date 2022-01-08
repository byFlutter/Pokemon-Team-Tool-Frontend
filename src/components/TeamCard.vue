<template>
  <div class="card text-dark bg-light mb-3 card border-success mb-3" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img :src="getArtwork(team)" class="card-img-top" :alt="team.name">
      </div>
      <div class="col-md-8">
        <div class="card-body text-success">
          <h5 class="card-title">{{ team.name }} - ID {{ team.id }}</h5>
          <p class="card-text">
            {{ team.name }} wurde für das Spiel {{ team.game }} erstellt. Das Team besteht vor allem aus Pokémon vom Typ {{ team.type }}.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeamCard',
  props: {
    team: {
      type: Object,
      required: true
    }
  },
  methods: {
    getArtwork (team) {
      if (team.name === 'Glumanda') {
        return require('../assets/glumanda.png')
      } else if (team.name === 'Bisasam') {
        return require('../assets/bisasam.png')
      } else {
        return require('../assets/pokeball.png')
      }
    }
  }
}
</script>

<style scoped>

</style>
