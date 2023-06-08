<template>
  <div class="flex mt-11 mx-5 mt-16 justify-end">
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