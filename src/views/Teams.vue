<template>
  <div class="teams">
    <h1>Meine Teams</h1>
  </div>
  <div class="container-fluid">
    <!--    <p-k-m-n-card-list :pkmn="this.pkmn"></p-k-m-n-card-list>-->
  </div>
  <!--  <p-k-m-n-create-form> @created="addPokemon"</p-k-m-n-create-form>-->
</template>

<script>
// import PKMNCardList from '@/components/PKMNCardList'
// import PKMNCreateForm from '@/components/PKMNCreateForm'

export default {
  name: 'Teams',
  components: {
    // PKMNCardList,
    // PKMNCreateForm
  },
  data () {
    return {
      // teams: []
    }
  }
}
//   methods: {
//     addPokemon (pokemonLocation) {
//       const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + pokemonLocation
//       const requestOptions = {
//         method: 'GET',
//         redirect: 'follow'
//       }
//       fetch(endpoint, requestOptions)
//         .then(response => response.json())
//         .then(pokemon => this.pkmn.push(pokemon))
//         .catch(error => console.log('error', error))
//     }
//   },
//   mounted () {
//     const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/allPokemon'
//     const requestOptions = {
//       method: 'GET',
//       redirect: 'follow'
//     }
//     fetch(endpoint, requestOptions)
//       .then(response => response.json())
//       .then(result => result.forEach(pokemon => {
//         this.pkmn.push(pokemon)
//       }))
//       .catch(error => console.log('error', error))
//   }
// }

</script>

<style scoped>

.teams {
  color: whitesmoke;
}

</style>
