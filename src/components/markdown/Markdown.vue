<script setup lang="ts">
import { marked } from "marked";

defineProps<{
  source: string;
}>();
</script>

<template>
  <div class="markdown-container">
    <div v-html="marked.parse(source)" class="markdown" />
  </div>
</template>

<style lang="scss">
.markdown-container {
  height: 100%;
  padding: var(--spacing-2xl);
  overflow-y: auto;
}

.markdown {
  * {
    padding: revert;
    margin: revert;
  }

  *:focus,
  *:focus-within,
  *:focus-visible,
  *:active {
    outline: revert;
  }

  h {
    color: var(--elevation-1);
  }

  p, li {
    color: var(--elevation-2);
  }

  ul, ol {
    padding-left: var(--spacing-2xl);
  }

  li {
    list-style-type: revert;
  }

  a {
    color: var(--primary-5);
    outline: revert;
    text-decoration: revert;
    cursor: revert;
    display: revert;
    transition: color var(--duration-1) var(--easing-1);

    &:hover, &:focus-visible {
      color: var(--primary-4);
    }

    &:active {
      color: var(--primary-3);
    }
  }

  button {
    border: revert;
    cursor: revert;
    background-color: revert;
    text-decoration: revert;
    user-select: revert;
  }

  dialog {
    margin: revert;
    border: revert;
  }

  input,
  textarea {
    background: revert;
    border: revert;
  }

  hr {
    width: 100%;
    height: 1px;
    background-color: var(--elevation-8);
  }

  blockquote {
    margin: 0;
    padding-left: var(--spacing-md);
    border-left: 2px solid var(--elevation-8);
    color: var(--elevation-3);
  }
}
</style>
