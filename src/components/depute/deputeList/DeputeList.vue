<template>
  <div>
    <b-container fluid>
      <div
        class="text-center">
        <b-spinner
          v-if="spinnerVisible"
          variant="primary"
          style="width:3rem; height:3rem;"
          label="Large Spinner"/>
      </div>
      <!-- User Interface controls -->
      <b-row
        v-if="!spinnerVisible"
      >
        <b-col>
          <i>Nombre d'éléments : {{ totalRows }}</i>
        </b-col>
      </b-row>
    </b-container>
    <b-container fluid>
      <b-card-group
        deck
        class="mb-3">
        <DeputeListCard
          name="cardOfDeputes"
          v-for="deputeCard in deputeList"
          :deputecard="deputeCard"
          :key="deputeCard.uid"/>
      </b-card-group>
    </b-container>

  </div>
</template>

<script>
import axios from 'axios'
// eslint-disable-next-line
import formatDate from '../../filters/FormatDateFilter'
import DeputeListCard from './DeputeListCard.vue'

export default {
  components: {
    DeputeListCard
  },
  name: 'DeputeList',
  data () {
    return {
      deputeList: this.getDeputeList(),
      filter: null,
      totalRows: 0,
      spinnerVisible: true
    }
  },
  methods: {
    getDeputeList () {
      const url = process.env.URL_HOST + ':' + process.env.URL_PORT + '/deputes/'
      axios.get(url)
        .then(response => {
          // JSON responses are automatically parsed.
          this.deputeList = response.data
          this.totalRows = this.deputeList.length
          this.spinnerVisible = false
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
