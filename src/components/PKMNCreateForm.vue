<template>
  <button class="btn btn-success sticky-button" data-bs-toggle="offcanvas" data-bs-target="#pkmn-create-offcanvas"
          aria-controls="#pkmn-create-offcanvas">
    <i class="bi bi-pokemon-plus-fill"></i>Pokémon hinzufügen
  </button>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="pkmn-create-offcanvas" aria-labelledby="offcanvas-label">
    <div class="offcanvas-header">
      <h5 id="offcanvas-label">Füge ein neues Pokémon hinzu</h5>
      <button type="button" id="close-offcanvas" class="btn-close text-reset" data-bs-dismiss="offcanvas"
              aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <form class="text-start needs-validation" id="pkmn-create-form" novalidate>
        <div class="mb-3">
          <label for="name" class="form-label">Name</label>
          <input type="text" class="form-control" id="name" v-model="name" required>
          <div class="invalid-feedback">
            Bitte gib den Namen des Pokémon an.
          </div>
        </div>
        <div class="mb-3">
          <label for="region" class="form-label">Region</label>
          <input type="text" class="form-control" id="region" v-model="region" required>
          <div class="invalid-feedback">
            Bitte gib die Region des Pokémon an.
          </div>
        </div>
        <div class="mb-3">
          <label for="level" class="form-label">Level</label>
          <input type="text" class="form-control" id="level" v-model="level" required>
          <div class="invalid-feedback">
            Bitte gib das Level des Pokémon an.
          </div>
        </div>
        <div class="mb-3">
          <label for="type" class="form-label">Typ</label>
          <select id="type" class="form-select" v-model="type" required>
            <option value="" selected disabled>Wähle...</option>
            <option value="Normal">Normal</option>
            <option value="Feuer">Feuer</option>
            <option value="Wasser">Wasser</option>
            <option value="Pflanze">Pflanze</option>
            <option value="Elektro">Elektro</option>
            <option value="Eis">Eis</option>
            <option value="Kampf">Kampf</option>
            <option value="Gift">Gift</option>
            <option value="Boden">Boden</option>
            <option value="Flug">Flug</option>
            <option value="Psycho">Psycho</option>
            <option value="Kaefer">Käfer</option>
            <option value="Gestein">Gestein</option>
            <option value="Geist">Geist</option>
            <option value="Drache">Drache</option>
            <option value="Unlicht">Unlicht</option>
            <option value="Stahl">Stahl</option>
            <option value="Fee">Fee</option>
          </select>
          <div class="invalid-feedback">
            Bitte gib den Typ des Pokémon an.
          </div>
        </div>
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
          <button class="btn btn-primary me-3" type="submit" @click.prevent="createPokemon">Hinzufügen</button>
          <button class="btn btn-danger" type="reset">Löschen</button>
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
      level: '',
      type: '',
      evolved: false,
      serverValidationMessages: []
    }
  },
  emits: ['created'],
  methods: {
    async createPokemon () {
      console.log(this.name)
      console.log(this.region)
      console.log(this.level)
      console.log(this.type)
      console.log(this.evolved)
      if (this.validate()) {
        const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/allPokemon'

        const headers = new Headers()
        headers.append('Content-Type', 'application/json')

        const pokemon = JSON.stringify({
          name: this.name,
          region: this.region,
          level: this.level,
          evolved: this.evolved,
          type: this.type
        })
        const requestOptions = {
          method: 'POST',
          headers: headers,
          body: pokemon,
          redirect: 'follow'
        }
        /* fetch(endpoint, requestOptions)
          .then(response => response.text())
          .catch(error => console.log('error', error)) */
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
      const form = document.getElementById('pkmn-create-form')
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
