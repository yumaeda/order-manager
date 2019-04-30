/**
 * OrderDetailLink component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import { IOrder } from '../../../../interfaces/IOrder'

/**
 * Interface for props
 */
interface IProps {
    openOrderDetail: () => void
    order: IOrder
    setOrder: (order: IOrder) => void
    text: string
}

/**
 * OrderDetailLink component
 */
const OrderDetailLink: React.FC<IProps> = props => {
    const { openOrderDetail, order, setOrder, text } = props

    return (
        <a
            href="#"
            onClick={() => {
                setOrder(order)
                openOrderDetail()

                return false
            }}
        >
            {text}
        </a>
    )
}

export default OrderDetailLink
