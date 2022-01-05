<template>
  <div class="row row-cols-1 row-cols-md-3 g-4">
    <div class="col" v-for="pokemon in pkmn" :key="pokemon.id">
      <pokemon-card :pokemon="pokemon"></pokemon-card>
    </div>
  </div>
</template>

<script>
import PokemonCard from '@/components/PokemonCard'

export default {
  name: 'PKMNCardList',
  components: {
    PokemonCard
  },
  props: {
    pkmn: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
