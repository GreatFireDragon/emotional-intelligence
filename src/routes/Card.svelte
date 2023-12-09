<script>
  import FlippingCard from "./FlippingCard.svelte";
  import { onMount } from "svelte";

  const dataArr = [
    {
      // img: "assets/tests/5.png",
      img: "https://media.giphy.com/media/Yat5wnwisEV2iXbt4x/giphy.gif",
      h2: "Header",
      p: 'Когда у вас происходит смена эмоций, <span class="gradientText">чувствуете</span> ли вы, как меняется ваше состояние?',
    },
    {
      // img: "assets/tests/1.gif",
      img: "https://media.giphy.com/media/Zm17XBTlVfjacXg44z/giphy.gif",
      h2: "Header",
      p: 'Ваши эмоции сопровождаются  <span class="gradientText">откликами</span> (например, ком в горле, легкость в груди, мурашки по спине)?',
    },
    {
      // img: "assets/tests/2.gif",
      img: "https://media.giphy.com/media/48Of1GL5BMwLhLz39d/giphy.gif",
      h2: "Header",
      p: "Вы испытываете <span class='gradientText'>интенсивные</span> чувства?",
    },
    {
      // img: "assets/tests/3.gif",
      img: "https://media.giphy.com/media/ust3qiBQXAYwPnANBI/giphy.gif",
      h2: "Header",
      p: "Вы обращаете внимание на свои <span class='gradientText'>эмоции</span>? Они влияют на принятие решений?",
    },
    {
      // img: "assets/tests/4.gif",
      img: "https://media.giphy.com/media/5Gws556y0oXSuSzdrR/giphy.gif",
      h2: "Header",
      p: "Вы <span class='gradientText'>скрываете</span> свои эмоции?",
    },
  ];
</script>

<section class="flex items-center">
  <h2>
    Проведем пару тестов на то, как хорошо вы
    <span class="gradientText"> понимаете </span>
    себя и свои эмоции!
  </h2>

  <FlippingCard {dataArr} />
</section>

<section>
  <h2>
    Если что-то из этого вам незнакомо, то ваши эмоции либо <span class="gradientText">снижены</span
    >, либо <span class="gradientText">выключены</span>
  </h2>
  <h2 class="divider">🧐</h2>

  <h2>
    Нужно учиться <span class="gradientText">принимать</span> свои эмоции и
    <span class="gradientText">правильно</span> выражать их!
  </h2>
</section>
