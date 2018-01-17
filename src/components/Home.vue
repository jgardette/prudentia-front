<template>
  <div class="col-sm-6 col-sm-offset-3">
    <h1>Bienvenu chez Prudentia</h1>
    <button class="btn btn-primary" v-on:click="getDepute()">Récupération du député PA702054</button>
    <div >
      <depute v-bind:deputeInfo="deputeInfo"></depute>
    </div>
  </div>
</template>

<script>
import depute from './depute/Depute.vue'
import axios from 'axios'

export default {
  data () {
    return {
      deputeInfo: {
        prenom: 'yolo',
        nom: 'youhou'
      }
    }
  },
  methods: {
    getDepute () {
      axios.get(`http://localhost:8080/depute/PA702054`)
        .then(response => {
          // JSON responses are automatically parsed.
          this.deputeInfo = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  },
  components: {
    depute
  }
}
</script>
