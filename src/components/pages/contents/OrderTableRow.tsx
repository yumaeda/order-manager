/**
 * OrderTableRow component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import { IOrder } from '../../../interfaces/IOrder'
import PriceText from '../../common/PriceText'
import CancelOrderButton from './buttons/CancelOrderButton'
import ChangeStatusButton from './buttons/ChangeStatusButton'
import OrderDetailLink from './links/OrderDetailLink'
import CoolText from './texts/CoolText'
import OrderStatusText from './texts/OrderStatusText'

/**
 * Interface for props
 */
interface IProps {
    order: IOrder
    openModal: () => void
    selectOrder: (order: any) => void
    taxRate: number
}

/**
 * OrderTableRow component
 */
const OrderTableRow: React.FC<IProps> = props => {
    const { order, openModal, selectOrder, taxRate } = props
    const [status, setStatus] = React.useState(order.status)

    return (
        <tr id={order.order_id} className="order__column" key={order.order_id}>
            <td>
                <CoolText isCool={order.refrigerated === 1} />
            </td>
            <td>
                <OrderDetailLink
                    openOrderDetail={openModal}
                    order={order}
                    setOrder={selectOrder}
                    text={order.order_id}
                />
            </td>
            <td>{`${order.name}様`}</td>
            <td>
                <PriceText
                    amount={order.wine_total}
                    fee={order.fee}
                    taxRate={taxRate}
                />
            </td>
            <td>
                <OrderStatusText status={status} />
            </td>
            <td className="delivery_date">{`${order.delivery_date} ${
                order.delivery_time
            }`}</td>
            <td>
                <ChangeStatusButton status={status} setStatus={setStatus} />
            </td>
            <td>
                <CancelOrderButton />
            </td>
        </tr>
    )
}

export default React.memo(OrderTableRow)
