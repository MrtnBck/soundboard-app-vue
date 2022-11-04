<template>
  <button :class="mode"><slot></slot></button>
</template>

<script>
export default {
  props: ['mode'],
};
</script>

<style scoped>
button {
  padding: 0.75rem 1.5rem;
  margin: 15px 5px;
  font-family: inherit;
  font-size: inherit;
  background-color: blueviolet;
  border: 1px solid blueviolet;
  color: white;
  cursor: pointer;
  border-radius: 12px;
  width: 13rem;
}

button.inactive {
  background-color: azure;
  color: blueviolet;
}

/* button.inactive,
button.inactive:hover {
} */

button:hover,
button:active {
  background-color: #270041;
  border-color: #270041;
}
</style>
