/**
 * CancelOrderButton component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import send from '../../../../libs/HttpPost'
import API_BASE_URI from '../../../../const/Global'

/**
 * Interface for props
 */
interface IProps {
    orderId: string
}

/**
 * CancelOrderButton component
 */
const CancelOrderButton: React.FC<IProps> = (props) => {
  const { orderId } = props

  const handleClick = () => {
    if (confirm('!!WARNING!! Are you sure to cancel the order?')) {
      send(`${API_BASE_URI}/remove_order.php`, { orderId }, () => location.reload())
    }
  }

  return (
    <button className="order__button" onClick={() => handleClick()}>
      取り消す
    </button>
  )
}

export default CancelOrderButton
