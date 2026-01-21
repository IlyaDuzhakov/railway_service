import ReviewCard from "./ReviewCard";

const Reviews = () => {
  const reviews = [
    {
      path: "./img/review-1.png",
      name: "Екатерина Вальнова",
      text: "Доброжелательные подсказки на всех этапах помогут правильно заполнить поля и без затруднений купить авиа или ж/д билет, даже если вы заказываете онлайн билет впервые.",
    },
    {
      path: "./img/review-2.png",
      name: "Евгений Стрыкало",
      text: "СМС-сопровождение до посадки Сразу после оплаты ж/д билетов и за 3 часа до отправления мы пришлем вам СМС-напоминание о поездке.",
    },
  ];

  return (
    <div>
      <h2>отзывы</h2>
      {reviews.map((el, index) => {
        return <ReviewCard el={el} key={index}/>;
      })}
    </div>
  );
};

export default Reviews;
