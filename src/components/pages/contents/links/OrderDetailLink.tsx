/**
 * OrderDetailLink component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import { IOrder } from '../../../../interfaces/IOrder'

/**
 * Interface for props
 */
interface IProps {
    openOrderDetail: () => void
    order: IOrder
    setOrder: (order: IOrder) => void
}

/**
 * OrderDetailLink component
 */
const OrderDetailLink: React.FC<IProps> = (props) => {
  const { openOrderDetail, order, setOrder } = props
  const trackingId = order.transaction_id

  let text = order.order_id
  if (
    trackingId
        && trackingId !== 'xxxxxxxx'
        && trackingId !== '0000-0000-0000'
  ) {
    text = `[Tracking #] ${trackingId}`
  }

  return (
    <a
      href="#"
      onClick={() => {
        setOrder(order)
        openOrderDetail()
        return false
      }}
    >
      {text}
    </a>
  )
}

export default OrderDetailLink
