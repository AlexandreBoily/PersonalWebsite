<template>
  <v-app>
    <NavBar ></NavBar>
    <v-main>
      <Home />
      <About/>
      <Portfolio/>
    </v-main>
    <v-footer padless>
      <v-col
        class="text-center">
        @ {{currentYear}} Alexandre Boily
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import Home from '@/components/Home';
import About from "@/components/About";
import NavBar from "@/components/NavBar";
import Portfolio from "@/components/portfolio/Portfolio";

export default {
  name: 'App',

  components: {
    Portfolio,
    NavBar,
    About,
    Home,
  },

  computed: {
    currentYear(){
      return new Date().getFullYear()
    }
  }
};
</script>
