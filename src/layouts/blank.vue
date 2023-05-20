<template>
  <div class="flex my-5 mx-5 justify-between">
    <div class="p-9" />
    <SwitchMode />
  </div>
  <div>
    <slot />
  </div>
  <Footer />
</template>
<script>
import SwitchMode from "../components/SwitchMode.vue";
import Footer from "../components/Footer.vue";

export default {
  components: { SwitchMode, Footer },
};
</script>
