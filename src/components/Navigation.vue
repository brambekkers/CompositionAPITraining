<template>
     <nav>
    <router-link class="link" to="/">Home</router-link> | 
    <router-link class="link" to="/input">Input name</router-link> | 
    <router-link class="link" :to="`/random/${randomNum}`">Random route</router-link>
  </nav>
</template>

<script setup>
const randomNum = Math.floor(Math.random() * 10000);

</script>

<style lang="scss" scoped>
nav{
  display: flex;
  justify-content: center;
  align-items: center;

  .link{
    margin: 0.5rem;
  }
}
</style>