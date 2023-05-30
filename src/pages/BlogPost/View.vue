<template>
  <div>
    <button
      class="my-10 flex items-center font-bold font-mono hover:underline"
      @click="$router.replace({ name: routeName.BLOG })"
    >
      <mdicon :size="25" name="arrow-left" aria-label="back button" />
      <span class="mx-2"> Other Posts </span>
    </button>
    <div v-if="_post == null" class="flex justify-center my-5">
      <div class="w-7 h-7 border-2 border-gray-300 animate-spin"></div>
    </div>
    <div class="font-mono font-bold text-2xl capitalize flex justify-center">
      {{ post.title }}
    </div>

    <p class="py-5">
      {{ post.content }}
    </p>

    <p
      v-if="_post != null"
      class="flex items-center justify-end font-mono text-sm"
    >
      <button
        aria-label="button"
        class="rounded-full bg-zinc-200 dark:bg-zinc-700 px-6 mx-2 py-1"
      >
        view: {{ viewCount }}
      </button>
      {{ new Date(post.created_at.seconds * 1000).toLocaleString() }}
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    post() {
      if (this._post != null) {
        return {
          title: this._post.title,
          content: this._post.content,
          created_at: this._post.created_at,
        };
      }
      return { title: "", content: "", created_at: new Date() };
    },
  },

  data() {
    return {
      _post: null,
      viewCount: 0,
    };
  },
  
  async mounted() {
    this.loadContent();
    this.viewCount = await this.fetchFire.count_page_view(
      this.$route.params.id
    );
    this.fetchFire.add_page_view(
      this.$route.params.id
    );
  },
  methods: {
    async loadContent() {
      try {
        this._post = await this.fetchFire.getPostById(
          "Blogs",
          this.$route.params.id
        );
      } catch (error) {
        alert("There is no such blog");
        this.$router.back();
      }
    },
  },
};
</script>
