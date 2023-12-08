<script>
  import { slide } from "svelte/transition";
  import { onMount } from "svelte";

  import Loader from "$lib/components/Loader.svelte";
  import "../app.pcss";
  import BlobBG from "$lib/components/BlobBG.svelte";
  import TSParticles from "$lib/components/TSParticles.svelte";
  import ThemeChanger from "$lib/components/ThemeChanger.svelte";
  import PagesTabs from "$lib/components/PagesTabs.svelte";
  import ProgressCircle from "$lib/components/ProgressCircle.svelte";
  import ProgressBar from "$lib/components/ProgressBar.svelte";
  import ScrollButtons from "$lib/components/ScrollButtons.svelte";

  // import "@fontsource-variable/jura";
  // import "@fontsource/julius-sans-one";

  // export let data;
  // USER'S INTERNET SPEED
  let speed = 0;

  // LOADING
  let isLoading = true;
  onMount(() => {
    speed = window.navigator.connection?.downlink;
    if (speed) {
      console.log("User's connection is ", speed, "Mb/s");
    }
    const waitingTime = 1;
    console.log(waitingTime * (10 / speed));

    setTimeout(
      () => {
        isLoading = false;
      },
      waitingTime * (10 / speed)
    );
  });

  // Hide header elements on scroll
  let scrollY = 0;
  let windowWidth = 0;
  $: scrolled = scrollY < windowWidth / 2;
</script>

{#if isLoading}
  <main class="fixed top-0 left-0 z-40 flex items-center justify-center w-screen h-screen">
    <Loader />
  </main>
{:else}
  <BlobBG />

  <span
    transition:slide
    class={"fixed z-50 top-4 left-3 transition-all duration-1000 focus:opacity-100 active:opacity-100 " +
      (!scrolled ? "opacity-0 pointer-events-none" : "left-1/2 ")}
  >
    <ThemeChanger />
  </span>

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

  <ScrollButtons />

  <slot />
{/if}

<svelte:window bind:scrollY bind:innerWidth={windowWidth} />
