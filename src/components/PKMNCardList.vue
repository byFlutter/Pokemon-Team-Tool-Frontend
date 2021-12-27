<template>
  <div class="row row-cols-1 row-cols-md-4 g-4">
    <div class="col" v-for="pokemon in pkmn" :key="pokemon.id">
      <div class="card h-100">
        <img :src="getArtwork(pokemon)" class="card-img-top" :alt="pokemon.name">
        <div class="card-body">
          <h5 class="card-title">{{ pokemon.name }}</h5>
          <p class="card-text">
            {{ pokemon.name }} ist {{ pokemon.evolved ? 'entwickelt' : 'nicht entwickelt' }} und
            entstammt der Region {{ pokemon.region }}.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PKMNCardList',
  props: {
    pkmn: {
      type: Array,
      required: true
    }
  },
  methods: {
    getArtwork (pokemon) {
      if (pokemon.name === 'Glumanda') {
        return require('../assets/glumanda.png')
      } else if (pokemon.name === 'Kapilz') {
        return require('../assets/kapilz.png')
      }
    }
  }
}
</script>

<style scoped>

</style>
