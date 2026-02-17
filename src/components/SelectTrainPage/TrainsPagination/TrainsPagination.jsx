import styles from './TrainsPagination.module.css'
import { useState } from "react";

const TrainsPagination = () => {

  const [activePage, setActivePage] = useState(1);
  const pages = [1, 2, 3];
  return (
    <div className={styles.caret_wrapper}>
        <button className={styles.caret_left}>
            <img src="/img/icons/caret_left.svg" alt="caret left" />
        </button>
        {pages.map((p)=> (
          <button 
          key={p}
          onClick={() => setActivePage(p)}
          className={`${styles.pagination_number} ${
            activePage === p ? styles.active : ""
          }`}
        >
          {p}
        </button>
        ))}
        <button className={styles.caret_left}>
            <img src="/img/icons/caret_right.svg" alt="caret right" />
        </button>
    </div>
  )
}

export default TrainsPagination