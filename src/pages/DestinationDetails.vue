<template>
  <div class="container mx-auto">
    <h2 class="my-5">Destination Details:{{ destinationDetails.name }}</h2>
    <div v-if="destinationDetails" class="flex items-center gap-5">
      <img
        :src="`/images/${destinationDetails.image}`"
        :alt="destinationDetails.name"
      />
      <p>
        {{ destinationDetails.description }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed, toRaw } from "vue";
import destinationData from "@/data.json";
import { useRouter, useRoute } from "vue-router";
const destinationId = computed(() => useRoute().params.id);
const destinationDetails = computed(() => {
  return destinationData.destinations.find(
    (destination) => destination.id == destinationId.value
  );
});
console.log({ check: toRaw(destinationDetails) });
</script>
