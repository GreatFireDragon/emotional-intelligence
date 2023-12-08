<script>
  import { animate } from "motion";

  /** @type {{ p: string, img: string }} */
  export let dataArr = []; // [{p: 'string', img: 'string'}]

  export let bgColor = "";
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

  // prelaod images
  const images = dataArr.map((d) => d.img);
  $: {
    for (let i = 0; i < images.length; i++) {
      const img = new Image();
      img.src = images[i];
    }
  }

  $: flipCardClasses = `${bgColor} ${textColor} card card-compact transform-gpu max-w-md sm:max-w-lg md:max-w-xl w-full`;
</script>

<button id="flipCardContainer" bind:this={flipCard} on:click={handleClick} class={flipCardClasses}>
  <div
    bind:this={frontText}
    class="card-body text-center flex justify-center"
    style="transform: rotateY(0deg);"
  >
    <!-- <h2 class="card-title">Card title!</h2> -->
    <p contenteditable="false" class="text-xl">
      {@html curData?.p}
    </p>

    {#if curData?.img}
      <img
        class="aspect-video w-[100%] object-fill rounded-lg w-80"
        loading="eager"
        src={curData?.img}
        alt={curData?.img.replace(/\.[^/.]+$/, "")}
      />
    {/if}

    {#if curData?.svg}
      <svg width="100%" height="100%" viewBox="0 0 55 55">
        {@html curData?.svg}
      </svg>
    {/if}
  </div>
</button>

<style>
  .card {
    transition: transform 1s;
    transform-style: preserve-3d;
  }

  #flipCardContainer {
    /* bg-gradient-to-r from-accent via-secondary to-primary */
    background: linear-gradient(
      -45deg,
      oklch(var(--p) / 0.5),
      oklch(var(--s) / 0.5),
      oklch(var(--a) / 0.5)
    );
    background-size: 400%;
    animation: move-background 10s linear infinite alternate;
  }

  @keyframes move-background {
    0% {
      background-position: 0;
    }
    100% {
      background-position: 100%;
    }
  }
</style>
