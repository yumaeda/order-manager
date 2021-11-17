/**
 * ReceiptButton component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import API_BASE_URI from '../../../../const/Global'

/**
 * Interface for props
 */
interface IProps {
    orderId: string
}

/**
 * ReceiptButton component
 */
const ReceiptButton: React.FC<IProps> = (props) => {
  const { orderId } = props

  return (
    <a href={`${API_BASE_URI}/receipt.php?order_id=${orderId}`} target="_blank" rel="noreferrer">
      Receipt
    </a>
  )
}

export default React.memo(ReceiptButton)
