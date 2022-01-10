<template>
    <v-parallax
        id="top"
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
            <v-spacer/>
            <v-chip
                class="mx-2"
                @click="openInNewTab('https://www.linkedin.com/in/alexandre-boily-25950b207/')"
                link
                icon
                large
            >
              <v-icon large>mdi-linkedin</v-icon>
            </v-chip>
            <v-chip
                class="mx-2"
                @click="openInNewTab('https://github.com/AlexandreBoily')"
                link
                large
            >
              <v-icon large>mdi-github</v-icon>
            </v-chip>
            <v-chip
                class="mx-2"
                @click="openInNewTab('https://twitter.com/AlexandreBoily')"
                link
                large
            >
              <v-icon large>mdi-twitter</v-icon>
            </v-chip>
            <v-spacer/>
          </v-col>
        </v-row>
    </v-parallax>
</template>

<script>
  export default {
    name: 'Home',

    data: () => ({
      openInNewTab(url){
        window.open(url, '_blank').focus();
      }
    }),

    computed: {
      mountainBackground(){
        return require("@/assets/mountain-background.jpg")
      }
    },
  }
</script>
