<template>
  <div class="mt-10 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
    <div v-for="(item, index) in projects" :key="index">
      <CustomCard
        :title="item.title"
        :content="item.content"
        buttonText="Visit"
        @click="functions.goToUrl(item.link)"
      />
    </div>
  </div>
</template>
<script>
import CustomCard from "../../components/CustomCard.vue";

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
          link: "https://akifkadioglu-diary-app.netlify.app",
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
  components: { CustomCard },
};
</script>
