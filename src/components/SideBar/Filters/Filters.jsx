import iconPhone from '../../../assets/icons/phone.svg'
import Switch from '@mui/material/Switch';
import styles from './Filters.module.css'

const Filters = () => {

    const filtersList = [
        {title: 'Купе',},
        {title: 'Платцкарт',},
        {title: 'Сидячий',},
        {title: 'Люкс',},
        {title: 'Wi-Fi',},
        {title: 'Экспресс',}
    ]

  return (
    <div>
        {filtersList.map((el)=> {
           return <div className={styles.filter}>
            <img src={iconPhone} alt="iconPhone" />
            <p>{el.title}</p>
            <Switch defaultChecked color="red"/>
           </div> 
        })}
    </div>
  )
}

export default Filters