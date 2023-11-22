<script>
  import { onMount, afterUpdate } from "svelte";

  let scrollY = 0;
  let windowHeight;

  function scrollUpDown(e) {
    const value = e.target.textContent;

    let newScroll;
    switch (value) {
      case "👆":
        newScroll = 0;
        break;
      case "Up":
        newScroll = scrollY - windowHeight;
        break;
      case "Down":
        newScroll = scrollY + windowHeight;
        break;
      default:
        break;
    }

    document.documentElement.scrollTo({
      top: newScroll,
      behavior: "smooth",
    });
  }

  // onmount scroll to user's last position
  onMount(() => {
    const lastScrollPosition = localStorage.getItem("lastScrollPosition");
    if (lastScrollPosition) {
      window.scrollTo(0, parseInt(lastScrollPosition));
    }
  });

  // store last scroll position
  afterUpdate(() => {
    localStorage.setItem("lastScrollPosition", scrollY);
  });
</script>

<div
  class="fixed z-50 transition-all duration-500 join join-vertical top-10 right-3 opacity-10 hover:opacity-50"
>
  <button class="btn join-item" on:click={scrollUpDown}>👆</button>
</div>
<div
  class="fixed z-50 transition-all duration-500 join join-vertical top-2/3 right-3 opacity-10 hover:opacity-50"
>
  <button class="btn join-item" on:click={scrollUpDown}>Up</button>
  <button class="btn join-item" on:click={scrollUpDown}>Down</button>
</div>

<svelte:window bind:scrollY bind:outerHeight={windowHeight} />
