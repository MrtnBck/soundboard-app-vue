<template>
  <div @click="playBackgroundAudio">
    <h3>{{ label }}</h3>
  </div>
</template>

<script>
import { Howl } from 'howler';
export default {
  props: ['id', 'label', 'file'],
  data() {
    return {
      clickCounter: 0,
      sound: null,
    };
  },
  methods: {
    play() {
      this.$emit('play');
    },
    playBackgroundAudio() {
      if (this.clickCounter === 0) {
        this.sound = new Howl({
          src: [this.file],
        });
        this.sound.play();
        console.log(this.id + ' play');

        this.clickCounter = 1;
        return;
      }

      if (this.clickCounter === 1) {
        this.sound.stop();
        console.log(this.id + ' stop');
        this.clickCounter = 0;
        return;
      }
    },
  },
};
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 5rem;
  max-width: 6rem;
  max-height: 6rem;
  margin: 20px;
  background-color: blueviolet;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
}

h3 {
  color: white;
}
</style>
