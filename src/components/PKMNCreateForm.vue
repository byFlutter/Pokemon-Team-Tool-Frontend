<template>
  <button class="btn btn-success sticky-button" data-bs-toggle="offcanvas" data-bs-target="#pkmn-create-offcanvas" aria-controls="#pkmn-create-offcanvas">
    <i class="bi bi-pkmn-plus-fill"></i>
  </button>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="pkmn-create-offcanvas" aria-labelledby="offcanvas-label">
    <div class="offcanvas-header">
      <h5 id="offcanvas-label">New Pokemon</h5>
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <form class="needs-validation text-start" novalidate>
        <div class="mb-3">
          <label for="name" class="form-label">Name</label>
          <input type="text" class="form-control" id="name" v-model="name" required>
        </div>
        <div class="mb-3">
          <label for="region" class="form-label">Region</label>
          <input type="text" class="form-control" id="region" v-model="region" required>
        </div>
<!--        <div class="mb-3">
          <label for="gender" class="form-label">Gender</label>
          <select id="gender" class="form-select" v-model="gender">
            <option value="" selected>Choose...</option>
            <option value="MALE">Male</option>
            <option value="FEMALE">Female</option>
            <option value="DIVERSE">Diverse</option>
          </select>
        </div>-->
        <div class="mb-3">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="evolved" v-model="evolved">
            <label class="form-check-label" for="evolved">
              Entwickelt
            </label>
          </div>
        </div>
        <div class="mt-5">
          <button class="btn btn-primary me-3" type="submit" @click.prevent="createPokemon">Create</button>
          <button class="btn btn-danger" type="reset">Reset</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PKMNCreateForm',
  data () {
    return {
      name: '',
      region: '',
      // gender: '',
      evolved: false
    }
  },
  methods: {
    createPokemon () {
      console.log(this.name)
      console.log(this.region)
      // console.log(this.gender)
      console.log(this.evolved)
    }
  }
}
</script>

<style scoped>
.sticky-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 15px;
  border-radius: 30px;
}
</style>
