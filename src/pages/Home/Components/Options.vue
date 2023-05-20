<template>
  <div class="flex justify-evenly my-5">
    <button
      v-for="(item, index) in pages"
      :key="index"
      style="width: 90px"
      @click="goToPage(item.name)"
      class="transition bg-white hover:drop-shadow-lg text-center dark:bg-zinc-800 rounded-lg px-2 py-8 ring-1 ring-slate-900/5"
    >
      <h3
        class="font-mono text-slate-900 dark:text-white text-base font-medium tracking-tight"
      >
        {{ item.title }}
      </h3>
    </button>
  </div>
</template>
<script>
import DividerContent from "../../../components/DividerContent.vue";

export default {
  components: { DividerContent },
  data() {
    return {
      pages: [
        { title: "Posts", name: this.routeName.POSTS },
        { title: "Resume", name: this.routeName.RESUME },
        { title: "Projects", name: this.routeName.PROJECTS },
      ],
    };
  },
  methods: {
    goToPage(name) {
      this.$router.push({ name: name });
    },
  },
};
</script>
