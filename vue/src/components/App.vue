<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from "./AppHeader";

export default {
  components: {
    AppHeader
  }
};
</script>