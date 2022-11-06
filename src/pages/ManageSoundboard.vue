<template>
  <section>
    <base-card justify="center">
      <upload-controller></upload-controller>
    </base-card>
  </section>
  <section>
    <ul>
      <audio-item v-for="sound in soundStore.sounds" :key="sound.id" :label="sound.label" :id="sound.id"></audio-item>
    </ul>
  </section>
</template>

<script>
import { useSoundStore } from '../stores/SoundStore.js';
import AudioItem from '../components/audio-components/AudioItem.vue';
import UploadController from '../components/dashboard-components/UploadController.vue';
export default {
  components: {
    AudioItem,
    UploadController,
  },
  setup() {
    const soundStore = useSoundStore();
    return { soundStore };
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
