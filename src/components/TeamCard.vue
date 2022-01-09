<template>
  <div class="card text-dark bg-light mb-3 card border-success mb-3" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img :src="getArtwork(team)" style="padding-top: 55px; padding-left: 15px"  width="160" height="175" class="card-img-top" :alt="team.name">
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
      if (team.id === 1 || team.id === 11 || team.id === 21) {
        return require('../assets/pokeball2.webp')
      } else if (team.id === 2 || team.id === 12 || team.id === 22) {
        return require('../assets/superball.png')
      } else if (team.id === 3 || team.id === 13 || team.id === 23) {
        return require('../assets/hyperball.webp')
      } else if (team.id === 4 || team.id === 14 || team.id === 24) {
        return require('../assets/finsterball.webp')
      } else if (team.id === 5 || team.id === 15 || team.id === 25) {
        return require('../assets/meisterball.webp')
      } else if (team.id === 6 || team.id === 16 || team.id === 26) {
        return require('../assets/flottball.webp')
      } else if (team.id === 7 || team.id === 17 || team.id === 27) {
        return require('../assets/premierball.webp')
      } else if (team.id === 8 || team.id === 18 || team.id === 28) {
        return require('../assets/safariball.webp')
      } else if (team.id === 9 || team.id === 19 || team.id === 29) {
        return require('../assets/tauchball.webp')
      } else if (team.id === 10 || team.id === 20 || team.id === 30) {
        return require('../assets/heilball.webp')
      } else {
        return require('../assets/pokeball.png')
      }
    }
  }
}
</script>

<style scoped>

</style>
