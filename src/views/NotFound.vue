<template>
  <div class="not__found">
    <img class="error__404" src="error-404.png" alt="error-404">
    <div class="text-center btn__nf">
      <v-btn rounded color="grey" to="/home">╠ Volver a Home ╣</v-btn>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.not__found {
  background-color: #000;
}
.error__404 {
  width: 30em;
  display: block;
  margin: auto;
  margin-top: 3em;
}
.btn__nf {
  margin-bottom: 8.5em;
}
</style>