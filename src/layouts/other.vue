<template>
  <div class="flex my-5 mx-5 justify-between">
    <Avatar :size="72" />
    <SwitchMode />
  </div>
  <div>
    <slot />
  </div>
</template>
<script>
import SwitchMode from "../components/SwitchMode.vue";
import Avatar from "../pages/Home/Components/Avatar.vue";
export default {
  components: { Avatar, SwitchMode },
};
</script>
