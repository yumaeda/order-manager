/**
 * ConfirmIssueButton component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import StatusButton from './StatusButton'

/**
 * Interface for props
 */
interface IProps {
    orderId: string
    setOrderStatus: (status: number) => void
}

/**
 * ConfirmIssueButton component
 */
const ConfirmIssueButton: React.FC<IProps> = (props) => {
  const { orderId, setOrderStatus } = props
  const status = 3
  const text = '出庫済みにする'
  const handleStatusChange = () => true

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

export default React.memo(ConfirmIssueButton)
