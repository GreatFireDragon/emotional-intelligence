<script>
  import Emotions3 from "./Emotions3.svelte";
  import Emotions2 from "./Emotions2.svelte";
  import Emotions1 from "./Emotions1.svelte";
  import Header from "./Header.svelte";

  import { onMount } from "svelte";

  let scrollY = 0;
  let windowHeight;

  function scrollUpDown(e) {
    const direction = e.target.textContent === "Up" ? -1 : 1;

    document.documentElement.scrollTo({
      top: scrollY + windowHeight * direction,
      behavior: "smooth",
    });
  }
</script>

<div
  class="fixed z-50 transition-all duration-500 join join-vertical top-2/3 right-3 opacity-10 hover:opacity-50"
>
  <button class="btn join-item" on:click={scrollUpDown}>Up</button>
  <button class="btn join-item" on:click={scrollUpDown}>Down</button>
</div>

<main>
  <Header />

  <Emotions1 />
  <Emotions2 />
  <Emotions3 />
</main>

<svelte:window bind:scrollY bind:outerHeight={windowHeight} />
