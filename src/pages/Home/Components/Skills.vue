<template>
  <div class="flex justify-center">
    <mdicon
      class="ml-5 mr-5 mt-5"
      :size="isMobile ? 30 : 40"
      v-for="(item, index) in talents"
      :key="index"
      :name="item.icon"
      :color="item.color"
      :style="'color:' + item.color"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      isMobile: this.functions.isMobile(),
      talents: [
        { icon: "vuejs", color: "#41B883" },
        { icon: "language-go", color: "#00ADD8" },
        { icon: "nuxt", color: "#41B883" },
      ],
    };
  },
};
</script>
