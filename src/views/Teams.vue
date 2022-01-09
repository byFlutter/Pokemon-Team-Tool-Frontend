<template>
  <div class="teams">
    <h1>Erstelle dein eigenes Team</h1>
    <h3> und betrachte Teams anderer Spieler</h3> <br>
  </div>
  <div class="container-fluid">
    <teams-card-list :teams="this.teams"></teams-card-list>
  </div>
  <teams-create-form @created="addTeam"></teams-create-form>
</template>

<script>
import TeamsCardList from '@/components/TeamsCardList'
import TeamsCreateForm from '@/components/TeamsCreateForm'

export default {
  name: 'Teams',
  components: {
    TeamsCardList,
    TeamsCreateForm
  },
  data () {
    return {
      teams: []
    }
  },
  methods: {
    addTeam (teamLocation) {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + teamLocation
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      }
      fetch(endpoint, requestOptions)
        .then(response => response.json())
        .then(team => this.teams.push(team))
        .catch(error => console.log('error', error))
    }
  },
  mounted () {
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/teams'
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }
    fetch(endpoint, requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(team => {
        this.teams.push(team)
      }))
      .catch(error => console.log('error', error))
  }
}

</script>

<style scoped>

.teams {
  color: whitesmoke;
  padding-top: 20px
}

</style>
