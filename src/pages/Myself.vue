<template>
  <div :class="{ change_color: scrollPosition > 0 }">
    <v-parallax
      dark
      src="developing.jpg"
      height="1050"
      class="pa-15"
      :class="{ 'd-flex': $vuetify.breakpoint.xsAndDown }"
    >
      <v-row justify="center">
        <v-col class="text-center">
          <h1>EROS BURASTERO</h1>
          <h4>JUNIOR FRONT-END DEVELOPER</h4>
        </v-col>
      </v-row>
    </v-parallax>

    <v-timeline :dense="$vuetify.breakpoint.smAndDown" class="pa-10">
      <v-timeline-item
        color="white"
        fill-dot
        v-for="(data, index) in cardData"
        :key="index"
      >
        <v-card>
          <v-card-title :class="data.titleClass">
            <h2>{{ data.title }}</h2>
            <v-icon dark size="42" class="ml-2">{{ data.icon }}</v-icon>
          </v-card-title>
          <v-container>
            <v-row>
              <v-col align="center">
                <v-icon size="64"> </v-icon>
              </v-col>
              <v-col cols="12" md="10" align="center" class="font-weight-black">
                {{ data.information }}
                <a
                  href="https://github.com/ErosBurastero"
                  target="blank"
                  class="github grey--text"
                  >{{ data.link }}</a
                >
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollPosition: null,
      cardData: [
        {
          icon: "mdi-laptop",
          title: "DEVELOPMENT EXPERIENCE",
          information: "I AM EXPERIENCED WORKING WITH VUE AND ITS FRAMEWORKS, MAINLY WITH NUXT, I'VE BUILT A LOT OF PROJECTS WITH IT AND I AM CURRENTLY WORKING IN A COMPANY WHICH USE IT",
          titleClass: "black white--text",
        },
        {
          icon: "mdi-account",
          title: "ABOUT MYSELF",
          information:
            "MY NAME IS EROS BURASTERO. I'M AN ARGENTINIAN FRONT-END DEVELOPER. I'M 21 YEARS OLD. MY CURRENT GOAL IS TO BECOME A FULLSTACK DEVELOPER. AT THE MOMENT, I'M WORKING ON MY SKILLS INFRONT-END DEVELOPMENT. I'M PLANNING TO CONTINUE LEARNINGBACK-END TECHNOLOGIES",
          titleClass: "black justify-end white--text",
        },
        {
          icon: "mdi-account-voice",
          title: "PERSONALITY",
          information:
            "I'M A RESPONSIBLE PERSON. I WORK WITH PRESICION AND ORGANIZATION. I'M ALWAYS WORKING ON IMPROVING MY KNOWLEDGE IN FRONT-END TECHNOLOGIES. I HAVE A HIGH CAPACITY OF CREATING SOLUTIONS, AND WORKING WITH A TEAM",
          titleClass: "black white--text",
        },
        {
          icon: "mdi-github",
          title: "GITHUB",
          information: "YOU CAN SEE MY REPOSITORIES AND ACTIVITIES ON",
          link: "GITHUB",
          titleClass: "black justify-end my-5 white--text font-weight-light",
        },
      ],
    };
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },

  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
};
</script>

<style>
.github {
  text-decoration: none;
}

.change_color {
  background-color: #3949ab;
  transition: all 5s;
}

h1 {
  font-family: "Mochiy Pop P One", sans-serif;
}

h4 {
  font-family: "Mochiy Pop P One", sans-serif;
}

div {
  font-family: "Rowdies", cursive;
}
</style>
