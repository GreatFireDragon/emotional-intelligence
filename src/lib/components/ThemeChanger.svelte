<script>
  import themes from "$lib/themes";
  import { enhance } from "$app/forms";
  import { page } from "$app/stores";
  import { onMount } from "svelte";

  export let data;

  let tooltip;
  onMount(() => {
    const userKnowHowToClick = localStorage.getItem("themeClick");
    if (userKnowHowToClick === "true") {
      tooltip.classList.remove("tooltip");
    }
  });

  const submitUpdateTheme = ({ action }) => {
    localStorage.setItem("themeClick", true);
    const theme = action.searchParams.get("theme");

    if (theme) {
      document.documentElement.setAttribute("data-theme", theme);
    }
  };
</script>

<div
  bind:this={tooltip}
  class="px-3 tooltip tooltip-primary tooltip-open tooltip-bottom"
  data-tip="Сменить тему"
>
  <div class="dropdown">
    <button tabindex="0" class="m-1 btn">
      Theme
      <svg
        width="12px"
        height="12px"
        class="inline-block w-2 h-2 fill-current opacity-60"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2048 2048"
        ><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z" /></svg
      >
    </button>

    <form method="POST" use:enhance={submitUpdateTheme}>
      <ul
        id="theme-dropdown"
        class="z-50 dropdown-content overflow-x-hidden p-2 grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] h-[70svh] min-w-max
    overflow-scroll
    shadow-2xl bg-base-300 rounded-box"
      >
        {#each themes as theme}
          <li class="min-w-[100px] flex-[1_0_auto]">
            <button
              formaction="/?/setTheme&theme={theme}&redirectTo={$page.url.pathname}"
              name="theme-dropdown"
              class="justify-start theme-controller btn btn-sm btn-ghost"
              style={`${
                data?.theme === theme
                  ? "background-color: oklch(var(--p)); color: oklch(var(--pc));"
                  : ""
              }`}
              aria-label={theme}
              value={theme}>{theme}</button
            >
          </li>
        {/each}
      </ul>
    </form>
  </div>
</div>
