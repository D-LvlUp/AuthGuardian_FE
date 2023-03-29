<template>
  <v-app :theme="theme"> <!-- TODO: Add this variable to Pinia. -->
    <Loader/>
    <!--    App Bar-->
    <v-app-bar :elevation="1" align="center">
      <v-app-bar-title>
        <v-icon icon="mdi-shield-lock-outline"></v-icon>
        AUTH-GUARDIAN
      </v-app-bar-title>
    </v-app-bar>
    <v-app-bar collapse :elevation="1">
      <template v-slot:append>

<!--        Drawer-->
        <v-menu transition="fab-transition">
          <template v-slot:activator="{ props }">
            <v-btn
                icon="mdi-dots-grid"
                dark
                color="primary"
                v-bind="props"
            ></v-btn>
          </template>
          <br>
          <v-list density="compact" >
            <v-card-text color="primary">USER INFO:</v-card-text>
            <v-divider></v-divider>
            <v-list-item prepend-icon="mdi-account">
              <v-hover>
                <template v-slot:default="{ isHovering, props }">
                  <h4 v-bind="props">{{!isHovering ? user.fullname : 'Fullname'}}</h4>
                </template>
              </v-hover>
            </v-list-item>
            <v-list-item prepend-icon="mdi-card-account-details">
              {{user.username}}
              <v-tooltip activator="parent" location="right">Username</v-tooltip>
            </v-list-item>
            <v-list-item prepend-icon="mdi-account-tie-outline">
              {{user.role}}
              <v-tooltip activator="parent" location="right">Role</v-tooltip>
            </v-list-item>
            <v-list-item prepend-icon="mdi-email">
              {{user.email}}
              <v-tooltip activator="parent" location="right">Email</v-tooltip>
            </v-list-item>
            <v-list-item prepend-icon="mdi-clock">
              {{new Date(user.lastLogin).toLocaleString()}}
              <v-tooltip activator="parent" location="right">Last Login</v-tooltip>
            </v-list-item>
          </v-list>
        </v-menu>
<!--        End Drawer-->
        <v-app-bar-title>AuthGuardianApi</v-app-bar-title>
        <v-btn :icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'" @click="changeTheme"></v-btn>
      </template>
    </v-app-bar>


<!--    Content-->
    <v-main>
      <v-container align="center">
        <slot/>
      </v-container>
    </v-main>

<!--    Footer-->
    <Footer/>
  </v-app>
</template>

<script>
import { ref } from 'vue'
import {useUserStore} from "../stores/User";
import {useSpinnerStore} from "../stores/Spinner";

export default {
  setup() {
    const theme = ref('dark')
    const UserStore = useUserStore()
    const SpinnerStore = useSpinnerStore()

    function changeTheme () {
      theme.value = theme.value === 'light' ? 'dark' : 'light'
    }
    return {
      theme,
      changeTheme,
      UserStore,
      SpinnerStore
    }
  },
  data() {
    return {
      drawer: null,
      user: this.UserStore.getUser
    }
  },
  mounted() {
  }
}
</script>

<style lang="scss">
</style>
