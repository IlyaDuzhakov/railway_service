import SelectDate from "./Date/SelectDate.jsx";
import styles from "./SideBar.module.css";
import Filters from "./Filters/Filters.jsx";
import PriceRange from "./PriceRange/PriceRange.jsx";
import Directions from "./Directions/Directions.jsx";
import LastTrains from "./LastTrains/LastTrains.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders, faXmark } from "@fortawesome/free-solid-svg-icons";
import { CSSTransition } from "react-transition-group";
import { useState, useRef } from "react";

const SideBar = () => {
  const nodeRef = useRef(null);
  const [inProp, setInProp] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <>
      <CSSTransition
        nodeRef={nodeRef}
        in={showSideBar}
        timeout={300}
        classNames={{
          enter: styles.aside_enter,
          enterActive: styles.aside_enter_active,
          enterDone: styles.aside_enter_done,
          exit: styles.aside_exit,
          exitActive: styles.aside_exit_active,
          exitDone: styles.aside_exit_done,
        }}
        // unmountOnExit
      >
        <aside className={styles.aside_close} ref={nodeRef}>
          <div className={styles.aside_top}>
            <SelectDate />
            <Filters />
            <PriceRange />
            <Directions />
          </div>

          <LastTrains />
        </aside>
      </CSSTransition>
      <button
        className={`${styles.btn_filter} ${styles.btn_filter_active}`}
        onClick={() => {
          setShowSideBar((prev) => !prev);
          setInProp(true);
        }}
      >
        {showSideBar === false ? (
          <FontAwesomeIcon
            icon={faSliders}
            className={styles.icon_filter}
            style={{ color: "#3A07B1" }}
          />
        ) : (
          <FontAwesomeIcon
            icon={faXmark}
            className={styles.icon_filter}
            style={{ color: "rgb(255, 255, 255)" }}
          />
        )}
      </button>
    </>
  );
};

export default SideBar;
