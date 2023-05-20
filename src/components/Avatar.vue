<template>
  <router-link to="/" :replace="true">
    <div class="w-auto logo overflow-hidden">
      <img
      class="transition rounded-full"
      src="../assets/home_avatar.webp"
      alt="akifkadioglu"
      :width="size"
      :height="size"
      rel="preload"
    />
    </div>
    
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
  data() {
    return {};
  },
};
</script>
<style scoped>
.logo:hover {
  filter: drop-shadow(0 0 1em #ca8e0baa);
}
</style>
