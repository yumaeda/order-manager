/**
 * FinishOrderButton component
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
 * FinishOrderButton component
 */
const FinishOrderButton: React.FC<IProps> = (props) => {
  const { orderId, setOrderStatus } = props
  const status = 5
  const text = '完了する'

  const handleStatusChange = (): boolean => {
    send(`${API_BASE_URI}/send_aftercare_mail.php`, { orderId }, () => location.reload())

    return true
  }

  return (
    <StatusButton
      orderId={orderId}
      handleStatusChange={handleStatusChange}
      text={text}
      setOrderStatus={setOrderStatus}
      status={status}
    />
  )
}

export default React.memo(FinishOrderButton)
