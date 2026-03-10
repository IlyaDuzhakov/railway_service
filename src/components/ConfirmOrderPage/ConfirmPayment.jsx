import styles from './ConfirmOrderPage.module.css'
import {OrderContext} from '../../helpers/context.js'
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const ConfirmPayment = () => {
    const [order, setOrder] = useContext(OrderContext)
  
  return (
    <div className={styles.confirm_payment_wrapper}>
      <div>
        <h2 className={styles.confirm_text}>Способ оплаты</h2>
      </div>
      <div className={styles.coin_wrapper}>
        <p className={styles.coin_text}>{order.payment_method === 'online' ? 'Онлайн' : 'Наличными'}</p>
        <button className={styles.btn_change}><Link to='/payment'>Изменить</Link></button>
      </div>
    </div>
  );
};

export default ConfirmPayment;
