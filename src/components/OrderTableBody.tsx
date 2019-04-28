/**
 * OrderTableBody component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import ChangeStatusButton from './ChangeStatusButton'
import { IOrder } from './IOrder'
import { IOrderPage } from './IOrderPage'
import OrderStatus from './OrderStatus'
import OrderTotal from './OrderTotal'

/**
 * OrderTableBody component
 */
const OrderTableBody: React.FC<IOrderPage> = props => {
    const { orders } = props

    return (
        <tbody className="order__table__body">
            {orders.map((order: IOrder) => (
                <tr id={order.id} className="order__column" key={order.id}>
                    <td>
                        {order.isCool && (
                            <span className="cool_delivery">クール</span>
                        )}
                    </td>
                    <td>
                        <a href="#">{order.id}</a>
                    </td>
                    <td>{`${order.name}様`}</td>
                    <td>
                        <OrderTotal total={order.total} />
                    </td>
                    <td>
                        <OrderStatus status={order.status} />
                    </td>
                    <td className="delivery_date">{order.deliveryDate}</td>
                    <td>
                        <ChangeStatusButton status={order.status} />
                    </td>
                    <td>
                        <button id="cancelOrderBtn" className="order__button">
                            取り消す
                        </button>
                    </td>
                </tr>
            ))}
        </tbody>
    )
}

export default OrderTableBody
