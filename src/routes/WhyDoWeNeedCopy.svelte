<script>
  import FlipCard from "./FlipCard.svelte";
  import FlippingCard from "./FlippingCard.svelte";

  const dataArr = [
    {
      p: 'Позволяет нам <span class="gradientText">снизить стресс</span>',
      img: "assets/stickmans/relax.png",
    },
    {
      p: 'Позволяет научиться <span class="gradientText">эффективному общению</span>',
      img: "assets/stickmans/communicate.png",
    },
    {
      p: 'Позволяет <span class="gradientText">преодолевать препятствия</span> и лучше разрешать конфликтов.',
      img: "assets/stickmans/fight.png",
    },
    {
      p: "Понимание эмоций",
      img: "assets/stickmans/emotions.png",
    },
    {
      p: "понимание потребностей и проблем",
      img: "assets/stickmans/needs.png",
    },
    {
      p: "ощущение комфорта в обществе",
      img: "assets/stickmans/comfort.png",
    },
  ];
</script>

<section>
  <h2><span class="gradientText">Зачем</span> он нужен?</h2>

  <FlippingCard {dataArr} />
</section>
