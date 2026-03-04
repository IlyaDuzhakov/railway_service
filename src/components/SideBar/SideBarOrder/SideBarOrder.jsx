import SideBarDirection from './SideBarDirection/SideBarDirection.jsx'
import styles from './SideBarOrder.module.css'
import SideBarPrice from './SideBarPrice.jsx'

const SideBarOrder = () => {
  return (
    <aside className={styles.aside_top}>
        <h2 className={styles.aside_text}>ДEТАЛИ ПОЕЗДКИ</h2> 
        <div className="sidebarDivider"></div>
        <SideBarDirection direction='Туда'/>
        <SideBarDirection direction='Обратно'/>
        <SideBarPrice />
    </aside>
  )
}

export default SideBarOrder