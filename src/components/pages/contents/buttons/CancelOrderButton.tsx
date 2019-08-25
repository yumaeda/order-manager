/**
 * CancelOrderButton component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import * as HttpPost from '../../../../libs/HttpPost'

/**
 * Interface for props
 */
interface IProps {
    orderId: string
}

/**
 * CancelOrderButton component
 */
const CancelOrderButton: React.FC<IProps> = props => {
    const { orderId } = props

    const handleClick = () => {
        if (confirm('!!WARNING!! Are you sure to cancel the order?')) {
            HttpPost.send('./remove_order.php', { orderId }, () =>
                location.reload()
            )
        }
    }

    return (
        <button className="order__button" onClick={() => handleClick()}>
            取り消す
        </button>
    )
}

export default CancelOrderButton
