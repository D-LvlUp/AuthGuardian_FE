<template>
  <NuxtLayout name="default-page">
    <br>
    <br>
    <br>
    <v-sheet
        min-height="60vh"
        min-width="40vh"
        max-width="90vh"
        :elevation="10"
        rounded="lg"
    >
      <v-list>
        <v-card-text color="primary"><h2>USERS INFO:</h2></v-card-text>
        <v-divider></v-divider>
        <v-list-item v-for="user in usersData">
          <UserCard :user="user" />
        </v-list-item>
      </v-list>
    </v-sheet>
  </NuxtLayout>
</template>

<script>
  import {useUserStore} from "../stores/User";
  import {useToast} from "vue-toastification";
  import axios from "axios";
  import UserCard from "../components/UserCard";
  import {useSpinnerStore} from "../stores/Spinner";
  import AuthGuardianApi from "../services/api/AuthGuardian.api";

  export default {
    components: {UserCard},
    setup() {
      const UserStore = useUserStore()
      const Spinner = useSpinnerStore()
      const Toast = useToast()

      definePageMeta({
        middleware: 'auth'
      })

      return {
        UserStore,
        Spinner,
        Toast
      }
    },
    data() {
      return {
        usersData: []
      }
    },
    async mounted() {
      try {
        AuthGuardianApi.getAllUsers()
            .then(async response => {
              this.usersData = response
            })
      } catch (e) {
        this.Toast.error(e.message)
      }
      this.Spinner.untoggle()
    }
  }
</script>

<style lang="scss" scoped>
</style>
