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

<section>
  <h2>Решайте конфликты <span class="gradientText">позитивно</span>!</h2>

  <div class="join join-vertical w-full glass text-base-content">
    {#each data as item, index}
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="my-accordion-4" checked="checked" />
        <div class="collapse-title text-xl font-medium">
          {index + 1}. {@html item.title}
        </div>
        <div class="collapse-content flex justify-center">
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
