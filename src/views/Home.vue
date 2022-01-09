<template>
  <div class="home">
    <img alt="Pokeball Logo" width="200" src="../assets/pokeball.png">
    <Welcome msg="Willkommen in der Welt der Pokémon!"/>
    <h4>Werde zum besten <br> Trainer der ganzen Welt.</h4>
    <h3>Entdecke das Pokémon Team Tool!</h3> <br>
    <a class="btn btn-success" href="https://pokemon-team-tool-frontend.herokuapp.com/about"
       style="border-radius:30px; padding-left: 50px; padding-right: 50px" role="button"> <b> Los geht's! </b> </a>
  </div>
</template>

<script>
import Welcome from '@/components/Welcome.vue'

export default {
  name: 'Home',
  components: {
    Welcome
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
