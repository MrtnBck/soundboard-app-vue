<template>
  <base-card justify="space-between">
    <base-button link to="/show" @click="selectTab('show')" :class="showBtnActive">Show Soundboard</base-button>
    <!-- prettier-ignore -->
    <base-button link to="/manage" @click="selectTab('manage')" :class="manageBtnActive">Manage Soundboard</base-button>
  </base-card>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      selectedTab: 'show',
    };
  },
  computed: {
    showBtnActive() {
      return this.selectedTab === 'show' ? 'active' : null;
    },

    manageBtnActive() {
      return this.selectedTab === 'manage' ? 'active' : null;
    },
  },
  methods: {
    selectTab(tab) {
      return tab === 'show' ? (this.selectedTab = 'show') : (this.selectedTab = 'manage');
    },
  },
};
</script>
