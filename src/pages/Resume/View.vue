<template>
  <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
    <div class="col-span-1">
      <div class="grid gap-4">
        <Address />
      </div>
    </div>
    <div class="col-span-1">
      <div class="grid gap-4">
        <ProfileAndEducationalTraining />
      </div>
    </div>
    <div class="col-span-1">
      <div class="grid gap-4">
        <CareerAndSkills />
      </div>
    </div>
  </div>
</template>
<script>
import Address from "./Components/Address.vue";
import CareerAndSkills from "./Components/CareerAndSkills.vue";
import ProfileAndEducationalTraining from "./Components/ProfileAndEducationalTraining.vue";
export default {
  components: {
    Address,
    ProfileAndEducationalTraining,
    CareerAndSkills,
  },
};
</script>
