<script>
  import { animate, timeline } from "motion";

  let cardFront;
  let cardBack;
  let curCard = 0;

  function nextCard() {
    if (curCard === questionsArray.length) return;
    curCard = curCard + 1;
  }

  const questionsArray = [
    "Когда у вас происходит смена эмоций, чувствуете ли вы, как меняется ваше состояние?",
    "Ваши эмоции сопровождаются откликами, которые вы испытываете в животе, груди, горле (например, ком в горле, легкость в груди, мурашки по спине и пр.)?",
    "Вы можете испытать интенсивные  чувства ?",
    "Вы обращаете внимание на свои эмоции? Они влияют на принятие решений?",
    "Вы скрываете свои эмоции?",
  ];

  function handleClickNext() {
    timeline(
      [
        [".card-front", { transform: ["rotateY(0deg)", "rotateY(180deg)"] }],
        [".card-back", { transform: ["rotateY(-180deg)", "rotateY(0deg)"] }, { at: "<" }],
      ],
      {
        defaultOptions: { duration: 0.8 },
      }
    );
  }
</script>

<section>
  <p>
    Проведем пару тестов на то, как хорошо вы
    <span class="gradientText"> понимаете </span>
    себя и свои эмоции!
  </p>

  <div class="divider divider-neutral">Нажмите</div>

  <div class="stack">
    <div class="text-center border border-base-content card w-36 bg-base-100">
      <div class="card-body">A</div>
    </div>
    <div class="text-center border border-base-content card w-36 bg-base-100">
      <div class="card-body">B</div>
    </div>
    <div class="text-center border border-base-content card w-36 bg-base-100">
      <div class="card-body">C</div>
    </div>
  </div>

  <div class="divider divider-neutral">Нажмите</div>

  <p>
    Если что-то из этого вам незнакомо, то ваши эмоции либо <span class="gradientText">снижены</span
    >, либо <span class="gradientText"> выключены</span>. Нужно учиться принимать свои эмоции и
    правильно выражать их!
  </p>
</section>

<style>
  .card {
    position: relative;
    perspective: 1000px;
  }

  .card-front,
  .card-back {
    width: 100%;
    height: max-content;
    position: absolute;
    backface-visibility: hidden;
    transform-style: preserve-3d;
  }

  .card-back {
    transform: rotateY(-180deg);
  }

  .card-front,
  .card-back {
    transition: transform 0.8s;
  }
</style>
