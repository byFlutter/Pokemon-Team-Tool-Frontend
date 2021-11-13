<template>
  <div class="home">
    <img alt="Pokeball Logo" width="300" src="../assets/pokeball.png">
    <HelloWorld msg="Welcome to the World of Pokémon! "/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
