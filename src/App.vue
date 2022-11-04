<template>
  <the-header title="Soundboard App"></the-header>
  <the-dashboard></the-dashboard>
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue';
import TheDashboard from './components/dashboard-components/TheDashboard.vue';
export default {
  components: {
    TheHeader,
    TheDashboard,
  },
  data() {
    return {};
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;500&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Josefin Sans', sans-serif;
}

body {
  margin: 0;
}
</style>
