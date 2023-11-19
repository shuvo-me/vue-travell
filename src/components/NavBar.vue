<template>
  <nav class="bg-emerald-500 py-5 shadow-md">
    <div class="container mx-auto">
      <ul class="flex items-center gap-4">
        <li>
          <router-link class="text-white" to="/" active-class="font-bold">
            Home
          </router-link>
        </li>
        <li v-for="destination in destinations" :key="destination.name">
          <router-link
            class="text-white capitalize"
            :to="`/destination/${destination.id}`"
          >
            {{ destination.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import data from "@/data.json";
const destinations = data.destinations;
</script>

<style scoped>
.router-link-active {
}
</style>
