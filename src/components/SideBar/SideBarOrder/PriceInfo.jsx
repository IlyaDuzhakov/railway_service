import { CountTicketContext } from "../../../helpers/context"
import {useContext} from 'react'

const PriceInfo = () => {
    const titles = {adult: 'Взрослые', children: 'Дети', child_no_seat: 'Дети без места'}
    const [tickets, setTickets] = useContext(CountTicketContext)
    console.log(tickets)
  return (
    <div>
        fghdfdjyjdtj
    </div>
  )
}

export default PriceInfo