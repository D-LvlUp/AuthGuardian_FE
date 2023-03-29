<template>
  <div class="container">
    <div class="indicator">
      <div class="indicator-light"></div>
    </div>
    <div class="info-section">
      <label>Username:</label>
      <h3>{{ user.username }}</h3>
    </div>
    <v-divider :thickness="thickness" inset vertical></v-divider>
    <div class="info-section">
      <label>Fullname:</label>
      <h3>{{ user.fullname }}</h3>
    </div>
    <v-divider :thickness="thickness" inset vertical></v-divider>
    <div class="info-section">
      <label>Email:</label>
      <h3>{{ user.email }}</h3>
    </div>
    <v-divider :thickness="thickness" inset vertical></v-divider>
    <div class="info-section">
      <label>Role:</label>
      <h3>{{ user.role }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      thickness: 2
    }
  },
  props: {
    user: {}
  },
  computed: {
    ifActive() {
      return this.user.active ? 'lightgreen' : 'lightcoral'
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  min-height: 12vh;
  min-width: 40vh;
  max-width: 90vh;
  margin: 5px;
  border-radius: 25px;
  justify-content: space-evenly;
  color: rgba(var(--v-theme-background));
  background-color: rgba(var(--v-theme-on-surface));
}

.indicator {
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  min-height: 12vh;
  width: 30px;
  background-color: #f7f7f7;
  box-shadow: 5px 0 5px #e2e2e2;
  border-radius: 5px 0 0 5px;
}

.indicator-light {
  min-height: 8vh;
  width: 20px;
  background-color: v-bind(ifActive);
  //box-shadow: inset 0px 0px 5px 1px red;
  border-radius: 25px;
}

.info-section {
  display: flex;
  width: available;
  height: available;
  margin: 10px 10px 10px 20px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
</style>

