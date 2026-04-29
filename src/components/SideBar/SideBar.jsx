import SelectDate from "./Date/SelectDate.jsx";
import styles from "./SideBar.module.css";
import Filters from "./Filters/Filters.jsx";
import PriceRange from "./PriceRange/PriceRange.jsx";
import Directions from "./Directions/Directions.jsx";
import LastTrains from "./LastTrains/LastTrains.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders, faXmark } from "@fortawesome/free-solid-svg-icons";
import {CSSTransition} from 'react-transition-group'
import { useState, useRef } from "react";


const SideBar = () => {
  const nodeRef = useRef(null);
  const [inProp, setInProp] = useState(false);
  const [showSideBar, setShowSideBar] = useState(true);
  const [width, setWidth] = useState(window.innerWidth)
  window.addEventListener('resize', ()=> {
    setWidth(window.innerWidth)
  })
  return (
    <>
      {/* {showSideBar === true ? ( */}
        {/* <CSSTransition
          nodeRef={nodeRef}
          in={inProp}
          timeout={3000}
          classNames="my-node"
        > */}
         <CSSTransition
        nodeRef={nodeRef}
        in={showSideBar}
        timeout={300}
        classNames={{
          enter: styles.aside_enter,
          enterActive: styles.aside_enter_active,
          exit: styles.aside_exit,
          exitActive: styles.aside_exit_active,
        }}
        unmountOnExit
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
        
        {/* ) : (  */}
         {/* ""  */}
      {/* )}   */}
      </CSSTransition>
      <button
        className={`${styles.btn_filter} ${styles.btn_filter_active}`}
        onClick={() => {
          setShowSideBar((prev) => !prev);
          setInProp(true)
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

  // const [inProp, setInProp] = useState(false);
  // const nodeRef = useRef(null);
  // return (
  //   <div>
  //     <CSSTransition nodeRef={nodeRef} in={inProp} timeout={200} classNames="my-node">
  //       <div ref={nodeRef}>
  //         {"I'll receive my-node-* classes"}
  //       </div>
  //     </CSSTransition>
  //     <button type="button" onClick={() => setInProp(true)}>
  //       Click to Enter
  //     </button>
  //   </div>
  // );
};

export default SideBar;
