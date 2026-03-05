import PriceInfo from "./PriceInfo";
import styles from "./SideBarOrder.module.css";
import { useState } from "react";

const SideBarPrice = () => {
  const [showPrice, setShowPrice] = useState(false);
  return (
    <div>
      <div className={styles.top}>
        <div className={styles.passenger}>
          <img src="/img/icons/user.svg" alt="user" />
          <h2 className={styles.passenger_title}>Пассажиры</h2>
        </div>
        <button className={styles.passenger_btn}
          onClick={() => {
            setShowPrice((prev) => !prev);
          }}
        >
          <img
            src={showPrice ? "/img/icons/minus.svg" : "/img/icons/plus.svg"}
            alt=""
          />
        </button>
      </div>
      {showPrice ? <PriceInfo /> : ""}
    </div>
  );
};

export default SideBarPrice;
