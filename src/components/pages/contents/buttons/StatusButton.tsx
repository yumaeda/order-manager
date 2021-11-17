/**
 * StatusButton component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import API_BASE_URI from '../../../../const/Global'
import send from '../../../../libs/HttpPost'

/**
 * Interface fro props
 */
interface IProps {
    orderId: string
    handleStatusChange: () => boolean
    setOrderStatus: (status: number) => void
    status: number
    text: string
}

/**
 * StatusButton component
 */
const StatusButton: React.FC<IProps> = (props) => {
  const { handleStatusChange, orderId, setOrderStatus, status, text } = props

  const handleClick = () => {
    if (confirm(`「${text}」ボタンを押しますか？`)) {
      if (handleStatusChange()) {
        setOrderStatus(status)

        send(
          `${API_BASE_URI}/set_status.php`,
          {
            orderId,
            status
          },
          () => alert('ステータスが変更されました。')
        )
      }
    }
  }

  return (
    <button className="order__button" onClick={() => handleClick()}>
      {text}
    </button>
  )
}

export default React.memo(StatusButton)
