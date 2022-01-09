<template>
  <v-app-bar
      color="white"
      app
      dense
      elevate-on-scroll
  >
    <v-app-bar-title class="ma-2">Alexandre Boily</v-app-bar-title>
    <v-spacer></v-spacer>
    <v-btn
        depressed class="ma-1"
        :to="{
          name: 'Home',
          hash: '#about'
        }"
    >
      About Me
    </v-btn>
    <v-btn depressed class="ma-1" style="background-color: white">Portfolio</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppBar"
}
</script>

<style scoped>

</style>