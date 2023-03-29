<template>
  <div class="nav-container">
    <h2 class="app-title">AuthGuardianApi</h2>
    <div class="user-icon">
      <div class="inside-icon">
        <i class="icon" data-feather="user"></i>
      </div>
      <p>{{user.fullname}}</p>
      <p>{{user.username}}</p>
      <p>{{user.email}}</p>
      <p>{{user.role}}</p>
    </div>
  </div>
</template>

<script>

import {useUserStore} from "../stores/User";

export default {
  setup() {
    const UserStore = useUserStore()

    return {
      UserStore
    }
  },
  data() {
    return {
      user: this.UserStore.getUser
    }
  }
}
</script>

<style lang="scss">
.nav-container {
  width: 800px;
  height: 80px;
  display: flex;
  border-style: solid;
  border-color: #ffffff;
  color: #202020;
  background-color: #202020;
  align-content: center;
  justify-content: space-between;
  margin-left: -3px;
}

.app-title {
  margin-left: 20px;
  display: flex;
  color: white;
}

.user-icon {
  width: 60px;
  height: 60px;
  display: flex;
  background-color: white;
  border-radius: 50%;
  align-content: center;
  justify-content: center;
  margin-top: 10px;
  margin-right: 20px;
}

.user-icon:hover {
  background: #ffb937;
  color: #ffb937;
  -webkit-transition: all 1s ease;
  transition: all 1s ease;
  box-shadow: inset 0 0 2px 1px black;
}

.user-icon:hover .icon {
  color: #ffb937;
  -webkit-transition: all 1s ease;
  transition: all 1s ease;
}

.inside-icon {
  width: 50px;
  height: 50px;
  display: flex;
  margin-top: 5px;
  background-color: #202020;
  border-radius: 50%;
}

.icon {
  color: white;
  font-size: 30px;
}

.user-icon p {
  display: none;
}
</style>
