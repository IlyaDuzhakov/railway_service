import styles from './CustomButton.module.css'

const CustomButton = ({children, ...props}) => {
  return (
    <button className={styles.submit_btn} {...props}>{children}</button>
  )
}

export default CustomButton