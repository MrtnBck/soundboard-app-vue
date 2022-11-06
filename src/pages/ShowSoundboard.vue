<template>
  <base-card justify="space-between">
    <base-button v-if="isActive" @click="stopAutoplay">Autoplay On</base-button>
    <base-button v-if="!isActive" @click="startAutoplay">Autoplay Off</base-button>
  </base-card>
  <base-card justify="space-evenly">
    <tile-audio
      v-for="sound in storedSounds"
      :key="sound.id"
      :id="sound.id"
      :file="sound.sound"
      :label="sound.label"
    ></tile-audio>
  </base-card>
</template>

<script>
import TileAudio from '../components/audio-components/TileAudio.vue';
export default {
  components: {
    TileAudio,
  },
  data() {
    return {
      currentState: false,
      storedSounds: [
        { id: 'sound0', sound: './sounds/cracken.mp3', label: 'Cracken' },
        { id: 'sound1', sound: './sounds/chackra.mp3', label: 'Chakra' },
        { id: 'sound2', sound: './sounds/3.mp3', label: '2' },
        { id: 'sound3', sound: './sounds/1.mp3', label: '3' },
        { id: 'sound4', sound: './sounds/2.mp3', label: '4' },
        { id: 'sound5', sound: './sounds/3.mp3', label: '5' },
        { id: 'sound6', sound: './sounds/1.mp3', label: '6' },
        { id: 'sound7', sound: './sounds/2.mp3', label: '7' },
        { id: 'sound8', sound: './sounds/3.mp3', label: '8' },
        { id: 'sound9', sound: './sounds/3.mp3', label: '9' },
      ],
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
