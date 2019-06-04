/**
 * ConfirmOrderButton component
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
 * ConfirmOrderButton component
 */
const ConfirmOrderButton: React.FC<IProps> = props => {
    const { orderId, setOrderStatus } = props
    const status = 1
    const text = '注文を確定する'

    const handleStatusChange = (): boolean => {
        HttpPost.send('./send_confirmed_mail.php', { orderId }, () => {
            HttpPost.send('./record_purchased_items.php', { orderId }, () =>
                alert('SUCCESS')
            )
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
