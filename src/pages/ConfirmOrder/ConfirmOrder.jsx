import styles from "./ConfirmOrder.module.css";
import ConfirmOrderPage from "../../components/ConfirmOrderPage/ConfirmOrderPage.jsx";
import HeaderSelectTrain from "../../components/Header/HeaderSelectTrain/HeaderSelectTrain";
import SideBarOrder from "../../components/SideBar/SideBarOrder/SideBarOrder";
import { CSSTransition } from "react-transition-group";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import { useState } from "react";

const ConfirmOrder = () => {
  const [showSideBarOrder, setShowSideBarOrder] = useState(false);
  const nodeRef = useRef(null);
  return (
    <div>
      <div>
        <HeaderSelectTrain />
        <div className={styles.main}>
          <div className="container">
            <button
              className={styles.info_btn}
              onClick={() => setShowSideBarOrder((prev) => !prev)}
            >
              <FontAwesomeIcon
                icon={showSideBarOrder ? faXmark : faCircleInfo}
              />
            </button>
            <div className={styles.main_wrapper}>
              <CSSTransition
                nodeRef={nodeRef}
                in={showSideBarOrder}
                timeout={300}
                classNames={{
                  enter: styles.sidebar_enter,
                  enterActive: styles.sidebar_enter_active,
                  enterDone: styles.sidebar_enter_done,
                  exit: styles.sidebar_exit,
                  exitActive: styles.sidebar_exit_active,
                  exitDone: styles.sidebar_exit_done,
                }}
              >
                <div ref={nodeRef} className={styles.sidebar_order_wrap}>
                  <SideBarOrder />
                </div>
              </CSSTransition>

              <ConfirmOrderPage />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmOrder;
