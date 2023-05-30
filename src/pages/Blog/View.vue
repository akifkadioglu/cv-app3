<template>
  <div
    v-if="posts.length == 0 && isCalled == true"
    class="mt-10 text-center font-mono"
  >
    I haven't written anything yet 😞
  </div>
  <div
    v-if="posts.length == 0 && isCalled == false"
    class="flex justify-center my-5"
  >
    <div class="w-7 h-7 border-2 border-gray-300 animate-spin"></div>
  </div>

  <div class="mt-10 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
    <div v-for="(item, index) in posts" :key="index">
      <CustomCard
        :title="item.title"
        :content="item.content"
        :buttonText="item.type"
        @click="
          functions.goToPage(routeName.BLOG_POST, {
            id: item.id,
          })
        "
      />
    </div>
  </div>
</template>

<script>
import CustomCard from "../../components/CustomCard.vue";

export default {
  mounted() {
    this.getPosts();
  },
  data() {
    return {
      posts: [],
      isCalled: false,
    };
  },
  methods: {
    async getPosts() {
      try {
        this.posts = await this.fetchFire.getPostsByCreatedAt("Blogs");
      } catch (e) {}
      this.isCalled = true;
    },
  },
  components: { CustomCard },
};
</script>
