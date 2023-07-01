<template>
  <div
    v-if="posts.length == 0 && isCalled == true"
    class="mt-10 text-center font-mono"
  >
    I haven't written anything yet 😞
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
  <div class="flex justify-center my-5">
    <InfiniteLoading @infinite="getPosts" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import CustomCard from "../../components/CustomCard.vue";
import InfiniteLoading from "v3-infinite-loading";
import "v3-infinite-loading/lib/style.css";
import { fetchFire } from "./../../firebase/functions";

let posts = ref([]);
let isCalled = false;
let limit = 10;
const getPosts = async ($state) => {
  try {
    let request = await fetchFire.getPostsByCreatedAt(
      "Blogs",
      limit,
      posts.value[posts.value.length - 1]
    );
    if (request.length == 0) $state.complete();
    else {
      posts.value.push(...request);
      $state.loaded();
    }
  } catch (e) {}
  isCalled = true;
};
</script>
