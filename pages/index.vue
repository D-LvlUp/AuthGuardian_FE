<template>
  <NuxtLayout name="default-page">
    <br>
    <br>
    <br>
    <br>
    <v-sheet
        min-height="50vh"
        min-width="40vh"
        max-width="80vh"
        :elevation="10"
        rounded="lg"
    >
      <v-carousel
          cycle
          hide-delimiter-background
      >
        <v-carousel-item cover>
          <ModuleCard url="/users" icon="mdi-account-group" :title="usersTitle" :description="userDesc"/>
        </v-carousel-item>

        <v-carousel-item cover>
          <ModuleCard url="/tenants" icon="mdi-shield-home-outline" title="Tenants" description="Module to see and edit all the tenants registered in AuthGuardian."  />
        </v-carousel-item>
      </v-carousel>
    </v-sheet>
  </NuxtLayout>
</template>


<script>
import {useSpinnerStore} from "../stores/Spinner";
import Spinner from "../components/Spinner";

export default {
  setup() {
    definePageMeta({
      middleware: 'auth'
    })
    const Spinner = useSpinnerStore()
    return {
      Spinner
    }
  },
  name: 'IndexPage',
  data() {
    return {
      usersTitle: 'Users',
      userDesc: 'Module to see and edit all the users registered in AuthGuardian.'
    }
  },
  mounted() {
    this.Spinner.untoggle()
  }
}
</script>

<style lang="scss">

</style>
