<template>

  <div class="loader-wrapper">
    <div class="loader">
      <div class="loader loader-inner"></div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'VSpinner',
}
</script>

<style lang="scss" scoped>

.loader-wrapper {
  width: 200px;
  height: 200px;
  z-index: 9999;
}

.loader {
  z-index: 9999;
  position: inherit;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border:15px solid #162534;
  border-top-color: #4bc8eb;
  border-bottom-color: #f13a8f;
  border-radius: 50%;
  animation: rotate 5s linear infinite;
}

.loader-inner {
  border-top-color: #36f372;
  border-bottom-color: #fff;
  animation-duration: 2.5s;
}

@keyframes rotate {
  0% {
    transform: scale(1) rotate(360deg);
  }
  50% {
    transform: scale(.8) rotate(-360deg);
  }
  100% {
    transform: scale(1) rotate(360deg);
  }
}

</style>
