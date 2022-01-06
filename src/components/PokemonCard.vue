<template>
  <div class="card text-dark bg-light mb-3 card border-success mb-3" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img :src="getArtwork(pokemon)" class="card-img-top" :alt="pokemon.name">
      </div>
      <div class="col-md-8">
        <div class="card-body text-success">
          <h5 class="card-title">{{ pokemon.name }} - Lvl {{ pokemon.level }}</h5>
          <p class="card-text">
            {{ pokemon.name }} ist {{ pokemon.evolved ? 'entwickelt' : 'nicht entwickelt' }} und
            entstammt der Region {{ pokemon.region }}. Es gehört dem Typ {{pokemon.type}} an.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PokemonCard',
  props: {
    pokemon: {
      type: Object,
      required: true
    }
  },
  methods: {
    getArtwork (pokemon) {
      if (pokemon.name === 'Glumanda') {
        return require('../assets/glumanda.png')
      } else if (pokemon.name === 'Schiggy') {
        return require('../assets/schiggy.png')
      } else if (pokemon.name === 'Bisasam') {
        return require('../assets/bisasam.png')
      } else if (pokemon.name === 'Glurak') {
        return require('../assets/glurak.png')
      } else if (pokemon.name === 'Pikachu') {
        return require('../assets/pikachu.png')
      } else if (pokemon.name === 'Evoli') {
        return require('../assets/evoli.png')
      } else if (pokemon.name === 'Gengar') {
        return require('../assets/gengar.png')
      } else if (pokemon.name === 'Kapilz') {
        return require('../assets/kapilz.png')
      } else if (pokemon.name === 'Mew') {
        return require('../assets/mew.png')
      } else if (pokemon.name === 'Mewtu') {
        return require('../assets/mewtu.png')
      } else if (pokemon.name === 'Lucario') {
        return require('../assets/lucario.png')
      } else if (pokemon.name === 'Arceus') {
        return require('../assets/arceus.png')
      } else {
        return require('../assets/pokeball.png')
      }
    }
  }
}
</script>

<style scoped>

</style>
