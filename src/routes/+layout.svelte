<script>
  import { onMount } from "svelte";
  import { slide } from "svelte/transition";

  import Loader from "$lib/components/Loader.svelte";

  import BlobBG from "$lib/components/BlobBG.svelte";
  import TSParticles from "$lib/components/TSParticles.svelte";
  import ThemeChanger from "$lib/components/ThemeChanger.svelte";
  import PagesTabs from "$lib/components/PagesTabs.svelte";
  import ProgressCircle from "$lib/components/ProgressCircle.svelte";
  import ProgressBar from "$lib/components/ProgressBar.svelte";

  import "../app.pcss";
  import "@fontsource-variable/jura";
  import "@fontsource/julius-sans-one";

  // LOADING
  let isLoading = true;
  onMount(() => {
    isLoading = false;
  });

  // Hide header elements on scroll
  let scrollY = 0;
  let windowWidth = 0;
  $: scrolled = scrollY < windowWidth / 2;
</script>

{#if isLoading}
  <main class="fixed left-0 top-0 z-40 h-screen w-screen flex justify-center items-center">
    <Loader />
  </main>
{:else}
  <BlobBG />

  {#if scrolled}
    <span transition:slide class={"fixed z-50 top-4 left-3 "}>
      <ThemeChanger />
    </span>
  {/if}

  <!-- PAGETABS -->
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
{/if}

<svelte:window bind:scrollY bind:innerWidth={windowWidth} />
