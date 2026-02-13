import ChooseDirection from "../ChooseDirection/ChooseDirection";
import HeaderTop from "../HeaderTop/HeaderTop";
import Stages from "../Stages/Stages";
import styles from "./HeaderSelectTrain.module.css";

const HeaderSelectTrain = ({setTrains}) => {
  return (
    <div>
      <div className={styles.header_bg}>
        <HeaderTop />
        <ChooseDirection setTrains={setTrains}/>
      </div>
      <Stages />
    </div>
  );
};

export default HeaderSelectTrain;
