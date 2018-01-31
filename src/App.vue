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
      toggleable="md"
      type="dark"
      variant="info">

      <b-navbar-toggle target="nav_collapse"/>

      <b-navbar-brand href="#/">
        <img
          slot="aside"
          src="./assets/logo.jpg"
          width="80">
        Prudentia
      </b-navbar-brand>

      <b-collapse
        is-nav
        id="nav_collapse">

        <b-navbar-nav>
          <b-nav-item href="#/deputes">Liste des députés</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              type="text"
              placeholder="Rechercher..."/>
            <b-button
              size="sm"
              class="my-2 my-sm-0"
              type="submit">Rechercher</b-button>
          </b-nav-form>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
