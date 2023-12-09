<script>
  import { animate, inView } from "motion";
  import { onMount } from "svelte";
  import { fade, slide, draw, fly } from "svelte/transition";

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
        opacity: [1, 1],
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

  $: flipCardClasses = `${bgColor} ${textColor} card card-compact drop-shadow-lg	my-3 sm:my-10 transform-gpu max-w-md sm:max-w-lg md:max-w-xl w-full`;
</script>

<div
  bind:this={tooltip}
  class="tooltip tooltip-primary tooltip-open tooltip-top px-3"
  data-tip="нажми на меня"
>
  <button
    id="flipCardContainer"
    bind:this={flipCard}
    on:click={handleClick}
    class={flipCardClasses}
    style={`background-color: oklch(var(--b3));
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3E%3Cg fill='%239C92AC' fill-opacity='0.8'%3E%3Cpath fill-rule='evenodd' d='M0 0h4v4H0V0zm4 4h4v4H4V4z'/%3E%3C/g%3E%3C/svg%3E");`}
  >
    <div
      bind:this={frontText}
      class="card-body text-base-content text-center flex justify-center items-center"
      style="transform: rotateY(0deg);"
    >
      {#if curData?.h}
        <h2 class="card-title">
          {@html curData?.h}
        </h2>
      {/if}

      {#if curData?.p}
        <p contenteditable="false" class="text-xl">
          {@html curData?.p}
        </p>
      {/if}
      {#if curData?.img}
        <img
          class="aspect-video w-[100%] object-fill rounded-b-lg w-80"
          loading="lazy"
          src={curData.img}
          alt={curData.img.replace(/\.[^/.]+$/, "")}
        />
      {/if}

      {#if curData?.svg}
        <svg width="70%" height="100%" viewBox="0 0 55 55" fill="oklch(var(--bc))">
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

  .card-body {
    padding: 0;
    margin: 16px;

    background-color: oklch(var(--b1));
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpolygon fill-rule='evenodd' points='8 4 12 6 8 8 6 12 4 8 0 6 4 4 6 0 8 4'/%3E%3C/g%3E%3C/svg%3E");
  }

  /* bg-gradient-to-r from-accent via-secondary to-primary */
  /* background: linear-gradient(
      -45deg,
      oklch(var(--p) / 0.5),
      oklch(var(--s) / 0.5),
      oklch(var(--a) / 0.5)
    );
    background-size: 400%;
    animation: move-background 10s linear infinite alternate; */

  @keyframes move-background {
    0% {
      background-position: 0;
    }
    100% {
      background-position: 100%;
    }
  }
</style>
