<script>
  import { onMount } from "svelte";
  import { scroll } from "motion";
  import { animate } from "motion";

  let emojis;

  onMount(() => {
    scroll(animate(emojis.querySelectorAll("span"), { y: [-300, 300] }), {
      target: emojis,
    });
  });
</script>

<section>
  <h2 class="gradientText">Эмоции</h2>

  <h3 class="">
    Каждый человек на свете испытывает эмоции. Эмоции возникают в ответ на <span
      class="gradientText">воздействие</span
    > внешних или внутренних раздражителей, проявляясь в форме различных эмоциональных переживаний как
    положительных, так и отрицательных.
  </h3>

  <div
    bind:this={emojis}
    id="emojis"
    class="absolute pointer-events-none z-[20] text-6xl xs:text-7xl left-1/2"
  >
    <span class="rotate-12 top-[28vh] left-[1vw] xs:top-[30vh] xs:left-[1vw]">😃</span>
    <span class="-rotate-[20deg] top-[30vh] right-[12vw] xs:top-[20vh] xs:right-[12vw]">😥</span>
    <span class=" -rotate-12 bottom-[35vh] xs:bottom-[20vh] xs:left-[1vw]">😎</span>
  </div>
</section>

<style>
  #emojis span {
    position: absolute;
    /* opacity: 0.7; */
    /* transition: all 0.5s ease-in-out; */
    text-shadow: 6px 6px 2px rgba(0, 0, 0, 0.3);
  }
</style>
