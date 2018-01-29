<template>
  <b-table
    striped
    hover
    :items="deputeList"/>
</template>

<script>
import axios from 'axios'
import bTable from 'bootstrap-vue/es/components/table/table'

export default {
  components: {
    'b-table': bTable
  },
  name: 'DeputeList',
  data () {
    return {
      deputeList: this.getDeputeList()
    }
  },
  methods: {
    getDeputeList () {
      axios.get(`http://localhost:8080/deputes_simple`)
        .then(response => {
          // JSON responses are automatically parsed.
          this.deputeList = response.data
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
