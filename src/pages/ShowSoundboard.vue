<template>
  <base-card justify="space-between">
    <base-button v-if="isActive" @click="stopAutoplay">Autoplay On</base-button>
    <base-button v-if="!isActive" @click="startAutoplay">Autoplay Off</base-button>
  </base-card>
  <base-card justify="space-evenly">
    <tile-audio
      v-for="sound in soundStore.sounds"
      :key="sound.id"
      :id="sound.id"
      :file="sound.sound"
      :label="sound.label"
    ></tile-audio>
  </base-card>
</template>

<script>
import TileAudio from '../components/audio-components/TileAudio.vue';
import { useSoundStore } from '../stores/SoundStore.js';

export default {
  components: {
    TileAudio,
  },
  setup() {
    const soundStore = useSoundStore();
    return { soundStore };
  },
  data() {
    return {
      currentState: false,
    };
  },
  methods: {
    isActive() {
      return this.currentState;
    },
    startAutoplay() {
      this.currentState = true;
      console.log(this.currentState);
    },
    stopAutoplay() {
      this.currentState = false;
      console.log(this.currentState);
    },
  },
};
</script>

<style scoped></style>
