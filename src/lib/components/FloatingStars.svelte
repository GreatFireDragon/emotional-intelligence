<script>
  import { onMount } from "svelte";
  import { inView, animate, timeline, stagger, spring } from "motion";

  // export let container;

  let windowHeight;
  let windowWidth;

  let starContainer;
  onMount(() => {
    inView(
      starContainer,
      () => {
        animate(
          "#star",
          {
            x: [windowWidth, -windowWidth],
            y: [0, windowHeight],
            rotate: [0, 360],
            filter: ["hue-rotate(0deg) contrast(70%)", "hue-rotate(720deg) contrast(100%)"],
          },
          {
            repeat: Infinity,
            duration: 10,
            easing: "ease-in",
            delay: stagger(2),
          }
        );
        return () => {};
      },
      { margin: "100px 0px 0px 0px" }
    );
  });

  function handleStarClick(e) {
    timeline([[e.target, { scale: [1, 1.2], rotate: [0, 120] }]], {
      defaultOptions: {
        duration: 1,
        easing: spring({ velocity: 50 }),
      },
    });
  }
</script>

<div bind:this={starContainer} class="absolute left-0 top-0">
  {#each [...Array(10).keys()] as _}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <img
      on:click={handleStarClick}
      id="star"
      class="absolute max-w-lg z-[20] drop-shadow-2xl cursor-pointer select-none"
      style={`left: ${Math.random().toFixed(3) * 80}vw;`}
      alt=""
      src="assets/prince-small/star1.png"
    />
  {/each}
</div>

<svelte:window bind:innerHeight={windowHeight} bind:innerWidth={windowWidth} />

<style>
  /* TODO: add img shadow */
  #star {
    text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  }
</style>
