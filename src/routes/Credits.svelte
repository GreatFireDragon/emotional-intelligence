<script>
  import { onMount } from "svelte";
  import FloatingStars from "../lib/components/FloatingStars.svelte";
  import { animate, inView, spring, timeline } from "motion";

  let windowW;

  let moon;
  let fox;
  onMount(() => {
    inView(moon.parentNode, ({ target }) => {
      animate(fox, { x: [windowW, -windowW * 1.5] }, { duration: 10, repeat: Infinity, delay: -2 });
      animate(
        moon,
        { rotate: [0, 360] },
        { repeat: Infinity, duration: 10, direction: "alternate-reverse" }
      );

      // timeline(
      //   [
      //     [moon, { rotate: [0, 120] }],
      //     [moon, { rotate: [120, 240] }],
      //     [moon, { rotate: [240, 360] }],
      //   ],
      //   {
      //     defaultOptions: {
      //       easing: spring({ velocity: 0, damping: 6 }),
      //       repeat: Infinity,
      //       // direction: "normal",
      //     },
      //   }
      // );
    });
  });
</script>

<svelte:window bind:innerWidth={windowW} />

<section class="overflow-hidden">
  <h2><span class="gradientText">Александра Романова</span></h2>
  <p class="text-center">Проект <span class="gradientText">"Эмоциональный интеллект"</span></p>
  <h2 class="gradientText">2024</h2>

  <div class="relative pointer-events-none text-8xl">
    <img
      bind:this={moon}
      src="assets/moon-realistic2.png"
      alt=""
      class="absolute max-w-xl top-[10svh] -right-[120vw] z-[3] blur-[2px] drop-shadow-lg"
    />
    <img
      bind:this={fox}
      src="assets/prince-small/fox-running.png"
      alt=""
      class="absolute max-w-xl z-[3] rotate-6 bottom-[30svh] drop-shadow-lg"
    />
  </div>

  <FloatingStars />
</section>
