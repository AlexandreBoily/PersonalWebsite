<template>
  <v-app>
    <NavBar ></NavBar>
    <v-main>
      <Home />
      <About/>
    </v-main>
  </v-app>
</template>

<script>
import Home from '@/components/Home';
import About from "@/components/About";
import NavBar from "@/components/NavBar";

export default {
  name: 'App',

  components: {
    NavBar,
    About,
    Home,
  },

  data: () => ({
  }),
};
</script>
