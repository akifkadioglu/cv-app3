<template>
  <div>
    <div class="flex items-center justify-between">
      <button
        class="my-10 flex items-center font-bold font-mono hover:underline"
        @click="$router.push({ name: routeName.BLOG })"
      >
        <mdicon :size="25" name="arrow-left" aria-label="back button" />
        <span class="mx-2"> Other Posts </span>
      </button>
      <button
        class="my-10 flex space-x-3 items-center font-mono text-xs"
        @click="copyURL"
      >
        <mdicon
          :size="25"
          name="share-variant-outline"
          aria-label="copy button"
        />
      </button>
    </div>

    <div v-if="_post == null" class="flex justify-center my-5">
      <div class="w-7 h-7 border-2 border-gray-300 animate-spin"></div>
    </div>
    <div class="font-mono font-bold text-2xl capitalize flex justify-center">
      {{ post.title }}
    </div>
    <div v-html="post.content" class="py-5" />
    <p
      v-if="_post != null"
      class="flex items-center mb-28 justify-end font-mono text-sm"
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
    await this.loadContent();
    this.changeMetaTags();
    this.viewCount = await this.fetchFire.count_page_view(
      this.$route.params.id
    );
    this.fetchFire.add_page_view(this.$route.params.id);
  },
  methods: {
    
    changeMetaTags() {
      document.title = this._post.title + " | Akif Kadioglu";
    },

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
    async copyURL() {
      await navigator.clipboard.writeText(window.location.href);
      this.$snackbar.add({
        type: "success",
        text: "Link copied to clipboard!",
      });
    },
  },
};
</script>
<style>
iframe {
  aspect-ratio: 16 / 10;
  width: 100%;
  max-width: 720px;
}
</style>
