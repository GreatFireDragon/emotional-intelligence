<script>
  import { onMount } from "svelte";
  import FloatingStars from "$lib/components/FloatingStars.svelte";
  import { animate, inView, spring, timeline } from "motion";

  let windowW;

  let moon;
  let fox;
  onMount(() => {
    inView(moon.parentNode, ({ target }) => {
      animate(
        fox,
        { x: [windowW, -windowW * 1.5] },
        { duration: 10, repeat: Infinity, delay: -2, easing: "ease-in-out" }
      );
      // animate(
      //   moon,
      //   { rotate: [0, 360] },
      //   { repeat: Infinity, duration: 10, direction: "alternate-reverse" }
      // );

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
  <!-- <p class="text-center -mb-3 text-[0.5rem]">
    Государственное бюджетное общеобразовательное учреждение средняя школа № 222 с углубленным
    изучением немецкого языка "ПЕТРИШУЛЕ" Центрального района Санкт-Петербурга
  </p> -->
  <p class="text-center -mb-3">Продукт для проекта по теме:</p>
  <h2 class="text-center gradientText">"Эмоциональный интеллект"</h2>
  <p class="text-center">Ученица <span class="gradientText">10 "Б"</span> класса</p>
  <p class="text-center">
    Романовой <span class="gradientText">Александры</span> Станиславовны
  </p>
  <p class="text-center">
    Руководители: учитель биологии <span class="gradientText">Кононенко Ангелина Алексеевна</span> и
    учитель информатики <span class="gradientText">Леонидов Иванович Леонидов</span> класса
  </p>
  <h2 class="gradientText">2024</h2>

  <img
    src="assets/prince-small/boy-front.png"
    alt=""
    class="max-w-xs bottom z-[5] drop-shadow-lg"
  />

  <div class="relative pointer-events-none text-8xl">
    <img
      bind:this={fox}
      src="assets/prince-small/fox-running.png"
      alt=""
      class="absolute max-w-xl z-[3] rotate-6 -right-[100vw] bottom-[30svh] drop-shadow-lg"
    />
  </div>
  <img
    bind:this={moon}
    src="assets/moon-realistic2.png"
    alt=""
    class="absolute max-w-xl -bottom-[50svh] xs:-bottom-[40svh] -right-[40vw] sm:right-0 z-[3] blur-[2px] drop-shadow-lg"
  />

  <FloatingStars />
</section>
