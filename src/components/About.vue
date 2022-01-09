<template>
<v-container
    fluid
    class="secondary">
  <v-row no-gutters >
    <v-spacer></v-spacer>
    <v-col align-start cols="4" class="ma-4">
      <v-card >
        <v-img width="680" height="680" :src="graduatePicturePath"></v-img>
      </v-card>
    </v-col>
    <v-col align-self="center">
      <v-card width="340">
        <v-card-title>About me</v-card-title>
        <v-card-text>
            I am a software engineer graduate from Laval University, interested in working with <b>Web Development, Cloud infrastructures and Video Games</b>.
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text>
          My
        </v-card-text>
      </v-card>
    </v-col>
    <v-spacer></v-spacer>
  </v-row>
</v-container>
</template>

<script>

export default {
  name: "Presentation",

  computed: {
    graduatePicturePath(){
      return require("@/assets/photo-finissant.jpg")
    }
  },

  data: () => ({

  }),
}
</script>

<style scoped>

</style>