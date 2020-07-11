<template>
  <div>
    <v-app-bar
      app
      color="grey darken-3"
      dark
    >

      <a href="home" class="nav__a"><v-toolbar-title>Ch ~•~ FH🔍</v-toolbar-title></a>

      <v-spacer></v-spacer>
      <v-btn
        text
        to="/admin"
      >
        <span class="mr-1">Admin</span>
        <v-icon>mdi-account</v-icon> 
      </v-btn>
      <v-btn
        text
        @click="logout"
      >
        <span class="mr-1">{{ !!currentUser ? 'Cerrar Sesión' : 'Iniciar Sesión' }}</span>
        <v-icon>mdi-lock</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
import Firebase from 'firebase'
import { mapState, mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions(['setCurrentUser']),
    logout() {
      Firebase.auth().signOut().then(() => {
        this.setCurrentUser(this.user)
        this.$router.push('/login')
      })
    }
  },
  computed: {
    ...mapState(['currentUser'])
  }  
}
</script>

<style>
.nav__a {
  text-decoration: none;
  color: #FFF !important;
  transition: .3s;
}
.nav__a:hover {
  color: rgb(185, 185, 185) !important;
}

</style>