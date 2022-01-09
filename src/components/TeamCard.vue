<template>
  <div class="card text-dark bg-light mb-3 card border-success mb-3" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img :src="getArtwork(team)"  class="card-img-top" :alt="team.name">
      </div>
      <div class="col-md-8">
        <div class="card-body text-success">
          <h5 class="card-title">{{ team.name }} - TeamDexNr: {{ team.id }}</h5>
          <h6 class="card-title-two">
            {{ team.pokemonIds[0] ? 'Zum Team gehören die Pokémon mit folgenden PokéDexNummern:' :
            'Diesem Team wurden noch keine Pokémon hinzugefügt.'}} <br>
            {{ team.pokemonIds[0] ? team.pokemonIds[0]: ''}} {{ team.pokemonIds[1] ? '- ' + team.pokemonIds[1] : ''}}
            {{ team.pokemonIds[2] ? '- ' + team.pokemonIds[2] : ''}} {{ team.pokemonIds[3] ? '- ' + team.pokemonIds[3] : ''}}
            {{ team.pokemonIds[4] ? '- ' + team.pokemonIds[4] : ''}} {{ team.pokemonIds[5] ? '- ' + team.pokemonIds[5] : ''}} <br> </h6>
          <p class="card-text">
            {{ team.name }} wurde für das Spiel {{ team.game }} erstellt und besteht vor allem aus Pokémon vom Typ {{ team.type }}.
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
