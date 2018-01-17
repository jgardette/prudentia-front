<template>
  <div class="depute">
    <h1>{{ deputeInfo.prenom }} {{ deputeInfo.nom }}</h1>
    <h2>description</h2>
  </div>
</template>

<script>
export default {
  name: 'depute',
  props: {
    deputeInfo: Object
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
