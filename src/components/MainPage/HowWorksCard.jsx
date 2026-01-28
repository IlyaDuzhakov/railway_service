import styles from './MainPage.module.css'

const HowWorksCard = ({el}) => {
  return (
    <div className={styles.how_works_card}>
              {/* <div className={styles.orange}> */}
                <img className={styles.img} src={el.path} alt="" />
                <p className={styles.text}>{el.text}</p>
              {/* </div> */}
            </div>
  )
}

export default HowWorksCard