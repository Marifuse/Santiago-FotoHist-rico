<template>
  <div class="admin__section">
    <v-container>
      <v-row>
        <v-col cols="12" sm="10" md="8" class="mx-auto">
          <Image-Form/>
          <Image-List/>
          <div class="text-center pt-5">
            <v-btn rounded color="grey" to="/home">╠ Volver a Home ╣</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ImageForm from '../components/ImageForm'
import ImageList from '../components/ImageList'
export default {
  components: {
    ImageForm,
    ImageList
  }
}
</script>

<style>
.admin__section {
  background-color: #000;
}
</style>