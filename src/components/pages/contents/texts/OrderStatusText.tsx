/**
 * OrderStatus component
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
        css: 'order--state-unconfirmed',
        text: '未確定'
    },
    {
        css: 'order--state-unconfirmed',
        text: '未払い'
    },
    {
        css: 'order--state-confirmed',
        text: '支払済み'
    },
    {
        css: 'order--state-confirmed',
        text: '支払済み'
    },
    {
        css: 'order--state-confirmed',
        text: '発送済み'
    }
]

/**
 * OrderStatus component
 */
const OrderStatus: React.FC<IProps> = props => {
    const meta = metaData[props.status]

    return <span className={meta.css}>{meta.text}</span>
}

export default React.memo(OrderStatus)
