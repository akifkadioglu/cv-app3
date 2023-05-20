<template>
  <div>
    <button class="my-10 flex items-center font-bold font-mono hover:underline" @click="$router.replace({name:routeName.BLOG})">
      <mdicon
        :size="isMobile ? 25 : 40"
        name="arrow-left"
        aria-label="back button"
      />
      <span class="mx-2"> Other Posts </span>
    </button>
    <div v-html="renderedContent"></div>
  </div>
</template>

<script>
import MarkdownIt from "markdown-it";

export default {
  data() {
    return {
      isMobile: this.functions.isMobile(),

      content: "",
    };
  },
  computed: {
    renderedContent() {
      return this.content;
    },
  },
  mounted() {
    this.loadContent();
  },
  methods: {
    async loadContent() {
      const response = await fetch("/blogs/" + this.$route.params.name + ".md");
      const markdown = await response.text();
      if (response.status == 404) {
        alert("There is no such blog");
        this.$router.back();
      } else {
        const md = new MarkdownIt();
        this.content = md.render(markdown);
      }
    },
  },
};
</script>
