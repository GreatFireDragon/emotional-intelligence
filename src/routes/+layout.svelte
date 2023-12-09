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

  export let data;
  // USER'S INTERNET SPEED
  let speed = 0;

  // LOADING
  let isLoading = true;
  let countdownElement;
  onMount(() => {
    speed = window.navigator.connection?.downlink;
    if (!speed) speed = 1;
    console.log(speed);

    let waitingTime = data.theme ? 1 : 1000;
    waitingTime = waitingTime * (10 / speed);

    let newValue = Math.floor(waitingTime / 1000) - 1;
    const intervalUnlaod = setInterval(() => {
      newValue -= 1;
      countdownElement.style.setProperty("--value", newValue);
    }, 1000);

    setTimeout(() => {
      isLoading = false;
      clearInterval(intervalUnlaod);
    }, waitingTime);
  });

  // Hide header elements on scroll
  let scrollY = 0;
  let windowWidth = 0;
  $: scrolled = scrollY < windowWidth / 2;

  // music
  // let audio;
  // const playAudio = () => audio.play();
  // const pauseAudio = () => audio.pause();
</script>

{#if isLoading}
  <main
    class="fixed pointer-events-none top-0 left-0 z-[100] bg-neutral flex flex-col items-center justify-center w-screen h-[100lvh]"
  >
    <Loader />
    <span bind:this={countdownElement} class="countdown my-5 font-mono text-8xl">
      <span></span>
    </span>
  </main>
{/if}

<!-- music -->
<!-- <audio bind:this={audio}>
  <source src="/assets/Disco Elysium - Advesperascit.mp3" type="audio/mp3" />
</audio> -->

<BlobBG />

<span
  transition:slide
  class={"fixed flex items-baseline z-50 top-4 left-3 transition-all duration-1000 focus:opacity-100 active:opacity-100 " +
    (!scrolled ? "opacity-0 pointer-events-none" : "left-1/2 ")}
>
  <ThemeChanger {data} />

  <span class="ml-10">
    <!-- <button class="btn" on:click={playAudio}>▶</button> -->
  </span>
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

<svelte:window bind:scrollY bind:innerWidth={windowWidth} />
