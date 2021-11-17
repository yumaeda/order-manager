/**
 * ConfirmPaymentButton component
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
 * ConfirmPaymentButton component
 */
const ConfirmPaymentButton: React.FC<IProps> = (props) => {
  const { orderId, setOrderStatus } = props
  const status = 2
  const text = '支払済みにする'

  const handleStatusChange = (): boolean => {
    send(`${API_BASE_URI}/send_payment_confirmation_mail.php`, { orderId }, () => alert('注文の確定メールを送信しました。'))

    return true
  }

  return (
    <StatusButton
      orderId={orderId}
      text={text}
      setOrderStatus={setOrderStatus}
      handleStatusChange={handleStatusChange}
      status={status}
    />
  )
}

export default React.memo(ConfirmPaymentButton)
