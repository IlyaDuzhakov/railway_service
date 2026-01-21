import HowWorksCard from "./HowWorksCard";
// import styles from "./MainPage.module.css";

const HowWorks = () => {
  const cards = [
    { path: "./img/icons/desctop.svg", text: "Удобный заказ на сайте" },
    { path: "./img/icons/build.svg", text: "Нет необходимости ехать в офис" },
    { path: "./img/icons/planet.svg", text: "Огромный выбор направлений" },
  ];

  return (
    <div id="howWorks">
      <div className="howWorksTop">
        <h2>Как это работает</h2>
        <button>Узнать больше</button>
      </div>
      <div className="howWorksBottom">
        {cards.map((el, index) => {
          return (
            <HowWorksCard el={el} key={index}/>
          );
        })}
      </div>
    </div>
  );
};

export default HowWorks;
