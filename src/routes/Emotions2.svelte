<script>
  import FloatingStars from "$lib/components/FloatingStars.svelte";

  let container;
</script>

<section bind:this={container} class="overflow-clip">
  <p>
    Благодаря эмоциям и чувствам люди лучше находят общий язык с окружающими. Используя
    <span class="gradientText">невербальные</span> сигналы, делают выводы о состоянии своего ближнего.
  </p>

  <!-- <img class="drop-shadow-lg aspect-square max-w-xs" src="assets/emotions-circle.png" alt="" /> -->

  <FloatingStars />
</section>
