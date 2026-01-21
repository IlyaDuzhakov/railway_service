import styles from './MainPage.module.css'

const HowWorksCard = ({el}) => {
  return (
    <div className="howWorksCard">
              <div className={styles.orange}>
                <img className={styles.img} src={el.path} alt="" />
                <p>{el.text}</p>
              </div>
            </div>
  )
}

export default HowWorksCard