<template>
  <v-app-bar
      color="white"
      app
      dense
      elevate-on-scroll
  >
    <v-app-bar-title
        class="ma-2 text-no-wrap"
        style="cursor: pointer"
    >
      <div @click="$router.replace({name:'Home', hash:'#top'}).catch(() => {})">
        Alexandre Boily
      </div>
    </v-app-bar-title>
    <v-spacer></v-spacer>
    <v-btn
        depressed
        class="ma-1"
        :to="{
          name: 'Home',
          hash: '#about'
        }"
        replace
    >
      About Me
    </v-btn>
    <v-btn
        depressed
        class="ma-1"
        style="background-color: white"
        :to="{
          name: 'Home',
          hash: '#portfolio'
        }"
        replace
    >
      Portfolio
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppBar",

  data: () => ({
    goHome(){
      this.$router.replace('/')
    }
  }),
}
</script>

<style scoped>

</style>