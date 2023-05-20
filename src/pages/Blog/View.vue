<template>
  <div v-if="posts.length == 0" class="mt-10 text-center font-mono">
    I haven't written anything yet 😞
  </div>
  <div class="mt-10 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
    <div
      v-for="(item, index) in posts"
      :key="index"
      class="col-span-1 bg-white mb-10 dark:bg-zinc-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-sm"
    >
      <h3
        class="font-mono text-slate-900 dark:text-white text-base font-medium tracking-tight"
      >
        {{ item.title }}
      </h3>
      <p class="font-mono text-slate-500 dark:text-slate-400 mt-2 text-sm">
        {{ item.summary }}
      </p>
      <div class="flex justify-end mt-5">
        <button
          @click="functions.goToPage(routeName.BLOG_POST, { name: item.path })"
          class="rounded-full bg-zinc-400 px-6 py-1"
        >
          Read
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {
          title: "title 1",
          summary: "summary",
          path: "text",
        },
      ],
    };
  },
};
</script>
