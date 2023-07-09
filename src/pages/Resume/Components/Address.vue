<template>
  <div class="grid w-full px-5">
    <div class="text-2xl font-mono">Akif Kadıoğlu</div>
    <div class="text-x mb-5 font-mono">Software Developer</div>
    <DividerContent text="Reach me" />
    <div class="my-3">
      <div class="font-bold font-mono">E-mail:</div>
      <div class="font-mono">
        <a href="mailto:akifkadioglu@yaani.com" target="_blank"> akifkadioglu@yaani.com </a>
      </div>
    </div>
    <div class="my-3">
      <div class="font-bold font-mono">LinkedIn:</div>
      <div class="font-mono">
        <a href="https://www.linkedin.com/in/akif-kadioglu-88429a1b2/" target="_blank">
          @akifkadioglu
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import DividerContent from "../../../components/DividerContent.vue";

export default { components: { DividerContent } };
</script>
