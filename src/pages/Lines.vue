<template>
  <v-expansion-panels focusable class="panels my-10 pa-10">
    <h1 class="my-5">TECHNOLOGY EXPERIENCE</h1>
    <v-expansion-panel v-for="(data, index) in information" :key="index">
      <v-expansion-panel-header
        :class="data.titleClass"
        >{{ data.title }}</v-expansion-panel-header
      >
      <v-expansion-panel-content
        :class="data.infoClass"
        align="center"
      >
        {{ data.info }}
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
<script>
export default {
  data() {
    return {
      information: [
        {
          title: "EROS BURASTERO",
          info: "JUNIOR FRONT-END DEVELOPER — LANGUAGES: ENGLISH (B2 AND IMPROVING) — SPANISH (NATIVE) — RUSSIAN (B2) — ITALIAN (B1)",
          titleClass: "purple darken-3 title font-weight-bold",
          infoClass: "purple lighten-1 font-weight-black",
        },
        {
          title: "HTML",
          info: "SEMANTIC HTML — META TAG — SEO — HREF — INPUTS — ETC...",
          titleClass: "red accent-3 title font-weight-bold",
          infoClass: "red accent-1 font-weight-black",
        },
        {
          title: "CSS",
          info: "FLEX — GRID — MOVIL FIRST OR RESPONSIVE DESIGN — BORDERS — POSITIONS — CURSORS — ANIMATIONS — VARIABLES — SCSS/SASS — ETC...",
          titleClass: "blue accent-4 title font-weight-bold",
          infoClass: "blue accent-1 font-weight-black",
        },
        {
          title: "JAVASCRIPT",
          info: "VARIABLES — ARRAYS — ARRAY OBJECT — ARRAY METHODS — CONCAT — CONDITIONALS — FUNCTIONS — OOP — MATH OBJECT — CONSOLE — DOM — ELEMENTS — EVENTS — TIMERS — TRY AND CATCH — CALLBACKS — PROMISES — ASYNC AND AWAIT — REQUEST HTTP — FETCH/AXIOS — JSON — ETC...",
          titleClass: "yellow accent-2 title font-weight-bold",
          infoClass: "yellow accent-1 font-weight-black",
        },
        {
          title: "VUE.JS",
          info: "DIRECTIVES AND THEIR'S SHORTHANDS — DECLARATIVE RENDERING — LIFE CICLES — EVENTS — COMPONENTS — TEMPLATES — FOLDERS — VUE-ROUTER — VUEX — FETCH/AXIOS — VUE-DEVTOOLS — VUETIFY — DEPENDENCIES — ETC...",
          titleClass: "green accent-3 title font-weight-bold",
          infoClass: "green accent-2 font-weight-black",
        },
        {
          title: "NUXT.JS",
          info: "FOLDERS BEHAVIOUR — REUSABLE COMPONENTS — LAYOUTS — PLUGINS — CYPRESS — SASS/SCSS — ROUTING — NUXT.CONFIG — SERVICES — VUE META — ETC...",
          titleClass: "green accent-2 title font-weight-bold",
          infoClass: "green accent-1 font-weight-black",
        },
        {
          title: "TESTING",
          info: "CYPRESS — JEST(LEARNING)",
          titleClass: "red title font-weight-bold",
          infoClass: "red lighten-1 font-weight-black",
        },
        {
          title: "DATABASE NOSQL",
          info: "mongoDB",
          titleClass: "green title font-weight-bold",
          infoClass: "green accent-4 font-weight-black",
        },
        {
          title: "TOOLS",
          info: "NPM/YARN — GIT/GIT-FLOW — GITHUB/GITLAB — SLACK — TRELLO — NOTION — WEBPACK — BABEL — VSCODE — SCSS/SASS — NETLIFY HOSTING — ETC...",
          titleClass: "black white--text title font-weight-bold",
          infoClass: "grey darken-2 font-weight-black",
        },
      ],
    };
  },
};
</script>

<style scoped>
.v-expansion-panel-content {
  font-family: "Staatliches", cursive;
  font-size: 1.5em;
}
h1 {
  font-family: "Mochiy Pop P One", sans-serif;
}
</style>