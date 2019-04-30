/**
 * OrderTableBody component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import { IOrder } from '../../../interfaces/IOrder'
import { IOrderPage } from '../../../interfaces/IOrderPage'
import OrderTableRow from './OrderTableRow'

/**
 * Interface for props
 */
interface IProps extends IOrderPage {
    openModal: () => void
    selectOrder: (order: any) => void
    taxRate: number
}

/**
 * OrderTableBody component
 */
const OrderTableBody: React.FC<IProps> = props => {
    const { orders, openModal, selectOrder, taxRate } = props

    return (
        <tbody className="order__table__body">
            {orders.map((order: IOrder) => (
                <OrderTableRow
                    order={order}
                    openModal={openModal}
                    selectOrder={selectOrder}
                    taxRate={taxRate}
                />
            ))}
        </tbody>
    )
}

export default OrderTableBody
