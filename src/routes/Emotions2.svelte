<script>
  import { onMount } from "svelte";
  import { inView, animate, stagger } from "motion";

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
          delay: stagger((Math.random() * 3).toFixed(0)),
        }
      );

      return () => {};
    });
  });

  function randomStarPosition() {
    return `left: ${Math.random() * 80}vw; top: ${Math.random() * 10}vh`;
  }
</script>

<section bind:this={container} class="overflow-hidden">
  <p>
    Благодаря эмоциям и чувствам люди лучше находят общий язык с окружающими. Используя
    <span class="gradientText">невербальные</span> сигналы, делают выводы о состоянии своего ближнего.
  </p>

  <div class="absolute">
    {#each [...Array(10).keys()] as _}
      <img
        id="star"
        class="absolute max-w-lg drop-shadow-2xl"
        style={randomStarPosition()}
        alt="flying star"
        src="assets/prince-small/star1.png"
      />
    {/each}
  </div>
</section>

<svelte:window bind:innerHeight={windowHeight} bind:innerWidth={windowWidth} />
