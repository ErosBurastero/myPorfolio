<template>
  <v-expansion-panels focusable class="my-5">

    <v-expansion-panel>
      <v-expansion-panel-header class="red accent-3">HTML</v-expansion-panel-header>
      <v-expansion-panel-content class="red accent-1 font-weight-black">
        TAGS  —  META TAG  —  SEO  — HREF  — INPUTS  —  ETC...
      </v-expansion-panel-content>
    </v-expansion-panel>

      <v-expansion-panel>
      <v-expansion-panel-header class="blue accent-4">CSS</v-expansion-panel-header>
      <v-expansion-panel-content class="blue accent-1 font-weight-black">
        FLEX  —  GRID  — MOVIL FIRST OR RESPONSIVE DESIGN — BORDERS  — POSITIONS  — CURSORS  — ANIMATIONS  — VARIABLES  — ETC...
      </v-expansion-panel-content>
    </v-expansion-panel>

      <v-expansion-panel>
      <v-expansion-panel-header class="yellow accent-2">JAVASCRIPT</v-expansion-panel-header>
      <v-expansion-panel-content class="yellow accent-1 font-weight-black">
        VARIABLES  —  ARRAYS  — ARRAY OBJECT — ARRAY METHODS  — CONCAT  — CONDITIONALS  — FUNCTIONS  — OOP  — MATH OBJECT  — CONSOLE  — DOM  — ELEMENTS  — EVENTS  — TIMERS  — TRY AND CATCH —  CALLBACKS  — PROMISES — AWAIT AND ASYNC  — REQUEST HTTP  — FETCH  — JSON —  ETC... 
      </v-expansion-panel-content>
    </v-expansion-panel>

      <v-expansion-panel>
      <v-expansion-panel-header class="green accent-3">VUE.JS</v-expansion-panel-header>
      <v-expansion-panel-content class="green accent-1 font-weight-black">
        DIRECTIVES AND THEIR'S SHORTHANDS — DECLARATIVE RENDERING  — LIFE CICLES  —  EVENTS  —  COMPONENTS  — TEMPLATES  — FOLDERS  — VUE-ROUTER  — VUEX  — REQUEST HTTP  — VUE-DEVTOOLS — VUETIFY — DEPENDENCIES —  NPM/YARN  — NUXT.JS  — VERSION CONTROL WITH GIT  — TESTING WITH CYPRESS —  ETC...
      </v-expansion-panel-content>
    </v-expansion-panel>



    

    
    
  </v-expansion-panels>
</template>

<script>
  export default {
    data () {
      return {
        valueDeterminate: 100,
        valueDeterminate1: 100,
        valueDeterminate2: 80,
        valueDeterminate3: 80,
      }
    },
  }
</script>

<style scoped>
 .line{
   width: 500px;

 }
</style>