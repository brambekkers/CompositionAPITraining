<script setup>
import Navigation from "./components/Navigation.vue";

</script>

<template>
  <Navigation />
  <main>
    <router-view></router-view>
  </main>
</template>

<style>
main{
  height: 90vh;
  display: flex;
  align-items: center;
}

h1 {
  font-size: 2rem;
  line-height: 1rem;
  margin-bottom: 0rem;
}

.accent{
  color: #646cff;
}
</style>
