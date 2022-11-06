<template>
  <base-card justify="space-between">
    <!-- <base-button link :to="showSoundboardLink" :class="showBtnActive">Show Soundboard</base-button>
    <base-button link :to="manageSoundboardLink" :class="manageBtnActive">Manage Soundboard</base-button> -->
    <router-link to="/show" @click="selectedTab = 'show'" :class="showBtnActive">Show</router-link>
    <router-link to="/manage" @click="selectedTab = 'manage'" :class="manageBtnActive">Manage</router-link>
  </base-card>
  <component :is="selectedTab"></component>
</template>

<script>
import ManageSoundboard from '../sound-board/ManageSoundboard.vue';
import ShowSoundboard from '../sound-board/ShowSoundboard.vue';
export default {
  components: {
    ManageSoundboard,
    ShowSoundboard,
  },
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
    /* showSoundboardLink() {
      console.log('trigger');
      
      console.log(this.$route.path + '/show');
      return '/show';
    },
    manageSoundboardLink() {
      
      console.log(this.$route.path + '/manage');
      return '/manage';
      //return this.$route.path + '/manage';
    }, */
  },
};
</script>

<style scoped>
a,
button {
  text-decoration: none;
  font: inherit;
  display: inline-block;
  text-align: center;
  padding: 0.75rem 1.5rem;
  margin: 15px 5px;
  background-color: white;
  border: 1px solid blueviolet;
  color: blueviolet;
  cursor: pointer;
  border-radius: 12px;
  width: 13rem;
}

a:hover,
button:hover {
  background-color: #efe7f5;
  border-color: #270041;
}

a.active,
button.active {
  background-color: blueviolet;
  color: white;
}

/* a,
button:hover,
a,
button:active {
  background-color: #270041;
  border-color: #270041;
} */
</style>
