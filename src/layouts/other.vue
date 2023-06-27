<template>
  <div class="flex my-5 mx-5 justify-between">
    <Avatar :size="72" />
    <SwitchMode />
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
