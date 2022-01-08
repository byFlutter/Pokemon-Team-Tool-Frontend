<template>
  <button class="btn btn-success sticky-button" data-bs-toggle="offcanvas" data-bs-target="#teams-create-offcanvas"
          aria-controls="#teams-create-offcanvas">
    <i class="bi bi-teams-plus-fill"></i>Team hinzufügen
  </button>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="teams-create-offcanvas" aria-labelledby="offcanvas-label">
    <div class="offcanvas-header">
      <h5 id="offcanvas-label">Füge ein neues Team hinzu</h5>
      <button type="button" id="close-offcanvas" class="btn-close text-reset" data-bs-dismiss="offcanvas"
              aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <form class="text-start needs-validation" id="teams-create-form" novalidate>
        <div class="mb-3">
          <label for="name" class="form-label">Name</label>
          <input type="text" class="form-control" id="name" v-model="name" required>
          <div class="invalid-feedback">
            Bitte gib den Namen des Teams an.
          </div>
        </div>
        <div class="mb-3">
          <label for="game" class="form-label">Spiel</label>
          <input type="text" class="form-control" id="game" v-model="game" required>
          <div class="invalid-feedback">
            Bitte gib die das Spiel an, für das du dieses Team erstellst.
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
            Bitte gib den Haupt-Typ des Teams an.
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
          <button class="btn btn-primary me-3" type="submit" @click.prevent="createTeam">Hinzufügen</button>
          <button class="btn btn-danger" type="reset">Löschen</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeamsCreateForm',
  data () {
    return {
      name: '',
      game: '',
      type: '',
      serverValidationMessages: []
    }
  },
  emits: ['created'],
  methods: {
    async createTeam () {
      console.log(this.name)
      console.log(this.game)
      console.log(this.type)
      if (this.validate()) {
        const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/teams'

        const headers = new Headers()
        headers.append('Content-Type', 'application/json')

        const team = JSON.stringify({
          name: this.name,
          game: this.game,
          type: this.type
        })
        const requestOptions = {
          method: 'POST',
          headers: headers,
          body: team,
          redirect: 'follow'
        }
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
      const form = document.getElementById('teams-create-form')
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
