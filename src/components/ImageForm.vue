<template>
  <div class="text-center mt-5">
    <v-card class="pa-5 grey lighten-3 mb-15">
      <h1 class="text-center mb-5">Ingrese un Nuevo Recuerdo Aquí</h1>
        <v-text-field label="Nombre del Lugar" type="text" :value="currentPicture.data.title" @input="updateTitle" outlined color="grey lighten-1"/>
        <v-text-field label="URL de la Imagen" type="text" :value="currentPicture.data.img" @input="updateImg" outlined color="grey lighten-1"/>
        <v-textarea label="Descripción" auto-grow :value="currentPicture.data.description" @input="updateDescription" outlined color="grey lighten-1"/>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="grey" @click="submitForm">{{ !!currentPicture.id ? '╠ Actualizar ╣' : '╠ Crear ╣' }}</v-btn>
        <v-btn color="black" dark @click="cancelForm">╠ Cancelar ╣</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions(['updateTitle', 'updateImg', 'updateDescription', 'postPicture', 'updatePicture', 'cancelForm']),
    submitForm() {
      if (this.currentPicture.id) {
        //Si tiene id se llama a la funcion que actualiza los datos
        this.updatePicture(this.currentPicture.id)
      } else {
        this.postPicture()
      }
    }
  },
  computed: {
    ...mapState(['currentPicture']),
  }
}
</script>

<style>

</style>