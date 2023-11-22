<script>
  import Intelligence from "./Intelligence.svelte";

  import Emotions3 from "./Emotions3.svelte";
  import Emotions2 from "./Emotions2.svelte";
  import Emotions1 from "./Emotions1.svelte";
  import Header from "./Header.svelte";
  import Card from "./Card.svelte";
</script>

<Header />

<Emotions1 />
<Emotions2 />
<Emotions3 />

<Card />

<Intelligence />

<section>
  <h2>Зачем он нужен?</h2>

  <div class="flex items-center gap-10 flex-col card w-96 bg-success text-success-contente">
    <div class="flex flex-col items-center card-body">
      <img src="assets/stickmans/relax.png" alt="relax" />
      <p class="text-center uppercase font-bold">
        Позволяет нам <span class="">снизить стресс</span>
      </p>
    </div>
  </div>

  <div class="flex items-center gap-10 flex-col card w-96 bg-warning text-warning-content">
    <div class="flex flex-col items-center card-body">
      <img src="assets/stickmans/communicate.png" alt="communicate" />
      <p class="text-center uppercase font-bold">
        позволяет научиться <span class="">эффективному общению</span>
      </p>
    </div>
  </div>

  <div class="flex items-center gap-10 flex-col card w-96 bg-error text-error-content">
    <div class="flex flex-col items-center card-body">
      <img src="assets/stickmans/fight.png" alt="fight" />
      <p class="text-center uppercase font-bold">
        позволяет <span class="">преодолевать препятствия</span> и лучше разрешать конфликтов.
      </p>
    </div>
  </div>
</section>
