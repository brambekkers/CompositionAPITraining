<template>
  <div>
    <img :src="logo" />
    <h1>Welcome to Composition API training</h1>
    <p>A hands on training</p>

    <h2>
      Welcome
      <span class="accent">
        {{ fullName }}
      </span>
    </h2>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useUserStore } from "../stores/user";
import logo from "../assets/vue.svg";

const { fullName } = storeToRefs(useUserStore());
</script>

<style lang="scss" scoped>
img {
  width: 200px;
}
</style>
