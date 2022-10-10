<template>
  <v-footer dark padless>
    <v-card flat tile width="100%" class="black white--text text-center">
      <v-card-text>
        <v-btn
          href="https://www.linkedin.com/in/eros-burastero-92323121a/"
          target="blank"
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
        <div class="text">
          Communicate with me to get my services, we can schedule a meeting.
        </div>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        <strong>
          CONTACT ME BY WHATSAPP
          <a
            href="https://wa.me/541173694471?text=Hi,%20my%20name%20is%20..."
            target="blank"
            ><v-icon>mdi-whatsapp</v-icon></a
          >
          — Erosburastero_it@hotmail.com
          <v-icon>mdi-email-outline</v-icon></strong
        >
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<style scoped>
a:visited {
  color: black;
  text-decoration: none;
}
.text {
  font-family: "Staatliches", cursive;
  font-size: 1.2rem;
}
</style>