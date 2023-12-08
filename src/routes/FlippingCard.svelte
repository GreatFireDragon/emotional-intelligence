<script>
  import { animate } from "motion";

  export let dataArr = [];

  export let bgColor = "bg-gradient-to-br from-secondary to-accent";
  export let textColor = "text-error-content";

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

  $: flipCardClasses = `${bgColor} ${textColor} card card-compact transform-gpu max-w-md sm:max-w-lg md:max-w-xl w-full`;
</script>

<button bind:this={flipCard} on:click={handleClick} class={flipCardClasses}>
  <div
    bind:this={frontText}
    class="card-body text-center flex justify-center"
    style="transform: rotateY(0deg);"
  >
    <!-- <h2 class="card-title">Card title!</h2> -->
    <p contenteditable="false" class="text-xl">
      {@html curData.p}
    </p>
    <figure>
      <img
        class="aspect-video w-[100%] object-fill rounded-lg w-80"
        loading="lazy"
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
