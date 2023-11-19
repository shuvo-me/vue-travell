<template>
  <nav class="bg-emerald-500 py-5 shadow-md">
    <div class="container mx-auto">
      <ul class="flex items-center gap-4">
        <li>
          <router-link class="text-white" to="/" active-class="font-bold">
            Home
          </router-link>
        </li>
        <li>
          <router-link class="text-white" to="/brazil" active-class="font-bold">
            Brazil
          </router-link>
        </li>
        <li>
          <router-link class="text-white" to="/hawaii" active-class="font-bold">
            Hawaii
          </router-link>
        </li>
        <li>
          <router-link
            class="text-white"
            to="/jamaica"
            active-class="font-bold"
          >
            Jamaica
          </router-link>
        </li>
        <li>
          <router-link class="text-white" to="/panama" active-class="font-bold">
            Panama
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
</script>

<style scoped>
.router-link-active {
}
</style>
