<script>
  import { onMount } from "svelte";
  import FloatingStars from "../lib/components/FloatingStars.svelte";
  import { animate, inView, spring, timeline } from "motion";

  let moon;
  onMount(() => {
    inView(moon, ({ target }) => {
      timeline(
        [
          [target, { rotate: [0, 120] }],
          [target, { rotate: [120, 240] }],
          [target, { rotate: [240, 360] }],
        ],
        {
          defaultOptions: {
            easing: spring({ velocity: 0, damping: 6 }),
            repeat: Infinity,
            // direction: "normal",
          },
        }
      );
    });
  });
</script>

<section class="overflow-hidden">
  <h2>Александра <span class="gradientText">Романова</span></h2>
  <p>Проект <span class="gradientText">"Эмоциональный интеллект"</span></p>

  <div class="relative pointer-events-none text-8xl">
    <img
      bind:this={moon}
      src="assets/moon-realistic2.png"
      alt=""
      class="absolute max-w-xl top-[10svh] -right-[120vw] z-[3] blur-[2px] drop-shadow-lg"
    />
  </div>

  <FloatingStars />
</section>
