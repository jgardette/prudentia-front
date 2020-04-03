<template>
  <div>
    <b-card
      no-body
      tag="article"
      border-variant="dark"
      :header="deputecard.civilite + ' ' + deputecard.prenom + ' ' + deputecard.nom"
      style="max-width: 450px; min-width: 450px"
      class="mb-2">
      <b-row no-gutters>
        <b-col md="3">
          <b-card-img
            :src="'http://www2.assemblee-nationale.fr/static/tribun/15/photos/' + deputecard.uid.replace('PA', '') + '.jpg'"
            class="rounded-0"/>
        </b-col>
        <b-col md="9">
          <b-card-body
            :title="deputecard.civilite + ' ' + deputecard.prenom + ' ' + deputecard.nom"
            :sub-title="deputecard.dateNaissance | formatDate">
            <b-card-text>
              <p class="card-text">
                {{ deputecard.catSocPro }}
              </p>
              <p class="card-text">
                {{ deputecard.professionLibelle }}
              </p>
              <p class="card-text">
                Nombre de mandats : {{ deputecard.numberMandats }}
              </p>
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
// eslint-disable-next-line
import formatDate from '../../filters/FormatDateFilter'
const DeputeAdresse = () => import('./DeputeAdresses.vue')

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
