/**
 * ChangeStatusButton component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'

/**
 * Interface fro props
 */
interface IProps {
    status: number
}

/**
 * Meta Data for status
 */
const metaData = [
    {
        id: 'confirmOrderBtn',
        text: '注文を確定する'
    },
    {
        id: 'confirmPaymentBtn',
        text: '支払済みにする'
    },
    {
        id: 'confirmIssueBtn',
        text: '出庫済みにする'
    },
    {
        id: 'confirmDeliveryBtn',
        text: '発送済みにする'
    },
    {
        id: 'finalizeOrderBtn',
        text: '完了する'
    }
]

/**
 * ChangeStatusButton component
 */
const ChangeStatusButton: React.FC<IProps> = props => {
    const meta = metaData[props.status]
    return (
        <button id={meta.id} className="order__button">
            {meta.text}
        </button>
    )
}

export default React.memo(ChangeStatusButton)
