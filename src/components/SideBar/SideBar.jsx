import SelectDate from './Date/SelectDate.jsx'
import styles from './SideBar.module.css'
import Filters from './Filters/Filters.jsx'

const SideBar = () => {
  return (
    <aside className={styles.aside}>
<SelectDate />
<Filters />
    </aside>
  )
}

export default SideBar