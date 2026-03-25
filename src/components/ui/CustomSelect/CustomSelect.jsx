import { useState } from "react";
import styles from "./CustomSelect.module.css";

const CustomSelect = ({ value, onChange, options }) => {
  const [open, setOpen] = useState(false);

  const selectedOption = options.find((option) => option.value === value);

  return (
    <div className={styles.select}>
      <button
        type="button"
        className={styles.selectTrigger}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span>{selectedOption?.label}</span>
        <span className={styles.arrow}>▾</span>
      </button>

      {open && (
        <div className={styles.dropdown}>
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              className={styles.option}
              onClick={() => {
                onChange(option.value);
                setOpen(false);
              }}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
