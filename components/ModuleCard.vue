<template>
  <v-row
      align="center"
      justify="center"
      align-content="center"
  >
    <v-col cols="12">
      <br>
      <br>
      <br>
      <v-hover
          v-slot="{ isHovering, props }"
      >
        <v-card
            :elevation="isHovering ? 12 : 20"
            :color="isHovering ? 'primary' : 'rgb(var(--v-theme-surface))'"
            class="mx-auto"
            height="350"
            max-width="500"
            v-bind="props"
            @click="redirect"
        >
          <br>
          <br>
          <v-icon :icon="icon" size="100"></v-icon>
          <h2>{{title.toUpperCase()}}</h2>
          <v-card-text class="my-4 text-center text-h6">
            {{description}}
          </v-card-text>
        </v-card>
      </v-hover>
    </v-col>
  </v-row>
</template>

<script>
import {navigateTo} from "#app";
import {useSpinnerStore} from "../stores/Spinner";

export default {
  setup() {
    const Spinner = useSpinnerStore()

    return {
      Spinner
    }
  },
  props: {
    icon: {
      default: 'user',
      type: String
    },
    title: {
      default: 'Title',
      type: String
    },
    description: {
      default: 'Default description of the module',
      type: String
    },
    url: {
      default: '/',
      type: String
    }
  },
  methods: {
    redirect() {
      this.Spinner.toggle()
      return navigateTo(this.url)
      this.Spinner.untoggle()
    }
  },
}
</script>

<style lang="scss" scoped>

</style>

