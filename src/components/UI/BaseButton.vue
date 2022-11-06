<template>
  <button v-if="!link" :class="mode"><slot></slot></button>
  <router-link v-else :to="to" :class="mode"><slot></slot></router-link>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: '/',
    },
  },

  computed: {},
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
  background-color: #270041;
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
