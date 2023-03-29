<template>
  <div v-if="Spinner.IsToggled" class="spinner">
    <Spinner class="spin" />
  </div>
</template>

<script>
import {useSpinnerStore} from "../stores/Spinner";

export default {
  setup() {
    const Spinner = useSpinnerStore()
    return {
      Spinner
    }
  },
}
</script>

<style lang="scss">
.spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9998;
}
.spin {
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9998;
}
</style>
