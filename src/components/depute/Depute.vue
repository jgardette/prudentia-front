<template>
  <div class="depute">
    <h1>{{ deputeInfo.prenom }} {{ deputeInfo.nom }}</h1>
    <h2>description</h2>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'depute',
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
      axios.get(`http://localhost:8080/depute/${DeputeCode}`)
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
