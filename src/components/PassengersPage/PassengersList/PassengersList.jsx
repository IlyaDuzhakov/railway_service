import styles from "./PassengersList.module.css";
import { useContext, useState } from "react";
import PassengerItem from "../PassengerItem/PassengerItem";
import { PassengersContext } from "../../../helpers/context.js";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../ui/CustomButton/CustomButton.jsx";
import Popup from "../../ui/Popup/Popup.jsx";

const PassengersList = () => {
  const [active, setActive] = useState(false);
  const navigate = useNavigate();
  const [users, setUsers] = useContext(PassengersContext);
  const checkFillForm = (usersList) => {
    let countCheck = 0;
    for (let user of usersList) {
      if (
        user.date !== "" &&
        user.document_number !== "" &&
        user.name !== "" &&
        user.surname !== "" &&
        user.secondName !== ""
      ) {
        if (user.document_type === "passport" && user.document_series !== "") {
          countCheck = countCheck + 1;
        } else if (
          user.document_type !== "passport" &&
          user.document_series === ""
        ) {
          countCheck = countCheck + 1;
        }
      }
    }
    return countCheck === usersList.length;
  };

  const checkValidation = (usersList) => {
    return usersList.every(
      (user) => user.isDocumentValid === true && user.isDateValid === true,
    );
  };

  const [isErrorOpen, setIsErrorOpen] = useState(false);

  const updateUser = (id, fields) => {
    setUsers((prev) => {
      const rezult = prev.map((user) =>
        user.id === id ? { ...user, ...fields } : user,
      );
      if (checkFillForm(rezult) === true) {
        setActive(true);
      } else {
        setActive(false);
      }
      return rezult;
    });
  };

  const isFormValid = checkFillForm(users);
  const isFormCorrect = checkValidation(users);

  return (
    <main className={styles.passengers_container}>
      <div className={styles.one_passenger_wrapper}>
        {users.map((el, index) => {
          return (
            <PassengerItem
              key={index}
              number={index + 1}
              user={el}
              onUpdate={updateUser}
            />
          );
        })}
      </div>

      <CustomButton
        variant="secondary"
        className="btn_next"
        disabled={!isFormValid}
        onClick={() => {
          if (isFormCorrect) {
            navigate("/payment");
          } else {
            setIsErrorOpen(true);
          }
        }}
      >
        ДАЛЕЕ
      </CustomButton>
      <Popup
        type="error"
        title="Ошибка"
        message="Проверьте корректность данных документа перед переходом к следующему шагу."
        isOpen={isErrorOpen}
        onClose={() => setIsErrorOpen(false)}
      />
    </main>
  );
};

export default PassengersList;
