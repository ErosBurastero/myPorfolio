<template>
<div>
  <v-parallax
    dark
    src="developing.jpg"
    height="1050"
    class=" pa-15" 
  >
    <v-row
      
      justify="center"
    >
      <v-col
        class="text-center"
        
      >
        <h1 class="display-2 black--text">
           EROS BURASTERO
        </h1>
        <h4 class="headline">
          JUNIOR FRONT-END DEVELOPER
        </h4>

      </v-col>
    </v-row>
  </v-parallax> 

   <v-timeline :dense="$vuetify.breakpoint.smAndDown">
    <v-timeline-item
      color="purple lighten-2"
      fill-dot
      right
    >
      <v-card>
        <v-card-title class="black ">
          <v-icon
            dark
            size="42"
            class="mr-4"
          >
            mdi-laptop
          </v-icon>
          <h4 class="white--text"> 
              DEVELOPMENT EXPERIENCE
          </h4>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col
              cols="12"
              md="10"
              align="center"
              class="font-weight-black"
            >
              I HAVE 1 YEAR OF EXPERIENCE IN<strong class="red--text "> HTML</strong> , <strong class="blue--text">CSS</strong> ,  <strong class="yellow--text">JAVASCRIPT</strong> AND <strong class="green--text">VUE.JS</strong>
            </v-col>
            <v-col
              class="hidden-sm-and-down text-right"
              md="2"
            >
             
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      color="amber lighten-1"
      fill-dot
      left
      small
    >
      <v-card>
        <v-card-title class="black justify-end">
          <h4 class="white--text">
            ABOUT MYSELF
          </h4>
          <v-icon
            dark
            size="42"
          >
            mdi-account
          </v-icon>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col    cols="12"
              md="10"
              align="center"
              class="font-weight-black"  >
                MY NAME IS EROS BURASTERO, I'M FROM ARGENTINA AND I AM A FRONT-END DEVELOPER WITH 1 YEAR EXPERIENCE,  I AM 21 YEARS OLD, AND MY CURRENT GOAL IS TO LEARN AS MUCH AS I CAN ABOUT EVERY SINGLE TECNOLOGY IN FRONT END AND THEN START TO LEARN BACK END TO REACH MY FINAL GOAL TO BE A FULL STACK DEVELOPER. <br> 
            </v-col>
         
          </v-row>
        </v-container>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      color="cyan lighten-1"
      fill-dot
      right
    >
      <v-card>
        <v-card-title class="black ">
          <v-icon
            class="mr-4"
            dark
            size="42"
          >
            mdi-email-outline
          </v-icon>
          <h4 class=" white--text ">
            PERSONALITY
          </h4>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col
              cols="12"
              md="10"
              align="center"
              class="font-weight-black"
        
            >
            I'M VERY DEMANDING WITH MYSELF, I ALWAYS WORK WITH THE BEST PRESICION AND PROLIXITY, MY PERSONALITY IS ALWAYS IMPROVE THE KNOWLEDGES OF THINGS THAT I FILL WITH PASION. <br> I HAVE A HIGH CAPACITY TO CREATE SOLUTIONS, AND WORK WITH DIFFERENTS DEVELOPERS  
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      color="red lighten-1"
      fill-dot
      left
      small
    >
      <v-card>
        <v-card-title class="black justify-end">
          <h2 class="mr-4 white--text font-weight-light">
            GITHUB
          </h2>
          <v-icon
            dark
            size="42"
          >
            mdi-server-network
          </v-icon>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col
              align="center"
              class="font-weight-black"
            >
              <v-icon size="64">
                
              </v-icon>
            </v-col>
            <v-col
               cols="12"
              md="10"
              align="center"
              class="font-weight-black"
            >
            YOU CAN SEE MY REPOSITORIES ON <a href="https://github.com/ErosBurastero" target="blank" class="github grey--text">GITHUB</a>            </v-col>
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
           
        }
    }
}
</script>

<style>
.github {
    text-decoration: none;
}


</style>