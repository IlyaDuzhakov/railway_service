import styles from '../SeatsSelect/SeatsSelect.module.css'

const TypeCarriage = () => {


    const carriages = [
        {img: '/img/icons/seat_place.svg', name: 'fourth', title: 'Сидячий'},
        {img: '/img/icons/train_compartment_place.svg', name: 'third', title: 'Плацкарт'},
        {img: '/img/icons/cupe.svg', name: 'second', title: 'Купе'},
        {img: '/img/icons/star.svg', name: 'first', title: 'Люкс'}
    ]
  return (
    <>
      <p className={styles.type_train}>Тип вагона</p>
      <div className={styles.icons_wrapper}>
        {carriages.map((el)=> {
            return <div className={styles.ico}>
          <img src={el.img} alt="seat" />
          <p>{el.title}</p>
        </div>
        })}
        {/* <div className={styles.ico}>
          <img src="/img/icons/seat_place.svg" alt="seat" />
          <p>Сидячий</p>
        </div>
        <div className={styles.ico}>
          <img
            src="/img/icons/train_compartment_place.svg"
            alt="train compartment"
          />
          <p>Плацкарт</p>
        </div>
        <div className={styles.ico}>
          <img src="/img/icons/reserved_seat_place.svg" alt="reserved seat" />
          <p>Плацкарт</p>
        </div>
        <div className={styles.ico}>
          <img src="/img/icons/star.svg" alt="star" />
          <p>Плацкарт</p>
        </div> */}
      </div>
    </>
  );
};

export default TypeCarriage;
