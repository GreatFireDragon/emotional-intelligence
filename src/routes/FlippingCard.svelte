<script>
  import { animate, inView } from "motion";
  import { onMount } from "svelte";

  /** @type {{ p: string, img: string }} */
  export let dataArr = []; // [{p: 'string', img: 'string'}]

  export let bgColor = "";
  export let textColor = "text-error-content";

  let tooltip;
  onMount(() => {
    const userKnowHowToClick = localStorage.getItem("flipCard");
    if (userKnowHowToClick === "true") {
      tooltip.classList.remove("tooltip-open");
      tooltip.classList.remove("tooltip");
      tooltip.classList.remove("tooltip-primary");
      tooltip.classList.remove("tooltip-top");
    }
  });

  let flipCard;
  let frontText;

  let curData = dataArr[0];

  let clicks = 0;
  function handleClick() {
    localStorage.setItem("flipCard", true);
    tooltip.classList.remove("tooltip-open");
    tooltip.classList.remove("tooltip");
    tooltip.classList.remove("tooltip-primary");
    tooltip.classList.remove("tooltip-top");

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

  let windowHeight = 0;
  onMount(() => {
    inView(
      "#flipCardContainer",
      () => {
        dataArr?.map((d) => {
          if (!d?.img) return;
          const img = new Image();
          img.src = d?.img;

          img.addEventListener("load", function () {
            console.log("Image loaded successfully");
          });
        });
      },
      { margin: `${windowHeight * 3}px 0px  0px 0px` }
    );
  });

  $: flipCardClasses = `${bgColor} ${textColor} card card-compact transform-gpu max-w-md sm:max-w-lg md:max-w-xl w-full`;
</script>

<svelte:window bind:innerHeight={windowHeight} />

<div
  bind:this={tooltip}
  class="tooltip tooltip-primary tooltip-open tooltip-top"
  data-tip="нажми на меня"
>
  <button
    id="flipCardContainer"
    bind:this={flipCard}
    on:click={handleClick}
    class={flipCardClasses}
  >
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
          loading="lazy"
          src={curData?.img}
          alt={curData?.img.replace(/\.[^/.]+$/, "")}
        />
      {/if}

      {#if curData?.svg}
        <svg width="100%" height="100%" viewBox="0 0 55 55" fill="oklch(var(--n))">
          {@html curData?.svg}
        </svg>
      {/if}
    </div>
  </button>
</div>

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
