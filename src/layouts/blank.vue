<template>
  <div class="flex my-5 mx-5 justify-between">
    <div class="p-9" />
    <SwitchMode />
  </div>
  <div>
    <slot />
  </div>
</template>
<script>
import SwitchMode from "../components/SwitchMode.vue";

export default {
  components: { SwitchMode },
};
</script>
