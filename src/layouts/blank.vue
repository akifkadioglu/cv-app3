<template>
  <div class="flex mt-11 mx-5 justify-between">
    <button
      aria-label="buy me a coffee"
      data-te-toggle="tooltip"
      title="buy me a coffee"
      class="logo"
      @click="functions.goToUrl('https://www.buymeacoffee.com/akifkadioglu')"
    >
      <img
        class="h-16"
        height="50"
        width="45"
        src="https://raw.githubusercontent.com/akifkadioglu/cv-app3/main/public/img/buymecoffee.webp"
        alt="buy me a coffee"
      />
    </button>
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
<style scoped>
.logo {
  filter: drop-shadow(0 0 2em #ffffff);
}
</style>
