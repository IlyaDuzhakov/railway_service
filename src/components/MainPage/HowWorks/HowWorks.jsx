import HowWorksCard from "../HowWorksCard.jsx";
import classes from "./HowWorks.module.css";

const HowWorks = () => {
  const cards = [
    { path: "/img/icons/desctop.svg", text: "Удобный заказ на сайте" },
    { path: "/img/icons/build.svg", text: "Нет необходимости ехать в офис" },
    { path: "/img/icons/planet.svg", text: "Огромный выбор направлений" },
  ];

  return (
    <div className={classes.how_works_wrapper} id="howWorks">
      <div className="container">
        <div className={classes.how_works_top}>
          <h2 className={classes.question}>КАК ЭТО РАБОТАЕТ</h2>
          <button className={classes.more_information}>Узнать больше</button>
        </div>
      </div>
      <div className="container">
        <div className={classes.how_works_bottom}>
          {cards.map((el, index) => {
            return <HowWorksCard el={el} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default HowWorks;
