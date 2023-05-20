<template>
  <router-link to="/" :replace="true">
    <img
      class="transition logo rounded-full"
      v-lazy="{ src: src }"
      alt="akifkadioglu"
      :width="size"
      :height="size"
      rel="preload"
    />
  </router-link>
</template>

<script>
import image from './../assets/home_avatar.webp'

export default {
  name: "Home-Avatar",
  props: {
    size: {
      type: Number,
      default: 200,
    },
  },
  data() {
    return {
      src:image
    };
  },
};
</script>
<style scoped>
.logo {
  max-width: 100%;
  max-height: 100%;
}
.logo:hover {
  filter: drop-shadow(0 0 1em #ca8e0baa);
}
</style>
