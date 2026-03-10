import styles from './SuccessfulOrderPage.module.css'
import {useState} from 'react'

const SuccessfulOrderPage = () => {
    const arrStar = [1, 2, 3, 4, 5]
    const [raiting, setRaiting] = useState(0)
  return (
    <div className={styles.order_wrapper}>
      <h1>Благодарим Вас за заказ!</h1>
      <div className={styles.order_container}>
        <div>
          <p>№Заказа 285АА</p>
          <p>Cумма</p>
        </div>
        <div className={styles.order_info_wrapper}>
          <div>
            <img src="/img/icons/computer.svg" alt="" />
            <p>билеты будут отправлены на ваш e-mail</p>
          </div>
          <div>
            <img src="/img/icons/computer.svg" alt="" />
            <p>билеты будут отправлены на ваш e-mail</p>
          </div>
          <div>
            <img src="/img/icons/computer.svg" alt="" />
            <p>билеты будут отправлены на ваш e-mail</p>
          </div>
            
        </div>
        <div>
            <div className={styles.o}>
                <p>Оценить сервис</p>
                {arrStar.map((el)=> {
                    return <img src={raiting >= el ? '/img/icons/active_star.svg' : '/img/icons/star.svg'} onClick={()=> {
                        setRaiting(el)
                    }}></img>
                })}
            </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessfulOrderPage;
