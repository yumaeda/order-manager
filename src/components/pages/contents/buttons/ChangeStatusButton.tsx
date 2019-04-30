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
    setStatus: (status: number) => void
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
    const { status, setStatus } = props

    const handleClick = () => {
        if (confirm(`「${metaData[status].text}」ボタンを押しますか？`)) {
            setStatus(status + 1)
        }
    }

    return (
        <button
            id={metaData[status].id}
            className="order__button"
            onClick={() => handleClick()}
        >
            {metaData[status].text}
        </button>
    )
}

export default React.memo(ChangeStatusButton)
