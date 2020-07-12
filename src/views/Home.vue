<template>
  <div class="home home__container">
      <v-carousel
        continuous
        cycle
        class="pt-2"
      >
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
        ></v-carousel-item>
      </v-carousel>
      <header class="text-center header__container">
        <h1>»Stgo • FotoHistórico«</h1>
        <h2>¿Quieres conocer algunos lugares icónicos de Stgo en el pasado?</h2>
        <h4>Ven y descúbrelos</h4>
      </header>
      <!-- <section>
      </section> -->
    <Footer/>
  </div>
</template>

<script>
import Footer from '../components/Footer'

export default {
  data () {
    return {
      items: [
        {
          src: 'https://firebasestorage.googleapis.com/v0/b/chilefotos-d4ddd.appspot.com/o/Alameda%202020.jpg?alt=media&token=eb66abbd-abff-4e26-91d8-bccc4d83be73',
        },
        {
          src: 'https://firebasestorage.googleapis.com/v0/b/chilefotos-d4ddd.appspot.com/o/Estaci%C3%B3n%20Central%202020.jpg?alt=media&token=7f3cf5dd-bf72-4bdf-bacd-f766973b0245',
        },
        {
          src: 'https://firebasestorage.googleapis.com/v0/b/chilefotos-d4ddd.appspot.com/o/Estacion%20Mapocho%202020.jpg?alt=media&token=11c77f99-139a-4103-ab94-21c12d6f496e',
        },
        {
          src: 'https://firebasestorage.googleapis.com/v0/b/chilefotos-d4ddd.appspot.com/o/La%20Chimba%202020.jpg?alt=media&token=3b2a4d7c-cca5-4375-a095-47ebbd790af2',
        },
        {
          src: 'https://firebasestorage.googleapis.com/v0/b/chilefotos-d4ddd.appspot.com/o/Plaza%20Cementerio%20General%202020.jpg?alt=media&token=f25a4265-8a88-4064-8eef-338604f99139',
        },
        {
          src: 'https://firebasestorage.googleapis.com/v0/b/chilefotos-d4ddd.appspot.com/o/Plaza%20de%20Armas%202020.jpg?alt=media&token=5f393aa5-3c14-4d7f-a5dd-83a3bc1a4a46',
        },
        {
          src: 'https://firebasestorage.googleapis.com/v0/b/chilefotos-d4ddd.appspot.com/o/Portal%20Fernandez-Concha%202020.jpg?alt=media&token=15228eca-70a0-4e1d-9adb-a717abf3098a',
        },
        {
          src: 'https://firebasestorage.googleapis.com/v0/b/chilefotos-d4ddd.appspot.com/o/Blanco%20Encalada%20Av%202020.jpg?alt=media&token=6ad3a85d-0078-4478-ae90-639fb6b704d9',
        },
      ],
    }
  },
  name: 'Home',
  components: {
    Footer
  },
}
</script>