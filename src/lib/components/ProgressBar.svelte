<script>
  import { onMount } from "svelte";
  import { animate, scroll } from "motion";

  onMount(() => {
    scroll(animate(".progress", { scaleX: [0, 1] }));
  });
</script>

<div class="progress" />

<style>
  .progress {
    position: fixed;

    z-index: 100;
    left: 0;
    right: 0;
    height: 5px;
    background: oklch(var(--p));
    top: 0;
    transform: scaleX(0);
  }
</style>
