<template>
  <div class="grid w-full px-5">
    <div class="text-2xl">Akif Kadıoğlu</div>
    <div class="text-x mb-5 font-mono">Software Developer</div>
    <DividerContent text="Reach me" />
    <div class="my-3">
      <div class="font-bold font-mono">Cell:</div>
      <div class="font-mono">+90 555 880 3528</div>
    </div>
    <div class="my-3">
      <div class="font-bold font-mono">E-mail:</div>
      <div class="font-mono">akifkadioglu@yaani.com</div>
    </div>
    <div class="my-3">
      <div class="font-bold font-mono">LinkedIn:</div>
      <div class="font-mono">@akifkadioglu</div>
    </div>
  </div>
</template>
<script>
import DividerContent from "../../../components/DividerContent.vue";

export default { components: { DividerContent } };
</script>
