import styles from "./MainPage.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <div className="container" id="about">
        <h2 className={styles.about_title}>О НАС</h2>
        <div className={styles.about_block}>
          <p className={styles.about_text}>
            Мы рады видеть вас! Мы работаем для Вас с 2003 года. 14 лет мы
            наблюдаем, как с каждым днем все больше людей заказывают жд билеты
            через интернет.
          </p>
          <p className={styles.about_text}>
            Сегодня можно заказать железнодорожные билеты онлайн всего в 2
            клика, но стоит ли это делать? Мы расскажем о преимуществах заказа
            через интернет.
          </p>
          <p className={styles.about_text_bold}>
            Покупать жд билеты дешево можно за 90 суток до отправления поезда.
            Благодаря динамическому ценообразованию цена на билеты в это время
            самая низкая.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
