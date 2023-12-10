<script>
  const data = [
    {
      title: "Посмотрите на ситуацию <span class='gradientText'>со стороны</span>",
      p: "Стоит ли вообще отстаивать свою позицию. Может быть каждому лучше остаться при своём мнении, если тема вашего спора не касается ваших личных интересов, а началась из-за пустяка.",
      img: "",
    },
    {
      title: "<span class='gradientText'>Уважайте</span> оппонента",
      p: "Пусть в чём-то вы не согласны друг с другом, но каждый из вас – личность – и достоин уважения. Ни в коем случае не оскорбляйте его и не оценивайте его качества.  Не отвечайте на оскорбления оскорблениями ",
      img: "",
    },
    {
      title:
        "Старайтесь <span class='gradientText'>понять собеседника</span>, а не только доказать свою правоту.",
      p: "Позволь ему высказаться, внимательно слушай его. Даже если считаете, что собеседник не прав, не говорите ему «Ты не прав», это обидит и рассердит его. Лучше скажите: «У меня другое мнение на этот счёт».",
      img: "",
    },
    {
      title: "Найдите то, в чём вы друг с другом <span class='gradientText'>согласны</span>",
      p: "(хотя бы какую-то мелочь), и обратите внимание собеседника на это.",
      img: "",
    },
  ];
</script>

<section class="overflow-visible">
  <h2>Решайте конфликты <span class="gradientText">позитивно</span>!</h2>

  <div class="w-full mx-3 join join-vertical sm:mx-10 glass text-base-content">
    {#each data as item, index}
      <div class="border collapse collapse-arrow join-item border-base-300">
        <input type="radio" name="my-accordion-4" checked="checked" />
        <div class="text-base collapse-title xs:text-lg sm:text-2xl md:text-4xl">
          {index + 1}. {@html item.title}
        </div>
        <div class="flex justify-center collapse-content">
          <p>{@html item.p}</p>
          <!-- <img
            class="h-[20vh]"
            src={`assets/stickmans/${item.img}`}
            alt={item.img.replace(/\.[^/.]+$/, "")}
          /> -->
        </div>
      </div>
    {/each}
  </div>
</section>
