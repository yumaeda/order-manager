/**
 * ConfirmPaymentButton component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import * as HttpPost from '../../../../libs/HttpPost'
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
const ConfirmPaymentButton: React.FC<IProps> = props => {
    const { orderId, setOrderStatus } = props
    const status = 2
    const text = '支払済みにする'

    const handleStatusChange = (): boolean => {
        HttpPost.send('./send_payment_confirmation_mail.php', { orderId }, () =>
            alert('SUCCESS')
        )

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
