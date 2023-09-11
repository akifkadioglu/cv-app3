<template>
  <div class="flex justify-center my-10 font-mono">
    I'm a Graffiti artist, I will share my digital works here
  </div>
  <div
    class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 items-center"
  >
    <div
      v-for="(item, index) in gallery"
      :key="index"
      class="dark:text-zinc-800 text-zinc-200 content"
    >
      <img :src="item" />
      <div class="flex justify-evenly">
        <button @click="show(item)">
          <mdicon name="eye-outline" class="dark:text-white text-black" />
        </button>
        <button @click="copyURL(item)">
          <mdicon name="share-outline" class="dark:text-white text-black" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import CustomCard from "../../components/CustomCard.vue";
import InfiniteLoading from "v3-infinite-loading";
import "v3-infinite-loading/lib/style.css";
import { useSnackbar } from "vue3-snackbar";
const snackbar = useSnackbar();

let posts = ref([]);
let isCalled = false;
let limit = 10;
const gallery = Object.values(
  import.meta.glob("./../../gallery/*.png", { eager: true, as: "url" })
).reverse();
const show = (url) => {
  window.open(url);
};
const copyURL = async (url) => {
  console.log(url);
  await navigator.clipboard.writeText(window.location.host + url);
  snackbar.add({
    type: "success",
    text: "Link copied to clipboard!",
  });
};
</script>
<style>
.content {
  border: 0.5px dashed;
  padding: 10px;
}
</style>
