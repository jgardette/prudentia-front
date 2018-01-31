<template>
  <div class="DeputeAdresse">
    <h3 v-if="adresse.intitule">{{ adresse.intitule }}</h3>
    <ul>
      <li v-if="adresse.nomRue">
        Adresse : {{ adresse.numeroRue }} {{ adresse.nomRue }} {{ adresse.codePostal }} {{ adresse.ville }}
      </li>
    </ul>
    <ul>
      <li v-if="adresse.valeurElectronique">
        Email : {{ adresse.valeurElectronique }}
      </li>
    </ul>
    <ul>
      <li v-if="adresse.numeroTelephone">
        Numéro de téléphone : {{ adresse.numeroTelephone }}
      </li>
    </ul>
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
