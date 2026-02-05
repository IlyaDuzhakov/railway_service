import ReviewCard from "./ReviewCard";
import styles from './MainPage.module.css'

const Reviews = () => {
  const reviews = [
    {
      path: "./img/review-1.png",
      name: "Екатерина Вальнова",
      text: "“Доброжелательные подсказки на всех этапах помогут правильно заполнить поля и без затруднений купить авиа или ж/д билет, даже если вы заказываете онлайн билет впервые.“",
    },
    {
      path: "./img/review-2.png",
      name: "Евгений Стрыкало",
      text: "“СМС-сопровождение до посадки Сразу после оплаты ж/д билетов и за 3 часа до отправления мы пришлем вам СМС-напоминание о поездке.“",
    },
  ];

  return (
    <div className={styles.reviews_block}>
    <div className="container">
      <h2 className={styles.reviews}>отзывы</h2>
      <div className={styles.wr}>
      {reviews.map((el, index) => {
        return <ReviewCard el={el} key={index}/>;
      })}
      </div>
    </div>
    </div>
  );
};

export default Reviews;
