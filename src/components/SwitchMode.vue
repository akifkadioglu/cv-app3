<script setup>
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <button
    @click="toggleDark()"
    class="transition ease-in-out delay-50 hover:scale-125 duration-300"
  >
    <span class="material-icons dark:text-white"> light_mode </span>
  </button>
</template>
