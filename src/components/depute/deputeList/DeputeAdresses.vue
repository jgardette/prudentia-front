<template>
  <div class="DeputeAdresse">
    <p v-if="adresse.nomRue"><i>{{ adresse.intitule }}</i> {{ adresse.numeroRue }} {{ adresse.nomRue }} {{ adresse.codePostal }} {{ adresse.ville }}</p>
    <p v-if="adresse.valeurElectronique">{{ adresse.valeurElectronique }}</p>
    <p v-if="adresse.numeroTelephone">{{ adresse.numeroTelephone }}</p>
  </div>
</template>

<script>
export default {
  name: 'DeputeAdresse',
  props: {
    // eslint-disable-next-line
    adresse: Object
  }
}
</script>
