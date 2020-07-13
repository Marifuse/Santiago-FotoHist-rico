<template>
  <div>              
    <h2 class="text-center">Inventario de Recuerdos</h2>
    <v-simple-table fixed-header class="pa-5 d-flex justify-center">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Nombre</th>
            <th class="text-left">Imagen</th>
            <th class="text-left">Descripción</th>
            <th class="text-left">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="p in pictures" :key="p.id">
            <td>{{ p.data.title }}</td>
            <td><img :src="p.data.img" class="img__table"></td>
            <td class="pa-3">{{ p.data.description }}</td>
            <div class="d-flex mt-5 ml-3">
              <v-btn color="grey" fab small dark @click="editPicture(p.id)"><v-icon>mdi-pencil</v-icon></v-btn>
              <v-btn class='mx-2' color="dark" fab small dark @click="removePicture(p.id)"><v-icon>mdi-delete</v-icon></v-btn>
            </div>
          </tr>
        </tbody>
      </template>
    </v-simple-table>      
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions([ 'setPictures', 'deletePicture', 'setCurrentPicture']),
    removePicture(id) {
      let confirmation = confirm("¿Estás seguro de querer BORRAR el Recuerdo?")
      if (confirmation) {
        this.deletePicture(id)
        alert("Recuerdo Eliminado Exitosamente")
      }  
    },
    editPicture(id) {
      this.setCurrentPicture(id)
    }
  },
  computed: {
    ...mapState(['pictures'])
  },
  created() {
    this.setPictures()
  }
}
</script>

<style>
.img__table {
  width: 5em;
}
</style>