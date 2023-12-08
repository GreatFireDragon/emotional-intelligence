<script>
  import { onMount } from "svelte";
  import { inView, animate, stagger, spring } from "motion";

  let container;
  let windowHeight;
  let windowWidth;

  onMount(() => {
    inView(container, ({ target }) => {
      animate(
        "#star",
        {
          x: [windowWidth, -windowWidth],
          y: [-windowHeight, windowHeight],
          rotate: [0, 360],
          filter: ["hue-rotate(0deg) contrast(70%)", "hue-rotate(720deg) contrast(100%)"],
        },
        {
          repeat: Infinity,
          duration: 15,
          delay: stagger(Math.random().toFixed(0)),
        }
      );

      return () => {};
    });
  });

  function handleStarClick(e) {
    animate(
      e.target,
      { scale: [null, 1.5, 1] },
      {
        duration: 0.5,
        easing: spring(),
      }
    );
  }
</script>

<section bind:this={container} class="overflow-clip">
  <p>
    Благодаря эмоциям и чувствам люди лучше находят общий язык с окружающими. Используя
    <span class="gradientText">невербальные</span> сигналы, делают выводы о состоянии своего ближнего.
  </p>

  <!-- <img class="drop-shadow-lg aspect-square max-w-xs" src="assets/emotions-circle.png" alt="" /> -->

  <div class="absolute">
    {#each [...Array(15).keys()] as _}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
      <img
        on:click={handleStarClick}
        id="star"
        class="absolute max-w-lg z-[20] drop-shadow-2xl"
        style={`left: ${Math.random().toFixed(3) * 150}vw;`}
        alt=""
        src="assets/prince-small/star1.png"
      />
    {/each}
  </div>
</section>

<svelte:window bind:innerHeight={windowHeight} bind:innerWidth={windowWidth} />

<style>
  /* TODO: add img shadow */
  #star {
    text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  }
</style>
