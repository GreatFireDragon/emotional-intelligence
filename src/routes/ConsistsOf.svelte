<script>
  import FlippingCard from "./FlippingCard.svelte";

  const dataArr = [
    {
      h: "<span class='gradientText'>I. Социальная компетентность</span>",
      p: "Способность понимать настроение других людей, их поведение и мотивы, чтобы улучшить качество взаимоотношений",
      img: "",
    },
    {
      h: "I.1. Социальное понимание",
      p: "Способность точно подмечать эмоции других людей и понимать, что действительно происходит.",
      img: "",
    },
    {
      h: "I.2. Управление отношениями ",
      p: "Способность использовать понимание своих и чужих эмоций, чтобы успешно управлять взаимодействиями с другими людьми. ",
      img: "",
    },
    {
      h: "<span class='gradientText'>II. Личная компетентность</span>",
      p: "Способность человека осознавать свои эмоции и управлять своим поведением и склонностями. ",
      img: "",
    },
    {
      h: "II.1. Cамосознание",
      p: "Способность точно чувствовать собственные эмоции и отслеживать их появление и развитие.",
      img: "",
    },
    {
      h: "II.2. Cамоуправление",
      p: "Способность использовать понимание своих эмоций, чтобы оставаться гибким и положительно направлять свое поведение. ",
      img: "",
    },
  ];
</script>

<section>
  <h2>Эмоциональный интеллект состоит из</h2>

  <FlippingCard {dataArr} />
</section>
