import Vue from 'vue'
import * as moment from 'moment'

Vue.filter('formatDate', value => {
  return moment(value).format('DD/MM/YYYY')
})
