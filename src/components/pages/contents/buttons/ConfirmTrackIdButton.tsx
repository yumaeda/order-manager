/**
 * ConfirmTradkIdButton component
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
 * ConfirmTradkIdButton component
 */
const ConfirmTradkIdButton: React.FC<IProps> = (props) => {
  const { orderId, setOrderStatus } = props
  const status = 3
  const text = '出庫済みにする'

  const handleStatusChange = (): boolean => {
    const trackingId = window.prompt(
      'Please enter the tracking ID.',
      '0000-0000-0000'
    )

    if (trackingId !== null) {
      if (
        /^([0-9-]{14})$/.test(trackingId)
                && trackingId !== '0000-0000-0000'
      ) {
        send(
          `${API_BASE_URI}/set_tracking_id.php`,
          { orderId, trackingId },
          () => location.reload()
        )

        return true
      }
      alert('Invalid tracking ID!!')
    }

    return false
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

export default React.memo(ConfirmTradkIdButton)
