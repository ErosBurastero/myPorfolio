<template>
  <v-app>
    <v-app-bar
      app
      color="black"
      dark
    >
     <Tab />
    
    </v-app-bar>

    <v-main class="indigo lighten-4">
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

<style scoped>
 div{
  user-select: none;
}

@import url('https://fonts.googleapis.com/css2?family=Mochiy+Pop+P+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Mochiy+Pop+P+One&family=Rowdies:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Mochiy+Pop+P+One&family=Rowdies:wght@300&family=Staatliches&display=swap');

</style>

