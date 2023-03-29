<template>
  <NuxtLayout name="login-layout">
    <br>
    <br>
    <br>
    <br>
    <v-sheet class="bg-deep-purple pa-14" max-width="100vh" rounded>
      <v-card class="mx-auto px-6 py-8" max-width="344">
        <v-form
            v-model="form"
            @submit.prevent="login"
        >
          <v-text-field
              prepend-inner-icon="mdi-mail"
              variant="outlined"
              v-model="Email"
              :readonly="loading"
              :rules="[required]"
              class="mb-2"
              clearable
              label="Email"
              type="email"
          ></v-text-field>

          <v-text-field
              prepend-inner-icon="mdi-key"
              variant="outlined"
              v-model="Password"
              :readonly="loading"
              :rules="[required]"
              clearable
              label="Password"
              type="password"
              placeholder="Enter your password"
          ></v-text-field>

          <br>

          <v-btn
              :disabled="!form"
              :loading="loading"
              block
              color="success"
              size="large"
              type="submit"
              variant="elevated"
          >
            Sign In
          </v-btn>
        </v-form>
      </v-card>
    </v-sheet>
  </NuxtLayout>
</template>

<script>
import axios from "axios";
import {useUserStore} from "../stores/User";
import {navigateTo} from "nuxt/app";
import {useToast} from "vue-toastification";
import {useSpinnerStore} from "../stores/Spinner";
import {useTenantStore} from "../stores/Tenant";
import AuthGuardianApi from "../services/api/AuthGuardian.api";

export default {
  name: 'login',
  setup() {
    definePageMeta({
      middleware: 'return-url'
    })
    const UserStore = useUserStore()
    const Tenant = useTenantStore()
    const Spinner = useSpinnerStore()
    const Toast = useToast()

    Spinner.untoggle()
    return {
      AuthGuardianApi,
      UserStore,
      Spinner,
      Toast,
      Tenant
    }
  },
  data() {
    return {
      form: false,
      loading: false,
      Email: '',
      Password: '',
    }
  },
  methods: {
    required (v) {
      return !!v || `Field is required`
    },
    async login() {
      this.Spinner.toggle()
      if(this.required()) { //TODO: Transform this to axios service && engine
        try {
          this.AuthGuardianApi.login(
              this.Email,
              this.Password
          ).then(async response => {
            this.Toast.success(response.data.message, {timeout: 1000})
            await this.UserStore.changeAuthState(response.data)
              if(this.Tenant.TenantName === 'AuthGuardian') {
                return navigateTo(`/`)
              }
              else {
                return navigateTo(`${this.Tenant.Return_URL}?id=${this.UserStore.getUser.id}&token=${this.UserStore.getToken}`, {external: true})
              }
          })
        } catch (e) { //TODO: Make this more generic
          this.Spinner.untoggle()
          switch (e.request.status) {
            case 401: this.Toast.error(e.response.data.message); break;
            case 500: this.Toast.error('Unexpected application error'); break;
          }
        }
      }
    }
  },
  mounted() {
    this.UserStore.$reset()
    this.Spinner.untoggle()
  }
}
</script>

<style lang="scss" >
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active{
  -webkit-box-shadow: 0 0 0 30px rgb(var(--v-theme-surface)) inset !important;
  &:not(:placeholder-shown) + label {
    font-size: 14px;
    transform: translate(-2px, -22px);
  }
}
</style>
