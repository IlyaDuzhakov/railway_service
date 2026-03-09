import styles from './PaymentPage.module.css'

const PaymentInfo = ({text}) => {
  return (
    <div className={styles.payment_top}>
      <p className={styles.payment_top_text}>{text}</p>
    </div>
  );
};

export default PaymentInfo;
