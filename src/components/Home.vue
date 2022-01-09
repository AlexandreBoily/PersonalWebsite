<template>
    <v-parallax
        :src="mountainBackground"
        height=950>
        <v-row justify="center" align="center">
          <v-col class="mb-4 text-center">
            <h1 class="display-2 font-weight-bold mb-3">
              Hi!
            </h1>
            <h2 class="text-h2 mb-3">
              My name is Alexandre, and welcome to my personal website!
            </h2>
          </v-col>
        </v-row>
    </v-parallax>
</template>

<script>
  export default {
    name: 'Home',

    computed: {
      mountainBackground(){
        return require("@/assets/mountain-background.jpg")
      }
    },
  }
</script>
