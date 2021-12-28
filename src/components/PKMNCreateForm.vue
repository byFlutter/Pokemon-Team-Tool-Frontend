<template>
  <button class="btn btn-success sticky-button" data-bs-toggle="offcanvas" data-bs-target="#p-k-m-n-create-offcanvas" aria-controls="#p-k-m-n-create-offcanvas">
    <i class="bi bi-pokemon-plus-fill"></i>
  </button>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="p-k-m-n-create-offcanvas" aria-labelledby="offcanvas-label">
    <div class="offcanvas-header">
      <h5 id="offcanvas-label">Füge ein neues Pokemon hinzu</h5>
      <button type="button" id="close-offcanvas" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <form class="text-start needs-validation" id="p-k-m-n-create-form" novalidate>
        <div class="mb-3">
          <label for="name" class="form-label">Name</label>
          <input type="text" class="form-control" id="name" v-model="name" required>
          <div class="invalid-feedback">
            Bitte gib den Namen des Pokemon an.
          </div>
        </div>
        <div class="mb-3">
          <label for="region" class="form-label">Region</label>
          <input type="text" class="form-control" id="region" v-model="region" required>
          <div class="invalid-feedback">
            Bitte gib die Region des Pokemon an.
          </div>
        </div>
<!--        <div class="mb-3">
          <label for="gender" class="form-label">Gender</label>
          <select id="gender" class="form-select" v-model="gender" required>
            <option value="" selected disabled>Choose...</option>
            <option value="MALE">Male</option>
            <option value="FEMALE">Female</option>
            <option value="DIVERSE">Diverse</option>
          </select>
          <div class="invalid-feedback">
            Bitte gib das Geschlecht des Pokemon an.
          </div>
        </div>-->
        <div class="mb-3">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="evolved" v-model="evolved">
            <label class="form-check-label" for="evolved">
              Entwickelt
            </label>
          </div>
        </div>
        <div v-if="this.serverValidationMessages">
          <ul>
            <li v-for="(message, index) in serverValidationMessages" :key="index" style="color: red">
              {{ message }}
            </li>
          </ul>
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
      evolved: false,
      serverValidationMessages: []
    }
  },
  emits: ['created'],
  methods: {
    async createPokemon () {
      console.log(this.name)
      console.log(this.region)
      // console.log(this.gender)
      console.log(this.evolved)

      if (this.validate()) {
        const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/allPokemon'

        const headers = new Headers()
        headers.append('Content-Type', 'application/json')

        const pokemon = JSON.stringify({
          name: this.name,
          region: this.region,
          evolved: this.evolved
          // , gender: this.gender
        })
        const requestOptions = {
          method: 'POST',
          headers: headers,
          body: pokemon,
          redirect: 'follow'
        }
        fetch(endpoint, requestOptions)
          .then(response => response.text())
          .catch(error => console.log('error', error))
        const response = await fetch(endpoint, requestOptions)
        await this.handleResponse(response)
      }
    },
    async handleResponse (response) {
      if (response.ok) {
        this.$emit('created', response.headers.get('location'))
        document.getElementById('close-offcanvas').click()
      } else if (response.status === 400) {
        response = await response.json()
        response.errors.forEach(error => {
          this.serverValidationMessages.push(error.defaultMessage)
        })
      } else {
        this.serverValidationMessages.push('Unknown error occurred')
      }
    },
    validate () {
      const form = document.getElementById('p-k-m-n-create-form')
      form.classList.add('was-validated')
      return form.checkValidity()
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
