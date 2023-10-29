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
    case "/projects/kardias":
      return "Project Kardias";
    case "/projects/brioche":
      return "Project Brioche";
    case "/projects/synoditis":
      return "Project Synoditis";
    case "/projects/retrofolio":
      return "Project Retrofolio";
    case "/projects/blast-assessment-tool":
      return "Project Blast Assessment Tool";
    case "/projects/gg":
      return "Project GG";
    case "/projects/lmss":
      return "Project LMSS";
    case "/projects/graphit":
      return "Project GraphIT";
    case "/projects/3ll":
      return "3ll stdio";
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
