<template>
  <DividerContent text="Accounts" />
  <div style="text-align: center">
    <button
      data-te-toggle="tooltip"
      :title="item.title"
      @click="functions.goToUrl(item.url)"
      class="ml-5 mr-5 mt-5"
      v-for="(item, index) in contacts"
      :key="index"
      :aria-label="item.title"
    >
      <mdicon
        :style="'color:' + item.color"
        :size="isMobile ? 25 : 30"
        :name="item.icon"
      />
    </button>
  </div>
</template>
<script>
import DividerContent from "../../../components/DividerContent.vue";

export default {
  data() {
    return {
      isMobile: this.functions.isMobile(),
      contacts: [
        {
          icon: "github",
          title: "GitHub",
          url: "https://github.com/akifkadioglu",
          color: "",
        },
        {
          icon: "gitlab",
          title: "GitLab",
          url: "https://gitlab.com/akifkadioglu",
          color: "#FC6D27",
        },
        {
          icon: "linkedin",
          title: "LinkedIn",
          url: "https://www.linkedin.com/in/akif-kadioglu-88429a1b2/",
          color: "#0072b1",
        },
        {
          icon: "email",
          title: "E-Mail",
          url: "mailto: akifkadioglu@yaani.com",
          color: "#EA4335",
        },
        {
          icon: "twitter",
          title: "Twitter",
          url: "https://twitter.com/akifkadioglu",
          color: "#00acee",
        },
        {
          icon: "send-variant-outline",
          title: "Telegram",
          url: "https://t.me/akifkadioglu",
          color: "#0088CC",
        },
        {
          icon: "instagram",
          title: "Instagram",
          url: "https://www.instagram.com/akifkadioglu",
          color: "#d62976 ",
        },
        {
          icon: "text",
          title: "Medium",
          url: "https://medium.com/@akifkadioglu",
          color: "#66cdaa",
        },
      ],
    };
  },

  components: { DividerContent },
};
</script>
