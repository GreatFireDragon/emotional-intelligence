<script>
  import FlippingCard from "./FlippingCard.svelte";

  const dataArr = [
    {
      img: "assets/hank-brb.png",
      h2: "Header",
      p: 'Когда у вас происходит смена эмоций, <span class="gradientText">чувствуете</span> ли вы, как меняется ваше состояние?',
    },
    {
      img: "assets/the-office-sad-small.gif",
      h2: "Header",
      p: 'Ваши эмоции сопровождаются  <span class="gradientText">откликами</span> (например, ком в горле, легкость в груди, мурашки по спине)?',
    },
    {
      img: "assets/rage-anger-small.gif",
      h2: "Header",
      p: "Вы испытываете <span class='gradientText'>интенсивные</span> чувства?",
    },
    {
      img: "assets/hank-brb.png",
      h2: "Header",
      p: "Вы обращаете внимание на свои <span class='gradientText'>эмоции</span>? Они влияют на принятие решений?",
    },
    {
      img: "assets/hank-brb.png",
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
    >, либо <span class="gradientText"> выключены</span>. Нужно учиться принимать свои эмоции и
    правильно выражать их!
  </h2>
</section>
