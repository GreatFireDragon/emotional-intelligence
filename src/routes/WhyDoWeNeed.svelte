<script>
  const data = [
    {
      title: 'Позволяет нам <span class="gradientText">снизить стресс</span>',
      img: "relax.png",
    },
    {
      title: 'Позволяет научиться <span class="gradientText">эффективному общению</span>',
      img: "communicate.png",
    },
    {
      title:
        'Позволяет <span class="gradientText">преодолевать препятствия</span> и лучше разрешать конфликтов.',
      img: "fight.png",
    },
    {
      title: "Понимание эмоций",
      img: "emotions.png",
    },
    {
      title: "понимание потребностей и проблем",
      img: "needs.png",
    },
    {
      title: "ощущение комфорта в обществе",
      img: "comfort.png",
    },
  ];
</script>

<section>
  <h2><span class="gradientText">Зачем</span> он нужен?</h2>

  <div class="join join-vertical w-full glass text-base-content">
    {#each data as item}
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="my-accordion-4" checked="checked" />
        <div class="collapse-title text-xl font-medium">
          {@html item.title}
        </div>
        <div
          class="collapse-content flex justify-center bg-gradient-to-br from-secondary to-accent py-5"
        >
          <img
            class="h-[20vh]"
            src={`assets/stickmans/${item.img}`}
            alt={item.img.replace(/\.[^/.]+$/, "")}
          />
        </div>
      </div>
    {/each}
  </div>
</section>
