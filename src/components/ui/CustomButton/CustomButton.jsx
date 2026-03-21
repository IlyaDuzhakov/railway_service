import styles from "./CustomButton.module.css";

const CustomButton = ({
  children,
  // addedClass = "",
  variant = "primary",
  className = "",
  // active = true,
  disabled = false,
  // pressed = false,
  ...props
}) => {
  return (
    <button
      disabled={disabled}
      className={`${styles.button} ${styles[variant]} submit_btn ${className} `}
      {...props}
      // style={{ backgroundColor: active === false ? "#918F94" : "#FFA800" }}
    >
      {children}
    </button>
  );
};

export default CustomButton;
