<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <header>
    
    <img alt="Vue logo" class="logo" src="./assets/icon.png" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="María Pont" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
img {
  border-radius: 50%;
}
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    flex-direction: column;
    place-items: center;
    padding-right: calc(var(--section-gap) / 3);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    padding-top: 2rem;
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
