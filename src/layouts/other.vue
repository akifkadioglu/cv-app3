<template>
  <div class="flex my-5 mx-5 justify-between items-center">
    <Avatar :size="72" />
    <div class="mx-auto text-3xl font-mono font-bold">{{ $route.name }}</div>
    <SwitchMode class="mx-6" />
  </div>
  <div>
    <slot />
  </div>
  <vue3-snackbar reverse left bottom :duration="4000" />
</template>
<script>
import Avatar from "../components/Avatar.vue";
import SwitchMode from "../components/SwitchMode.vue";
import { Vue3Snackbar } from "vue3-snackbar";

export default {
  components: { SwitchMode, Avatar, Vue3Snackbar },
};
</script>
