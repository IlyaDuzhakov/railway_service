import styles from './MainPage.module.css'

const ReviewCard = ({el}) => {
  return (
    <div className={styles.review_сard}>
            <img src={el.path} alt="" />
            <div className={styles.review}>
                <h3 className={styles.review_name}>{el.name}</h3>
                <p className={styles.review_text}>{el.text}</p>
            </div>
        </div>
        
  )
}

export default ReviewCard