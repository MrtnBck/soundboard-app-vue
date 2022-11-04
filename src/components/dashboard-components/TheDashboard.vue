<template>
  <card-dashboard>
    <base-button @click="setSelectedTab('show-soundboard')" :class="manageSoundboardButtonMode"
      >Show Soundboard</base-button
    >
    <base-button @click="setSelectedTab('manage-soundboard')" :class="showSoundboardButtonMode"
      >Manage Soundboard</base-button
    >
  </card-dashboard>
  <component :is="selectedTab"></component>
</template>

<script>
import CardDashboard from './CardDashboard.vue';
import ManageSoundboard from '../sound-board/ManageSoundboard.vue';
import ShowSoundboard from '../sound-board/ShowSoundboard.vue';
export default {
  components: {
    CardDashboard,
    ManageSoundboard,
    ShowSoundboard,
  },
  data() {
    return {
      selectedTab: 'show-soundboard',
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
  },
  computed: {
    manageSoundboardButtonMode() {
      return this.selectedTab === 'manage-soundboard' ? null : 'inactive';
    },
    showSoundboardButtonMode() {
      return this.selectedTab === 'show-soundboard' ? null : 'inactive';
    },
  },
};
</script>

<style></style>
