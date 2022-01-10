<template>
<v-card class="secondary text-center">
  <v-card-title>
    <v-spacer/>
    <slot name="title"/>
    <v-spacer/>
  </v-card-title>
  <v-card-text>
    <slot name="description"/>
  </v-card-text>
  <v-row align-content="center" class="mb-4">
    <v-spacer/>
    <slot name="links"/>
    <v-spacer/>
  </v-row>
  <v-divider></v-divider>
  <v-subheader>Technologies Used :</v-subheader>
  <v-row align-content="center" class="mb-4">
    <v-spacer/>
    <slot name="technologies"/>
    <v-spacer/>
  </v-row>
</v-card>
</template>

<script>
export default {
  name: "Project"
}
</script>

<style scoped>

</style>