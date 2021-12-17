<template>
  <h1>Welcome to PKMN</h1>
  <div class="container-fluid">
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
  </div>
</template>

<script>
export default {
  name: 'PKMN',
  data () {
    return {
      // pkmn: [
      //   {
      //     id: 1,
      //     name: 'Glumanda',
      //     region: 'Kanto',
      //     evolved: false
      //   },
      //   {
      //     id: 286,
      //     name: 'Kapilz',
      //     region: 'Hoenn',
      //     evolved: true
      //   }
      // ]
      pkmn: []
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
  },
  mounted () {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }
    fetch('http://localhost:8080/api/v1/allPokemon', requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(pokemon => {
        this.pkmn.push(pokemon)
      }))
      .catch(error => console.log('error', error))
  }
}
</script>

<style scoped>

</style>
