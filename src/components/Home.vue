<template>
  <div>
    <b-card>
      <b-media>
        <img
          slot="aside"
          src="../assets/assemble_nationale.png"
          width="80">
        <h5 class="mt-0">Bienvenu chez Prudentia</h5>
        <p>
          Le but de prundetia est d'exploiter et de mettre à disposition les données publiques de l'assemblée nationale disponible ici :<br>
          <a href="http://data.assemblee-nationale.fr/">http://data.assemblee-nationale.fr/</a>
        </p>
        <p>
          Prudentia est un projet open-source et le code est disponible sur github ici :<br>
          <a href="https://github.com/jgardette/prudentia">https://github.com/jgardette/prudentia</a><br>
          <a href="https://github.com/jgardette/prudentia-front">https://github.com/jgardette/prudentia-front</a>
        </p>
        <b-media>
          <img
            slot="aside"
            src="../assets/deputes_assemble_nationale.jpg"
            width="64">
          <h5 class="mt-0">Liste des députés</h5>
          <p class="mb-0">
            Prudentia vous propose de voir la liste des députés en excercice. Cliquez <a href="#/deputes">ici</a>
          </p>
        </b-media>
      </b-media>
    </b-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>
