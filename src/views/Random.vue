<template>
  <div>
  <h1>This pages has a random ID: 
  <span class="accent">
    {{ $route.params.id }}
  </span></h1>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.accent{
  color: #646cff;
}
</style>
