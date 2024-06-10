<template>
  <div class="not-found">
    <h3>404</h3>
    <div>This page is not found!</div>
    <b-button @click="$router.push({ name: 'Home' })">Go to Home</b-button>
  </div>
</template>

<style scoped>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 1rem;
  margin: 1rem;
}
</style>
