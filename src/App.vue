<template>
  <v-app>
    <v-app-bar
      app
      color="black"
      dark
    >
     <Tab />
    
    </v-app-bar>

    <v-main class="purple darken-4">
      <router-view />
    

    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Tab from './components/Tab.vue';
import Footer from './components/Footer.vue'


export default {
  name: 'App',

  components: {
  
   Tab,
   Footer,
   
  },

  data: () => ({
    
  }),
};
</script>
