<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  display: flex;
  flex-wrap: wrap;
  background-color: aquamarine;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  justify-content: space-evenly;
  margin: 2rem auto;
  max-width: 40rem;
}
</style>
