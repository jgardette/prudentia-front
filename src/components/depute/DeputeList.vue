<template>
  <div>
    <b-container fluid>
      <!-- User Interface controls -->
      <b-row>
        <b-col
          md="6"
          class="my-1">
          <b-form-group
            horizontal
            label="Filter"
            class="mb-0">
            <b-input-group>
              <b-form-input
                v-model="filter"
                placeholder="Rechercher..." />
              <b-input-group-button name="filter-button">
                <b-btn
                  :disabled="!filter"
                  @click="filter = ''">Vider</b-btn>
              </b-input-group-button>
              <span><i>Nombre d'éléments : {{ totalRows }}</i></span>
            </b-input-group>
          </b-form-group>
        </b-col>
      </b-row>
    </b-container>
    <b-table
      striped
      hover
      stacked="md"
      :items="deputeList"
      :fields="fields"
      :filter="filter"
      @filtered="onFiltered">
      <template
        slot="udi"
        slot-scope="data">
        <a :href="`#/depute/${data.value}`">
          {{ data.value }}
        </a>
      </template>
      <template
        slot="dateNaissance"
        slot-scope="data">
        {{ data.value | formatDate }}
      </template>
    </b-table>
  </div>
</template>

<script>
import axios from 'axios'
import bTable from 'bootstrap-vue/es/components/table/table'
// eslint-disable-next-line
import formatDate from '../filters/FormatDateFilter'

export default {
  components: {
    'b-table': bTable
  },
  name: 'DeputeList',
  data () {
    return {
      fields: [
        {
          key: 'udi',
          label: 'Identifiant',
          sortable: true
        },
        {
          key: 'civilite',
          label: 'Civilité',
          sortable: true
        },
        {
          key: 'prenom',
          label: 'Prénom',
          sortable: true
        },
        {
          key: 'nom',
          label: 'Nom',
          sortable: true
        },
        {
          key: 'dateNaissance',
          label: 'Date de naissance',
          sortable: true
        },
        {
          key: 'professionLibelle',
          label: 'Profession',
          sortable: true
        }
      ],
      deputeList: this.getDeputeList(),
      filter: null,
      totalRows: 0
    }
  },
  methods: {
    getDeputeList () {
      const url = process.env.URL_HOST + ':' + process.env.URL_PORT + '/deputes_simple/'
      axios.get(url)
        .then(response => {
          // JSON responses are automatically parsed.
          this.deputeList = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    },

    onFiltered (filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length
      this.currentPage = 1
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
