<script>
  import { onMount } from "svelte";
  import { page } from "$app/stores";

  // select tab that corresponds to current path
  onMount(() => {
    const currentPath = $page.url.pathname;
    const tabs = document.querySelectorAll(".tab");

    tabs.forEach((tab) => {
      tab.classList.remove("tab-active");
      if (tab.getAttribute("href") === currentPath) {
        tab.classList.add("tab-active");
      }
    });
  });

  function handleTabClick(e) {
    const tabs = e.currentTarget.querySelectorAll(".tab");

    tabs.forEach((tab) => {
      tab.classList.remove("tab-active");
    });
    e.target.classList.add("tab-active");

    document.title = e.target.textContent;
  }

  function handleTabKeydown(e) {
    if (e.key === "Enter" || e.key === " ") {
      handleTabClick(e);
      e.target.click();
    }
  }
</script>

<div
  tabindex="0"
  role="button"
  on:click={handleTabClick}
  on:keydown={handleTabKeydown}
  class=" tabs tabs-lifted"
>
  <a href="/" class="tab">main</a>
  <a href="/scroll" class="tab tab-active">scroll</a>
</div>
