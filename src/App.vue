<template>
  <div id="app">
    <link
      type="text/css"
      rel="stylesheet"
      href="//unpkg.com/bootstrap/dist/css/bootstrap.min.css">
    <link
      type="text/css"
      rel="stylesheet"
      href="//unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.css">

    <b-navbar
      type="dark"
      variant="dark">
      <b-navbar-nav>
        <b-navbar-brand href="#/">Prudentia</b-navbar-brand>
        <b-nav-item href="#/deputes">Liste des députés</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>
