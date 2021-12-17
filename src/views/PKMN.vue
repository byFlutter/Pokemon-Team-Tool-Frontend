<template>
  <h1>Welcome to PKMN</h1>
  <div class="container-fluid">
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div class="col">
        <div class="card h-100">
          <img src="../assets/glumanda.png" class="card-img-top" alt="Glumanda">
          <div class="card-body">
            <h5 class="card-title">Glumanda</h5>
            <p class="card-text">
              Glumanda trägt die ID 1 und entstammt der Region Kanto.
            </p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <img src="../assets/kapilz.png" class="card-img-top" alt="Kapilz">
          <div class="card-body">
            <h5 class="card-title">Kapilz</h5>
            <p class="card-text">
              Kapilz trägt die ID 286 und entstammt der Region Hoenn.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PKMN'
}
</script>

<style scoped>

</style>
