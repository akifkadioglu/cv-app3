<template>
  <div class="flex pt-1 mx-5 justify-between">
    <Avatar :size="16" />
    <SwitchMode />
  </div>
  <div>
    <slot />
  </div>
</template>
<script>
import Avatar from "../components/Avatar.vue";
import SwitchMode from "../components/SwitchMode.vue";
export default {
  components: { SwitchMode, Avatar },
};
</script>
