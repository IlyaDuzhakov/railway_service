import styles from "./PassengersList.module.css";
import { useContext, useState } from "react";
import PassengerItem from "../PassengerItem/PassengerItem";
import { PassengersContext } from "../../../helpers/context.js";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../ui/CustomButton/CustomButton.jsx";

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
        // active={active}
        variant="secondary"
        className="btn_next"
        disabled={!isFormValid}
        onClick={() => {
          checkFillForm(users) === true
            ? navigate("/payment")
            : alert("заполните все поля");
        }}
      >
        ДАЛЕЕ
      </CustomButton>
    </main>
  );
};

export default PassengersList;
