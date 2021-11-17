/**
 * ConfirmDeliveryButton component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import API_BASE_URI from '../../../../const/Global'
import send from '../../../../libs/HttpPost'
import StatusButton from './StatusButton'

/**
 * Interface for props
 */
interface IProps {
    orderId: string
    setOrderStatus: (status: number) => void
}

/**
 * ConfirmDeliveryButton component
 */
const ConfirmDeliveryButton: React.FC<IProps> = (props) => {
  const { orderId, setOrderStatus } = props
  const text = '発送済みにする'
  const status = 4

  const handleStatusChange = (): boolean => {
    send(`${API_BASE_URI}/send_shipped_mail.php`, { orderId }, () => alert('発送済みメールが送信されました。'))

    return true
  }
  return (
    <StatusButton
      orderId={orderId}
      text={text}
      handleStatusChange={handleStatusChange}
      setOrderStatus={setOrderStatus}
      status={status}
    />
  )
}

export default React.memo(ConfirmDeliveryButton)
