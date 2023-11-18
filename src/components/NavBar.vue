<template>
  <nav class="bg-emerald-500 py-5 shadow-md">
    <div class="container mx-auto">
      <ul class="flex items-center gap-4">
        <li>
          <router-link
            class="text-white font-bold"
            to="/"
            active-class="text-red-500"
          >
            Home
          </router-link>
        </li>
        <li>
          <router-link class="text-white font-bold" to="/brazil">
            Brazil
          </router-link>
        </li>
        <li>
          <router-link class="text-white font-bold" to="/hawaii">
            Hawaii
          </router-link>
        </li>
        <li>
          <router-link class="text-white font-bold" to="/jamaica">
            Jamaica
          </router-link>
        </li>
        <li>
          <router-link class="text-white font-bold" to="/panama">
            Panama
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
</script>
