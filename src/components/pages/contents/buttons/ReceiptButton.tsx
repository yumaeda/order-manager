/**
 * ReceiptButton component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'

/**
 * Interface for props
 */
interface IProps {
    orderId: string
}

/**
 * ReceiptButton component
 */
const ReceiptButton: React.FC<IProps> = props => {
    const { orderId } = props

    return (
        <a href={`./receipt.php?order_id=${orderId}`} target="_blank">
            Receipt
        </a>
    )
}

export default React.memo(ReceiptButton)
