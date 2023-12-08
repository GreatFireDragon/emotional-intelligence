<script>
  import { onMount } from "svelte";

  let flipCard;
  let frontText;

  const data = [
    "Необходимо осознать, что у вас стресс. Как вы нв него реагируете?",
    "Необходимо найти свою технику борьбы со стрессом.",
  ];

  const dataArr = [
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
      title: "Позволяет лучше понимать свои эмоции.",
      img: "emotions.png",
    },
    {
      title: "Позволяет понимать наши потребности и проблемы",
      img: "needs.png",
    },
    {
      title: "Даёт ощущение комфорта в обществе",
      img: "comfort.png",
    },
  ];

  let curData = dataArr[0];

  let clicks = 0;
  function handleClick() {
    clicks++;
    flipCard.classList.toggle("is-flipped");

    // frontText.innerText = data[clicks % data.length];
    curData = dataArr[clicks % dataArr.length];

    if (clicks % 2 === 0) {
      frontText.style.transform = "rotateY(-180deg)";
    } else {
      frontText.style.transform = "rotateY(0deg)";
    }
  }
</script>

<button
  bind:this={flipCard}
  on:click={handleClick}
  class="card card-compact w-96 bg-teal-50 transform-gpu is-flipped text-primary-content"
>
  <div class="card-body text-center">
    <!-- <h2 class="card-title">Card title!</h2> -->
    <p contenteditable="false" class="text-xl" bind:this={frontText}>
      {@html curData["title"]}
    </p>
    <figure>
      <img
        class="h-[20vh]"
        src="/assets/stickmans/{curData.img}"
        alt={curData.img.replace(/\.[^/.]+$/, "")}
      />
    </figure>
  </div>
</button>

<style>
  .card {
    transition: transform 0.6s;
    transform-style: preserve-3d;
  }

  .is-flipped {
    transform: rotateY(-180deg);
  }
</style>
