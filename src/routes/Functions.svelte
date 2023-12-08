<script>
  import FlippingCard from "./FlippingCard.svelte";

  const dataArr = [
    {
      img: "/assets/functions/Mask group.png",
      p: "Сигнальная",
    },
    {
      img: "/assets/functions/Mask group-1.png",
      p: "коммуникативная",
    },
    {
      img: "/assets/functions/Mask group-2.png",
      p: "мотивационно-регулирующая",
    },
  ];
</script>

<section>
  <h2>Функции эмоций</h2>

  <FlippingCard bgColor="bg-primary" textColor="text-primary-content" {dataArr} />
</section>
