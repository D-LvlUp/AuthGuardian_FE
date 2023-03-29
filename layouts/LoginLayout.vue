<template>
  <v-app :theme="theme">
    <Loader/> <!--Spinner Control-->
    <!--    App Bar-->
    <v-app-bar :elevation="1" align="center">
      <v-app-bar-title>
        <v-icon icon="mdi-shield-lock-outline"></v-icon>
        AUTH-GUARDIAN
      </v-app-bar-title>
    </v-app-bar>
    <v-app-bar collapse :elevation="1">
      <template v-slot:append>
        <v-btn icon="mdi-github" @click="toGithub" ></v-btn>
        <v-btn :icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'" @click="changeTheme"></v-btn>
      </template>
    </v-app-bar>
    <v-main>
      <v-container align="center">
        <slot/>
      </v-container>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import { ref } from 'vue'
import {navigateTo} from "nuxt/app";

export default {
  setup() {
    const theme = ref('dark')

    function changeTheme () {
      theme.value = theme.value === 'light' ? 'dark' : 'light'
    }
    function toGithub() {
      return navigateTo('https://github.com/Rafaelcv7', {external: true})
    }
    return {
      theme,
      changeTheme,
      toGithub
    }
  },
  mounted() {
  }
}
</script>

<style lang="scss" scoped>

</style>
