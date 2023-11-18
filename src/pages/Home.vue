<template>
  <div>Home</div>
  <div class="container">
    <router-link
      v-for="destination in destinations"
      :key="destination.id"
      :to="destination.slug"
    >
      <h2>{{ destination.name }}</h2>
      <img :src="`images/${destination.image}`" :alt="destination.name" />
    </router-link>
  </div>
</template>

<script setup>
import data from "@/data.json";
import { ref } from "vue";
const destinations = ref(data.destination);
</script>

