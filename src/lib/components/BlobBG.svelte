<script>
  function randomOffset() {
    return (Math.random() * 80 + 20).toFixed(0);
  }

  function randomDelay() {
    return (Math.random() * 100 + 0).toFixed(0);
  }

  function randomDuration() {
    return (Math.random() * 200 + 10).toFixed(0);
  }
</script>

<div class="background z-[-1]">
  {#each [...Array(10).keys()] as blob}
    <span
      style="top: {randomOffset()}%; left: {randomOffset()}%; bottom: {randomOffset()}%; right: {randomOffset()}%; transform-origin: {randomOffset()}% {randomDelay()}%;
    animation-delay: -{randomDelay()}s; animation-duration: {randomDuration()}s;"
    />
  {/each}
</div>

<style>
  @keyframes move {
    100% {
      transform: translate3d(0, 0, 1px) rotate(360deg);
    }
  }

  .background {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    /* background: #3e1e68; */
    overflow: hidden;
  }

  .background span {
    width: 20vmin;
    height: 20vmin;
    border-radius: 20vmin;
    backface-visibility: hidden;
    position: absolute;
    animation: move;
    animation-duration: 28;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  .background span:nth-child(n + 0) {
    color: oklch(var(--p) / 1);
    box-shadow: 100vmin 0 12vmin currentColor;
  }
  .background span:nth-child(2n + 0) {
    color: oklch(var(--s) / 1);
    box-shadow: -100vmin 0 13vmin currentColor;
  }
  .background span:nth-child(3n + 0) {
    color: oklch(var(--a) / 1);
    box-shadow: 100vmin 0 13vmin currentColor;
  }
</style>
