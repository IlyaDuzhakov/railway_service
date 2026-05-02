import PaymentPage from "../../components/PaymentPage/PaymentPage.jsx";
import HeaderSelectTrain from "../../components/Header/HeaderSelectTrain/HeaderSelectTrain";
import SideBarOrder from "../../components/SideBar/SideBarOrder/SideBarOrder";

import classes from "./Payment.module.css";
import { CSSTransition } from "react-transition-group";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import { useState } from "react";

const Payment = () => {
  const [showSideBarOrder, setShowSideBarOrder] = useState(false);
  const nodeRef = useRef(null);
  return (
    <div>
      <div>
        <HeaderSelectTrain />
        <div className={classes.main}>
          <div className="container">
            <button
              className={classes.info_btn}
              onClick={() => setShowSideBarOrder((prev) => !prev)}
            >
              <FontAwesomeIcon
                icon={showSideBarOrder ? faXmark : faCircleInfo}
                style={{ color: "#fff" }}
              />
            </button>
            <div className={classes.main_wrapper}>
              <CSSTransition
                nodeRef={nodeRef}
                in={showSideBarOrder}
                timeout={300}
                classNames={{
                  enter: classes.sidebar_enter,
                  enterActive: classes.sidebar_enter_active,
                  enterDone: classes.sidebar_enter_done,
                  exit: classes.sidebar_exit,
                  exitActive: classes.sidebar_exit_active,
                  exitDone: classes.sidebar_exit_done,
                }}
              >
                <div ref={nodeRef} className={classes.sidebar_order_wrap}>
                  <SideBarOrder />
                </div>
              </CSSTransition>

              <PaymentPage />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
