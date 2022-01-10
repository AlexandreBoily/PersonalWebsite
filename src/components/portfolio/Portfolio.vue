<template>
<v-container class="pa-16" id="portfolio">
  <v-row align-content="center">
    <v-spacer/>
    <v-col class="text-center">
      <h2>My Projects</h2>
    </v-col>
    <v-spacer/>
  </v-row>
  <v-row>
    <v-spacer/>
    <v-col align-self="center">
      <Project>
        <template #title>This Website!</template>
        <template #description>This website is forever a work in progress but is useful to showcase what I'm
          working on currently.</template>
        <template #links>
          <v-chip
              color="black"
              text-color="white"
              href="https://github.com/AlexandreBoily/PersonalWebsite"
              target="_blank"
          >
            <v-icon class="mr-2" >mdi-github</v-icon>
            Source
          </v-chip>
        </template>
        <template #technologies>
          <v-chip href="https://vuejs.org/" target="_blank">
            <v-avatar>
              <img :src="vueJsLogo">
            </v-avatar>
            Vue.js
          </v-chip>
          <v-chip href="https://vuetifyjs.com/en/" target="_blank">
            <v-avatar>
              <img :src="vuetifyLogo">
            </v-avatar>
            Vuetify
          </v-chip>
        </template>
      </Project>
    </v-col>
    <v-spacer/>
  </v-row>
</v-container>
</template>

<script>
import Project from "@/components/portfolio/Project";
export default {
  name: "Portfolio",
  components: {Project},

  computed: {
    vueJsLogo(){
      return require("@/assets/vuejs-logo.svg")
    },
    vuetifyLogo(){
      return require("@/assets/vuetify-logo.svg")
    }
  },
}
</script>

<style scoped>

</style>