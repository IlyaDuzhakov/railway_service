import styles from './TrainsPagination.module.css'

const TrainsPagination = () => {
  return (
    <div>
        <button className={styles.caret_left}>
            <img src="/img/icons/caret_left.svg" alt="caret left" />
        </button>
        <button className={styles.paginetion_number}>1</button>
        <button className={styles.paginetion_number}>2</button>
        <button className={styles.paginetion_number}>3</button>
        <button className={styles.caret_left}>
            <img src="/img/icons/caret_right.svg" alt="caret right" />
        </button>
    </div>
  )
}

export default TrainsPagination