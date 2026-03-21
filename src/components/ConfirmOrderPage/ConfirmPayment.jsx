import styles from './ConfirmOrderPage.module.css'
import {OrderContext} from '../../helpers/context.js'
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CustomButton from '../ui/CustomButton/CustomButton.jsx';

const ConfirmPayment = () => {
  const navigate = useNavigate()
    const [order, setOrder] = useContext(OrderContext)
  
  return (
    <div className={styles.confirm_payment_wrapper}>
      <div>
        <h2 className={styles.confirm_text}>Способ оплаты</h2>
      </div>
      <div className={styles.coin_wrapper}>
        <p className={styles.coin_text}>{order.payment_method === 'online' ? 'Онлайн' : 'Наличными'}</p>
        <CustomButton 
        variant="dark"
        className={styles.btn_change}
        onClick={() => navigate("/payment")}
        >Изменить
        </CustomButton>
      </div>
    </div>
  );
};

export default ConfirmPayment;
