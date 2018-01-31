<template>
  <div class="depute">
    <h1>{{ deputeInfo.civilite }} {{ deputeInfo.prenom }} {{ deputeInfo.nom }}</h1>
    <h3>{{ deputeInfo.professionLibelle }}</h3>
    <ul>
      <li>
        Date de naissance : {{ deputeInfo.dateNaissance | formatDate }}
      </li>
    </ul>
    <ul>
      <li>
        Ville de naissance : {{ deputeInfo.villeNais }}
      </li>
    </ul>
    <ul>
      <li>
        Département de naissance : {{ deputeInfo.departementNaissance }}
      </li>
    </ul>
    <ul>
      <li>
        Pays de naissance : {{ deputeInfo.paysNaissance }}
      </li>
    </ul>
    <h2>Adresses</h2>
    <DeputeAdresse
      v-for="adresse in deputeInfo.adresses"
      :adresse="adresse"
      :key="adresse.intitule"/>
  </div>
</template>

<script>
import axios from 'axios'
import DeputeAdresse from './DeputeAdresses.vue'
// eslint-disable-next-line
import formatDate from '../filters/FormatDateFilter'

export default {
  components: {DeputeAdresse},
  name: 'Depute',
  data () {
    return {
      deputeInfo: {
        default: this.getDepute()
      }
    }
  },
  methods: {
    getDepute () {
      const DeputeCode = this.$route.params.code
      const url = process.env.URL_HOST + ':' + process.env.URL_PORT + '/depute/' + DeputeCode
      axios.get(url)
        .then(response => {
          // JSON responses are automatically parsed.
          this.deputeInfo = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
}
</script>
