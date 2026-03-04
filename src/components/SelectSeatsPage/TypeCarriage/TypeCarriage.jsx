import styles from '../SeatsSelect/SeatsSelect.module.css'


const TypeCarriage = ({ train, chooseCarriage, selectCarriage }) => {
    const trainTypes = Object.keys(train?.available_seats_info || {})
    console.log(trainTypes)

    const carriages = [
        {img: '/img/icons/carriage_types/seat_place.svg', name: 'fourth', title: 'Сидячий', img_active: '/img/icons/carriage_types/seat_place_active.svg'},
        {img: '/img/icons/carriage_types/train_compartment.svg', name: 'third', title: 'Плацкарт', img_active: '/img/icons/carriage_types/train_compartment_active.svg'},
        {img: '/img/icons/carriage_types/kupe.svg', name: 'second', title: 'Купе', img_active: '/img/icons/carriage_types/kupe_active.svg'},
        {img: '/img/icons/carriage_types/luxury.svg', name: 'first', title: 'Люкс', img_active: '/img/icons/carriage_types/luxury_active.svg'}
    ]
  return (
    <>
      <p className={styles.type_train}>Тип вагона</p>
      <div className={styles.icons_wrapper}>
        {carriages.filter((type)=> {
         return trainTypes.includes(type.name)
        }).map((el)=> {
            return <div className={styles.icon} onClick={()=> {
              chooseCarriage(el.name)
            }}>
          <img src={selectCarriage === el.name ? el.img_active : el.img} alt="seat" />
          <p>{el.title}</p>
        </div>
        })}
        
      </div>
    </>
  );
};

export default TypeCarriage;
