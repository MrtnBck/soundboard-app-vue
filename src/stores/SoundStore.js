import { defineStore } from 'pinia';

export const useSoundStore = defineStore('soundStore', {
  state: () => ({
    sounds: [
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
  }),
});
