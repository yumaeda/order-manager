/**
 * ConfirmOrderButton component
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
 * ConfirmOrderButton component
 */
const ConfirmOrderButton: React.FC<IProps> = (props) => {
  const { orderId, setOrderStatus } = props
  const status = 1
  const text = '注文を確定する'

  const handleStatusChange = (): boolean => {
    send(`${API_BASE_URI}/send_confirmed_mail.php`, { orderId }, () => {
      send(`${API_BASE_URI}/record_purchased_items.php`, { orderId }, () => alert('注文確認メールが送信されました。'))
    })

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

export default React.memo(ConfirmOrderButton)
