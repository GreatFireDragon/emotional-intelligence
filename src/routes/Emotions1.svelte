<script>
  import { onMount } from "svelte";
  import { scroll } from "motion";
  import { animate } from "motion";

  let emojis;

  onMount(() => {
    scroll(animate(emojis, { y: [-800, 800] }), {
      target: emojis,
    });
  });
</script>

<section>
  <h2>Emotions</h2>

  <p class="">
    Каждый человек на свете испытывает эмоции. Эмоции возникают в ответ на воздействие внешних или
    внутренних раздражителей, проявляясь в форме различных эмоциональных переживаний как
    положительных, так и отрицательных.
  </p>

  <div bind:this={emojis} id="emojis" class="absolute top-0 left-0 w-screen h-screen text-8xl">
    <span class="rotate-12">😃</span>
    <span class="-rotate-[20deg]">😥</span>
    <span class=" -rotate-12">😎</span>
  </div>
</section>

<style>
  #emojis span {
    position: absolute;
    opacity: 0.7;
    transition: all 0.5s ease-in-out;
  }

  #emojis span:hover {
    opacity: 1;
  }
</style>
