<template>
  <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="black white--text text-center"
    >
      <v-card-text>
        <v-btn href="https://www.linkedin.com/in/eros-burastero-92323121a/" target="blank"
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
            <div class="subtitle-1"> i've created this portfolio with the purpose of showing my development content with front-end, version control, testing, etc... . I'm currently looking for a job in front-end development, if you are interesed in getting my services, contact me. We could have an interview.</div> 
            <div class="d-flex justify-center"></div>
              

          

      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        <strong> CONTACT ME BY WHATSAPP  <a href="https://wa.me/541157532000?text=Hi,%20my%20name%20is%20..." target="blank"><v-icon>mdi-whatsapp</v-icon></a></strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-linkedin',
      ],
    }),
  }
</script>

<style scoped>
a:visited {
    color: black;
}
</style>