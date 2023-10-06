<template>
  <div class="mt-10 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
    <div v-for="(item, index) in projects" :key="index">
      <CustomCard
        :title="item.title"
        :content="item.content"
        buttonText="Visit"
        :maxLength="75"
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
            "The traveling salesman problem (TSP) is an algorithmic problem tasked with finding the shortest route between a set of points and locations that must be visited. In the problem statement, the points are the cities a salesperson might visit. The salesman‘s goal is to keep both the travel costs and the distance traveled as low as possible.",
          title: "Travelling Salesman Problem",
          link: "https://travelling-salesman-problem.netlify.app/",
        },
        {
          content:
            "SecretChat allows you to talk to the people you want without saving your messages.",
          title: "SecretChat",
          link: "https://talk-secretly.netlify.app/",
        },
        {
          content: "DreamVerse is an app to share your dreams ",
          title: "DreamVerse",
          link: "https://dream-verse.netlify.app/",
        },
        {
          content:
            "P-Okul is a note sharing application written for Pamukkale University. ",
          title: "P-Okul",
          link: "https://www.p-okul.net/",
        },
        {
          content: "Pretty simple.. Diary App:D ",
          title: "Diary App",
          link: "https://akifkadioglu-diary-app.netlify.app",
        },
        {
          content: "Kadiog is an API setup using Echo and Gorm libraries. ",
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
            "Weather application brings the instantaneous weather conditions of the city or district you type. ",
          title: "Weather App",
          link: "https://play.google.com/store/apps/details?id=com.akifkadioglu.weather_app_flutter",
        },
      ],
    };
  },
  components: { CustomCard },
};
</script>
