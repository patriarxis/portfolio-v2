<script setup lang="ts">
import { ThemeSelector, TimeAndDate, NoiseSelector } from "@components";

const currentYear = new Date().getFullYear();
</script>

<template>
  <footer>
    <div class="row top">
      <div class="col">
        <ThemeSelector />
        <NoiseSelector />
      </div>

      <div class="col time-and-date">
        <TimeAndDate />
      </div>
    </div>

    <div class="row bottom">
      <div class="col copyrights">
        <p class="p2">
          Copyright (c) {{ currentYear }}
          <a href="https://retrofolio.3ll.gr">Retrofolio</a> by
          <a href="https://3ll.gr">3ll</a>
        </p>
      </div>

      <div class="col social">
        <a href="mailto:fotios.pechlivanis@email.com">
          <p class="p2-medium">&lt;fotios.pechlivanis@email.com&gt;</p>
        </a>
        <a href="https://dribbble.com/patriarxis">
          <p class="p2-medium">Dribbble</p>
        </a>
        <a href="https://github.com/patriarxis">
          <p class="p2-medium">GitHub</p>
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@use "../../styles/breakpoints.scss" as *;

footer {
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  width: 100%;
}

.row {
  display: flex;
  padding: 0 var(--spacing-md);
}

.col {
  display: inline-flex;
  align-items: center;
  flex-grow: 1;
}

.top {
  flex-direction: row;
  align-items: stretch;
  background-color: var(--elevation-8);
  color: var(--elevation-4);
}

.bottom {
  flex-direction: column-reverse;
  align-items: center;
  background-color: var(--elevation-0);
  color: var(--elevation-11);

  @include sm {
    flex-direction: row;
    align-items: stretch;
  }
}

.time-and-date,
.copyrights {
  padding: var(--spacing-2xs) var(--spacing-xs);

  a {
    display: inline;
  }
}

.time-and-date,
.social {
  justify-content: flex-end;
}

.social a {
  padding: var(--spacing-2xs) var(--spacing-xs);
  transition: background-color var(--duration-1) var(--easing-1);

  &:hover,
  &:focus {
    background-color: var(--primary-3);
  }

  &:active {
    background-color: var(--primary-5);
  }
}
</style>
