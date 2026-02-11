import styles from './ChooseDirection.module.css'
import updateIcon from "../../../assets/icons/update.svg";
const InputsDirection = ({ from, setFrom, listCities }) => {
  return (
     <div className={styles.direction}>
            <div className={styles.form_title}>Направление</div>

            <div className={styles.choose_direction}>
              <div className={styles.input_container}>
                <input
                  value={from}
                  className={styles.input}
                  type="text"
                  placeholder="Откуда"
                  onChange={(event) => {
                    setFrom(event.target.value);
                  }}
                />
                <div className={styles.cities_box}>
                  {listCities.map((el) => {
                    return <p className={styles.city} onClick={()=> {
                      setFrom(el.name)
                    }}>{el.name}</p>;
                  })}
                </div>
              </div>
              <img className={styles.update_icon} src={updateIcon} alt="swap" />

              <input className={styles.input} type="text" placeholder="Куда" />
            </div>
          </div>
  )
}

export default InputsDirection