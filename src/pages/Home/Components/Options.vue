<template>
  <div class="flex justify-evenly">
    <button
      v-for="(item, index) in pages"
      :key="index"
      style="width: 80px"
      @click="functions.goToPage(item.name)"
      class="transition hover:shadow-lg dark:hover:shadow-zinc-950 space-y-3 text-center dark:bg-zinc-800 bg-zinc-50 rounded-sm py-7"
    >
      <mdicon :class="'flex justify-center ' + item.color" :name="item.icon" />
      <div
        class="transition hover:blur-sm font-mono text-sm text-slate-900 dark:text-white text-base font-medium tracking-tight"
      >
        {{ item.title }}
      </div>
    </button>
  </div>
</template>
<script>
import DividerContent from "../../../components/DividerContent.vue";

export default {
  data() {
    return {
      pages: [
        {
          title: "Blog",
          name: this.routeName.BLOG,
          icon: "script-text",
          color: "text-red-600 dark:text-red-400",
        },
        {
          title: "Resume",
          name: this.routeName.RESUME,
          icon: "account-tie",
          color: "text-orange-600 dark:text-orange-400",
        },
        {
          title: "Projects",
          name: this.routeName.PROJECTS,
          icon: "bullseye-arrow",
          color: "text-sky-600 dark:text-sky-400",
        },
      ],
    };
  },
  components: { DividerContent },
};
</script>
