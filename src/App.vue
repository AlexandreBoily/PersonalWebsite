<template>
  <v-app>
    <NavBar ></NavBar>
    <v-main>
      <Home />
      <Presentation/>
    </v-main>
  </v-app>
</template>

<script>
import Home from '@/components/Home';
import Presentation from "@/components/Presentation";
import NavBar from "@/components/NavBar";

export default {
  name: 'App',

  components: {
    NavBar,
    Presentation,
    Home,
  },

  data: () => ({
  }),
};
</script>
