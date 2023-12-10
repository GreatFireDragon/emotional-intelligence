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
        document.querySelector("#navigationTip").style.opacity = "0";
        localStorage.setItem("tipsShown", true);
        break;
      case "Up":
        newScroll = scrollY - windowHeight;
        document.querySelector("#upTip").style.opacity = "0";
        localStorage.setItem("tipsShown", true);
        break;
      case "Down":
        newScroll = scrollY + windowHeight;
        document.querySelector("#downTip").style.opacity = "0";
        localStorage.setItem("tipsShown", true);
        break;
      default:
        break;
    }

    document.documentElement.scrollTo({
      top: newScroll,
      behavior: "smooth",
    });
  }

  // onMount check for localstorage tips and opacity 0 coresponding tips
  onMount(() => {
    const userKnowHowToClick = localStorage.getItem("tipsShown");
    if (userKnowHowToClick === "true") {
      document.querySelector("#navigationTip").style.opacity = "0";
      document.querySelector("#upTip").style.opacity = "0";
      document.querySelector("#downTip").style.opacity = "0";
    }
  });

  // onMount scroll to user's last position
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
  id="navigationTip"
  class="fixed z-50 transition-opacity pointer-events-none duration-800 tooltip tooltip-primary tooltip-left tooltip-open top-16 right-16"
  data-tip="Навигация"
/>
<div
  id="upTip"
  class="fixed z-50 transition-opacity pointer-events-none duration-800 tooltip tooltip-primary
tooltip-left tooltip-open top-2/3 translate-y-[30px] right-24"
  data-tip="Вверх ↑"
/>
<div
  id="downTip"
  class="fixed z-50 transition-opacity pointer-events-none duration-800 tooltip tooltip-primary
tooltip-left tooltip-open top-2/3 translate-y-[70px] right-24"
  data-tip="Вниз ↓"
/>

<div
  class="fixed z-50 transition-all duration-500 join join-vertical top-10 right-3 hover:opacity-100"
>
  <button class="btn join-item btn-primary" on:click={scrollUpDown}>👆</button>
</div>

<div
  class="fixed z-50 transition-all duration-500 join join-vertical top-2/3 right-3 hover:opacity-100"
>
  <button class="btn join-item btn-primary" on:click={scrollUpDown}>Up</button>
  <button class="btn join-item btn-primary" on:click={scrollUpDown}>Down</button>
</div>

<svelte:window bind:scrollY bind:outerHeight={windowHeight} />
