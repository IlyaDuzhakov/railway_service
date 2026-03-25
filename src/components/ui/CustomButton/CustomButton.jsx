import styles from "./CustomButton.module.css";

const CustomButton = ({
  children,
  
  variant = "primary",
  className = "",

  disabled = false,

  ...props
}) => {
  return (
    <button
      disabled={disabled}
      className={`${styles.button} ${styles[variant]} submit_btn ${className} `}
      {...props}
    >
      {children}
    </button>
  );
};

export default CustomButton;
