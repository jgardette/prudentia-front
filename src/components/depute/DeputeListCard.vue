<template>
  <div>
    <b-card
      :title="deputecard.civilite + ' ' + deputecard.prenom + ' ' + deputecard.nom"
      :sub-title="deputecard.dateNaissance | formatDate"
      :img-src="'http://www2.assemblee-nationale.fr/static/tribun/15/photos/' + deputecard.uid.replace('PA', '') + '.jpg'"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 18rem;"
      class="mb-2">
      <b-card-body>
        <p class="card-text">
          <strong>Profession</strong>
        </p>
        <p class="card-text">
          {{ deputecard.catSocPro }}
        </p>
        <p class="card-text">
          {{ deputecard.professionLibelle }}
        </p>
      </b-card-body>
      <b-card-body>
        <p class="card-text">
          <strong>Adresse</strong>
        </p>
        <DeputeAdresse
          v-for="adresse in deputecard.adresses"
          :adresse="adresse"
          :key="adresse.index"/>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
// eslint-disable-next-line
import formatDate from '../filters/FormatDateFilter'
import DeputeAdresse from './DeputeAdresses.vue'

export default {
  components: {DeputeAdresse},
  name: 'DeputeListCard',
  props: {
    // eslint-disable-next-line
    deputecard: Object
  },
  data () {
    return {
      title: this.deputecard.civilite
    }
  }
}
</script>
