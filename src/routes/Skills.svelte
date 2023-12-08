<script>
  import FlippingCard from "./FlippingCard.svelte";

  const dataArr = [
    {
      p: "Быстро снижать уровень стресса",
      img: "https://media.giphy.com/media/1gQwMNJ9z1mqABgQd3/giphy.gif",
    },
    {
      p: "Необходимо осознать, что у вас стресс. Как вы нв него реагируете?",
      img: "https://media2.giphy.com/media/l3q2vcUWgZOmE5ReM/giphy.gif?cid=ecf05e4733vvt4gkctf6itblq8s4j2dgw92s4hw9rdbarhnz&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    },
    {
      p: "Необходимо найти свою технику борьбы со стрессом",
      img: "https://media.giphy.com/media/1fm1gG77Owxao1EpLm/giphy.gif",
    },
    {
      p: "Устанавливать контакт с окружающими, используя невербальную коммуникацию",
      img: "https://media.giphy.com/media/t8n9fhtUuWfxO0XiSp/giphy.gif",
    },
    {
      p: "Нужно фокусироваться на своем собеседнике, установить с ним зрительный контакт, обращать внимание на выражений лица, тон голоса, положения тела собеседника",
      img: "",
    },
    {
      p: "Использовать юмор и игру, чтобы справляться с вызовами и преодолевать препятствия",
      img: "https://media.giphy.com/media/U7UPOmbBZLzrTotMWn/giphy.gif",
    },
  ];
</script>

<section>
  <h2>Развивайте</h2>
  <h2>следующие</h2>
  <h2><span class="gradientText">↓ навыки ↓</span></h2>

  <FlippingCard {dataArr} />
</section>
