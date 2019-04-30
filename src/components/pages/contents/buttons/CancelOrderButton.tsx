/**
 * CancelOrderButton component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'

/**
 * CancelOrderButton component
 */
const CancelOrderButton: React.FC = () => {
    const handleClick = () => {
        if (confirm('!!WARNING!! Are you sure to cancel the order?')) {
            alert('Cancel Order')
        }
    }

    return (
        <button className="order__button" onClick={() => handleClick()}>
            取り消す
        </button>
    )
}

export default CancelOrderButton
