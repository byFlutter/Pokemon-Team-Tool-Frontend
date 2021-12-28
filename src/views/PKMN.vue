<template>
  <h1>Welcome to PKMN</h1>
  <div class="container-fluid">
<!--    <div class="row row-cols-1 row-cols-md-4 g-4">
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
    </div>-->
    <p-k-m-n-card-list :pkmn="this.pkmn"></p-k-m-n-card-list>
  </div>
  <p-k-m-n-create-form> @created="addPokemon" </p-k-m-n-create-form>
</template>

<script>
import PKMNCardList from '@/components/PKMNCardList'
import PKMNCreateForm from '@/components/PKMNCreateForm'

export default {
  name: 'PKMN',
  components: {
    PKMNCardList,
    PKMNCreateForm
  },
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
    addPokemon (pokemonLocation) {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + pokemonLocation
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      }
      fetch(endpoint, requestOptions)
        .then(response => response.json())
        .then(pokemon => this.pkmn.push(pokemon))
        .catch(error => console.log('error', error))
    }
  },
  /* methods: {
    getArtwork (pokemon) {
      if (pokemon.name === 'Glumanda') {
        return require('../assets/glumanda.png')
      } else if (pokemon.name === 'Kapilz') {
        return require('../assets/kapilz.png')
      }
    }
  }, */
  mounted () {
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/allPokemon'
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }
    fetch(endpoint, requestOptions)
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
