<script>
  import { animate, timeline } from "motion";

  import { lazyLoad } from "$lib/lazyLoad";

  const questionsArray = [
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

<section>
  <p>
    Проведем пару тестов на то, как хорошо вы
    <span class="gradientText"> понимаете </span>
    себя и свои эмоции!
  </p>
</section>

{#each questionsArray as question, index}
  <section>
    <div class="stack">
      <div class="card w-96 bg-base-200 shadow-xl shadow-base-300">
        <div class="card-body">
          <h2 class="card-title flex justify-center">{index + 1}.</h2>
          <p>
            {@html question.p}
          </p>
        </div>
        <figure>
          <img class="w-[100%]" use:lazyLoad={question.img} loading="lazy" alt={question.h2} />
        </figure>
      </div>
    </div>
  </section>
{/each}

<section>
  <p>
    Если что-то из этого вам незнакомо, то ваши эмоции либо <span class="gradientText">снижены</span
    >, либо <span class="gradientText"> выключены</span>. Нужно учиться принимать свои эмоции и
    правильно выражать их!
  </p>
</section>
