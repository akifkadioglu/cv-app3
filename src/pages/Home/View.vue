<template>
  <div class="flex justify-center">
    <Renderer ref="renderer" antialias orbit-ctrl shadow alpha resize="true">
      <Camera :position="{ z: 3 }" />
      <Scene>
        <PointLight :position="{ y: 2, z: 0, x: 0 }" cast-shadow />
        <Mesh
          ref="mesh"
          cast-shadow
          :rotation="{ y: Math.PI / 4 + 5.5, z: Math.PI / 4 + 5.5 }"
        >
          <CircleGeometry :segments="40" />
          <BasicMaterial :props="{ side: 2 }">
            <Texture
              src="https://raw.githubusercontent.com/akifkadioglu/cv-app3/main/public/logo.png"
            />
          </BasicMaterial>
        </Mesh>
      </Scene>
    </Renderer>
  </div>
  <div class="space-y-11">
    <div class="flex justify-center">
      <div class="transition duration-300 font-mono text-2xl hover:underline">
        <div>Akif Kadioglu</div>
      </div>
    </div>
    <div>
      <Skills />
    </div>
    <div>
      <Options />
    </div>
    <div>
      <Accounts />
    </div>
  </div>
</template>
<script>
import Accounts from "./Components/Accounts.vue";
import Options from "./Components/Options.vue";
import Skills from "./Components/Skills.vue";
export default {
  components: {
    Skills,
    Accounts,
    Options,
  },
  mounted() {
    const renderer = this.$refs.renderer;
    const mesh = this.$refs.mesh.mesh;
    renderer.three.setSize(200, 250);
    renderer.onBeforeRender(() => {
      mesh.rotation.x += 0.002;
      mesh.rotation.y += 0.002;
    });
  },
};
</script>
