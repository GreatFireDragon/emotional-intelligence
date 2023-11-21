<script>
  import BlobBG from "./BlobBG.svelte";

  import { slide } from "svelte/transition";

  import TSParticles from "./TSParticles.svelte";
  import ThemeChanger from "./ThemeChanger.svelte";
  import PagesTabs from "./PagesTabs.svelte";
  import ProgressCircle from "./ProgressCircle.svelte";
  import ProgressBar from "./ProgressBar.svelte";

  import "../app.pcss";
  import "@fontsource-variable/jura";
  import "@fontsource/julius-sans-one";
  import { onMount } from "svelte";

  // Hide header elements on scroll
  let scrollY = 0;
  let windowWidth = 0;
  $: scrolled = scrollY < windowWidth / 2;
</script>

<BlobBG />

{#if scrolled}
  <span transition:slide class={"fixed z-50 top-4 left-3 "}>
    <ThemeChanger />
  </span>
{/if}

<!-- {#if scrollY < windowWidth / 2}
  <span transition:slide class={"fixed z-50 top-4 right-3  "}>
    <PagesTabs />
  </span>
{/if} -->

<div class={"transition-all duration-1000 fixed top-2 " + (!scrolled ? "left-3" : "left-32 ")}>
  <!-- <ProgressCircle /> -->
  <ProgressBar />
</div>

<slot />

<svelte:window bind:scrollY bind:innerWidth={windowWidth} />
