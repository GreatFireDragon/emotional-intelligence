<script>
  import { animate } from "motion";

  export let dataArr = [];

  let flipCard;
  let frontText;

  let curData = dataArr[0];

  let clicks = 0;
  function handleClick() {
    clicks++;
    curData = dataArr[clicks % dataArr.length];

    animate(
      flipCard,
      {
        opacity: [0.3, 0, 1],
      },
      { duration: 1 }
    );

    if (clicks % 2 === 0) {
      flipCard.style.transform = "rotateY(0deg)";
      frontText.style.transform = "rotateY(0deg)";
    } else {
      flipCard.style.transform = "rotateY(-180deg)";
      frontText.style.transform = "rotateY(-180deg)";
    }
  }
</script>

<button
  bind:this={flipCard}
  on:click={handleClick}
  class="card card-compact bg-teal-50 transform-gpu text-primary-content"
>
  <div bind:this={frontText} class="card-body text-center" style="transform: rotateY(0deg);">
    <!-- <h2 class="card-title">Card title!</h2> -->
    <p contenteditable="false" class="text-xl">
      {@html curData.p}
    </p>
    <figure>
      <img
        class=" w-[100%] object-cover rounded-lg w-80"
        src={curData.img}
        alt={curData.img.replace(/\.[^/.]+$/, "")}
      />
    </figure>
  </div>
</button>

<style>
  .card {
    transition: transform 1s;
    transform-style: preserve-3d;
  }
</style>
