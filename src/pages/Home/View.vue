<template>
  <div class="flex justify-center">
    <Avatar />
  </div>
  <div class="flex justify-center my-5">
    <div class="transition duration-300 font-mono text-2xl hover:underline">
      Akif Kadioglu
    </div>
  </div>
  <div>
    <Skills />
  </div>
  <div class="my-10">
    <Options />
  </div>
  <div class="mb-10">
    <Accounts />
  </div>
</template>
<script>
import Avatar from "../../components/Avatar.vue";
import Accounts from "./Components/Accounts.vue";
import Options from "./Components/Options.vue";
import Skills from "./Components/Skills.vue";
export default {
  components: {
    Skills,
    Accounts,
    Options,
    Avatar
},
};
</script>
