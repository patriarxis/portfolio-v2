<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

console.log(route, route.name);

const pageTitle = computed(() => {
  switch (route.path) {
    case "/home":
      return "Patriarxis' Official Site";
    case "/about":
      return "Patriarxis' Official CV";
    case "/projects":
      return "Patriarxis' Official Projects";
    case "/projects/signet":
      return "Project Signet";
    case "/projects/cipher":
      return "Project Cipher";
    case "/projects/simplepad":
      return "Project SimplePad";
    case "/projects/favigo":
      return "Project Favigo";
    case "/projects/spinzy":
      return "Project Spinzy";
    case "/projects/thats-a-scan":
      return "Project That's a Scan";
    case "/projects/retrofolio":
      return "Project Retrofolio";
    case "/projects/3ll":
      return "Project 3ll";
    default:
      return "Patriarxis' Official Site";
  }
});
</script>

<template>
  <header>
    <h1 class="p p2-semibold">{{ pageTitle }}</h1>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  background-color: var(--elevation-0);
}

h1 {
  width: 100%;
  text-align: center;
  color: var(--elevation-11);
  padding: var(--spacing-2xs) var(--spacing-md);
}
</style>
