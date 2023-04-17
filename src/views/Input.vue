<template>
  <div>
    <h2>
      
      <span class="accent">
        {{ fullName }}
      </span>,
      Change your name here
    </h2>
    <form>
      <input v-model="firstName" />
      <input v-model="lastName" />
      <button @click.prevent="useUserStore().reverseName(firstName, lastName)">Reverse Name</button>
    </form>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useUserStore } from "../stores/user.js";
const { firstName, lastName, fullName } = storeToRefs(useUserStore());
</script>

<style lang="scss" scoped>
form {
  display: flex;

  input, button {
    width: 100%;
    padding: 12px 20px;
    margin: 8px;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
}
</style>
