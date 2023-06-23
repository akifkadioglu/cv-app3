<template>
  <router-link to="/">
    <img
      class="transition logo rounded-full"
      src="../assets/avatar.webp"
      alt="akifkadioglu"
      :width="size"
      :height="size"
      rel="preload"
    />
  </router-link>
</template>

<script>

export default {
  name: "Home-Avatar",
  props: {
    size: {
      type: Number,
      default: 200,
    },
  },
};
</script>
<style scoped>
.logo:hover {
  filter: drop-shadow(0 0 1em #23b3cdaa);
}
</style>
