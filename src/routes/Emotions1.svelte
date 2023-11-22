<script>
  import { onMount } from "svelte";
  import { scroll } from "motion";
  import { animate } from "motion";

  let emojis;

  onMount(() => {
    scroll(animate(emojis, { y: [-400, 400] }), {
      target: emojis,
    });
  });
</script>

<section>
  <h2>Emotions</h2>

  <p class="">
    Каждый человек на свете испытывает эмоции. Эмоции возникают в ответ на <span
      class="gradientText">воздействие</span
    > внешних или внутренних раздражителей, проявляясь в форме различных эмоциональных переживаний как
    положительных, так и отрицательных.
  </p>

  <div bind:this={emojis} id="emojis" class="absolute pointer-events-none text-8xl left-1/2">
    <span class="rotate-12 top-[30vh] left-[1rem]">😃</span>
    <span class="-rotate-[20deg] top-[20vh] right-[12vw]">😥</span>
    <span class=" -rotate-12 bottom-[20vh] left-[1rem]">😎</span>
  </div>
</section>

<style>
  #emojis span {
    position: absolute;
    /* opacity: 0.7; */
    /* transition: all 0.5s ease-in-out; */
    /* add a shadow to the emojis */
    text-shadow: 6px 6px 2px rgba(0, 0, 0, 0.3);
  }

  #emojis span:hover {
    /* opacity: 1; */
  }
</style>
