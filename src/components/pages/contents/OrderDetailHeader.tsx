/**
 * OrderDetailHeader component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import ReceiptButton from './buttons/ReceiptButton'
import CoolText from './texts/CoolText'

/**
 * Interface for props
 */
interface IProps {
    orderId: string
    refrigerated: number
}
/**
 * OrderDetail component
 */
const OrderDetailHeader: React.FC<IProps> = (props) => {
  const { orderId, refrigerated } = props

  return (
    <div className="order__title">
      <CoolText isCool={refrigerated === 1} />
      <span className="order__id">{orderId}</span>
      <ReceiptButton orderId={orderId} />
    </div>
  )
}

export default React.memo(OrderDetailHeader)
