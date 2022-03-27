<template>
  <div :class="{change_color: scrollPosition > 0}"
    
    >
    <v-parallax dark src="developing.jpg" height="1050" class="pa-15"
    :class="{'d-flex' : $vuetify.breakpoint.xsAndDown}">
      <v-row justify="center">
        <v-col class="text-center">
          <h1>EROS BURASTERO</h1>
          <h4>JUNIOR FRONT-END DEVELOPER</h4>
        </v-col>
      </v-row>
    </v-parallax>

    <v-timeline :dense="$vuetify.breakpoint.smAndDown" class="pa-10">
      <v-timeline-item color="black" fill-dot right>
        <v-card>
          <v-card-title class="black">
            <v-icon dark size="42" class="mr-4"> mdi-laptop </v-icon>
            <h4 class="white--text">DEVELOPMENT EXPERIENCE</h4>
          </v-card-title>
          <v-container>
            <v-row>
              <v-col cols="12" md="10" align="center" class="font-weight-black">
                I HAVE 1 YEAR OF EXPERIENCE IN<strong class="red--text">
                  HTML</strong
                >
                , <strong class="blue--text">CSS</strong> ,
                <strong class="yellow--text">JAVASCRIPT</strong> AND
                <strong class="green--text">VUE.JS</strong>
              </v-col>
              <v-col class="hidden-sm-and-down text-right" md="2"> </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-timeline-item>

      <v-timeline-item color="white" fill-dot left>
        <v-card>
          <v-card-title class="black justify-end">
            <h4 class="white--text">ABOUT MYSELF</h4>
            <v-icon dark size="42"> mdi-account </v-icon>
          </v-card-title>
          <v-container>
            <v-row>
              <v-col cols="12" md="10" align="center" class="font-weight-black">
                MY NAME IS EROS BURASTERO, I'M FROM ARGENTINA AND I AM A
                FRONT-END DEVELOPER WITH 1 YEAR EXPERIENCE, I AM 21 YEARS OLD,
                AND MY CURRENT GOAL IS TO LEARN AS MUCH AS I CAN ABOUT EVERY
                SINGLE TECNOLOGY IN FRONT END AND THEN START TO LEARN BACK END
                TO REACH MY FINAL GOAL TO BE A FULL STACK DEVELOPER. <br />
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-timeline-item>

      <v-timeline-item color="black" fill-dot right>
        <v-card>
          <v-card-title class="black">
            <v-icon class="mr-4" dark size="42"> mdi-account-voice </v-icon>
            <h4 class="white--text">PERSONALITY</h4>
          </v-card-title>
          <v-container>
            <v-row>
              <v-col cols="12" md="10" align="center" class="font-weight-black">
                RESPONSABLE PERSON, I ALWAYS WORK WITH THE BEST PRESICION AND
                ORGANIZATION, I ALWAYS IMPROVE THE KNOWLEDGES OF THINGS THAT I
                FILL WITH PASION. <br />
                I HAVE A HIGH CAPACITY TO CREATE SOLUTIONS, AND WORK WITH A TEAM
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-timeline-item>

      <v-timeline-item color="white" fill-dot left>
        <v-card>
          <v-card-title class="black justify-end my-5">
            <h2 class="mr-4 white--text font-weight-light">GITHUB</h2>
            <v-icon dark size="42"> mdi-server-network </v-icon>
          </v-card-title>
          <v-container>
            <v-row>
              <v-col align="center" class="font-weight-black">
                <v-icon size="64"> </v-icon>
              </v-col>
              <v-col cols="12" md="10" align="center" class="font-weight-black">
                YOU CAN SEE MY REPOSITORIES ON
                <a
                  href="https://github.com/ErosBurastero"
                  target="blank"
                  class="github grey--text"
                  >GITHUB</a
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
       background-color: #3949AB;
       transition: all 5s;
   }

   
 h1{
      font-family: 'Mochiy Pop P One', sans-serif;
    }

h4{
        font-family: 'Mochiy Pop P One', sans-serif;

}

div{
font-family: 'Rowdies', cursive;

}
</style>
