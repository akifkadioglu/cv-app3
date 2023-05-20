<template>
  <div class="mt-10 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
    
    <div
      v-for="(item, index) in projects"
      :key="index"
      class="col-span-1 bg-white mb-10 dark:bg-zinc-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-sm"
    >
      <h3
        class="font-mono text-slate-900 dark:text-white text-base font-medium tracking-tight"
      >
        {{ item.title }}
      </h3>
      <p class="font-mono text-slate-500 dark:text-slate-400 mt-2 text-sm">
        {{ item.content }}
      </p>
      <div class="flex justify-end mt-5">
        <button
          @click="functions.goToUrl(item.link)"
          class="rounded-full bg-zinc-400 px-6 py-1"
        >
          Visit
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import DividerContent from "../../components/DividerContent.vue";

export default {
  data() {
    return {
      projects: [
        {
          content:
            "P-Okul is a note sharing application written for Pamukkale University.",
          title: "P-Okul",
          link: "https://www.p-okul.net/",
        },
        {
          content: "Pretty simple.. Diary App:D",
          title: "Diary App",
          link: "https://github.com/akifkadioglu/kadiog",
        },
        {
          content: "Kadiog is an API setup using Echo and Gorm libraries.",
          title: "Kadiog",
          link: "https://github.com/akifkadioglu/kadiog",
        },
        /* {
                  content:
                    "BMI Calculator is an android app for calculate your body mass index.",
                  title: "BMI Calculator",
                  link: "https://play.google.com/store/apps/details?id=com.akifkadioglu.bmi_calculator",
                }, */
        {
          content:
            "Weather application brings the instantaneous weather conditions of the city or district you type.",
          title: "Weather App",
          link: "https://play.google.com/store/apps/details?id=com.akifkadioglu.weather_app_flutter",
        },
      ],
    };
  },
  components: { DividerContent },
};
</script>
