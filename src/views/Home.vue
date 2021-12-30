<template>
  <div class="home">
    <img alt="Pokeball Logo" width="200" src="../assets/pokeball.png">
    <HelloWorld msg="Willkommen in der Welt der Pokémon!" style="color: whitesmoke"/>
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

<style>
body {
  background-image: url('../assets/background.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
</style>
