<template>
  <li>
    <div>
      <h3>{{ label }}</h3>
      <h3>{{ id }}</h3>
    </div>
  </li>
</template>

<script>
export default {
  props: ['label', 'id'],
};
</script>

<style scoped>
div {
  padding: 10px;
  background-color: aquamarine;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  max-width: 40rem;
}
</style>
