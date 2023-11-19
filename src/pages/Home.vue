<template>
  <div class="container mx-auto">
    <h1 class="mt-10">All destinations</h1>
    <div class="grid grid-cols-4 gap-5 mt-5">
      <router-link
        v-for="destination in destinations"
        :key="destination.id"
        :to="destination.slug"
      >
        <h2 class="mb-3">{{ destination.name }}</h2>
        <img :src="`images/${destination.image}`" :alt="destination.name" />
      </router-link>
    </div>
  </div>
</template>

<script setup>
import data from "@/data.json";

import { ref } from "vue";
const destinations = ref(data.destinations);
console.log({ data: destinations.value });
</script>

