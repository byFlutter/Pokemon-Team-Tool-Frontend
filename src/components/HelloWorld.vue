<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <a class="btn btn-success" href="https://pokemon-team-tool-frontend.herokuapp.com/about" style="border-radius:30px" role="button">Wie erstelle ich ein Team?</a>
    <!--    <button type="button" class="btn btn-secondary">Yeah</button>-->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
