import { Link } from "react-router-dom"

const ConfirmOrder = () => {
  return (
    <div>
      <div>
        Будущая разметка
      </div>
      <button><Link to='/successful_order'>Подтвердить</Link></button>
    </div>
  )
}

export default ConfirmOrder