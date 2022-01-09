<template>
  <div class="home">
    <img alt="Pokeball Logo" width="200" src="../assets/pokeball.png">
    <HelloWorld msg="Willkommen in der Welt der Pokémon!"/>
    <h4>Werde zum besten <br> Trainer der ganzen Welt.</h4>
    <h3>Entdecke das Pokémon Team Tool!</h3> <br>
    <a class="btn btn-success" href="https://pokemon-team-tool-frontend.herokuapp.com/about"
       style="border-radius:30px" role="button"> <b> Wie erstelle ich ein Team? </b> </a>
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
.home {
  padding-top: 20px;
  color: whitesmoke
}
</style>
