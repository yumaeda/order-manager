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
import DeliveryDateTimeText from './texts/DeliveryDateTimeText'
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
    const {
        address,
        customer_name,
        order_id,
        refrigerated,
        wine_total,
        status,
        fee,
        delivery_date,
        delivery_time,
        name,
        phone
    } = order
    const [orderStatus, setOrderStatus] = React.useState(status)

    return (
        <tr id={order_id} className="order__column" key={order_id}>
            <td>
                <CoolText isCool={refrigerated === 1} />
            </td>
            <td>
                <OrderDetailLink
                    openOrderDetail={openModal}
                    order={order}
                    setOrder={selectOrder}
                />
            </td>
            <td>{`${customer_name}様`}</td>
            <td>
                <PriceText amount={wine_total} fee={fee} taxRate={taxRate} />
            </td>
            <td>
                <OrderStatusText status={orderStatus} />
            </td>
            <td className="delivery_date">
                <DeliveryDateTimeText
                    address={address}
                    deliveryDate={delivery_date}
                    deliveryTime={delivery_time}
                    name={name}
                    phone={phone}
                />
            </td>
            <td>
                <ChangeStatusButton
                    status={orderStatus}
                    setStatus={setOrderStatus}
                />
            </td>
            <td>
                <CancelOrderButton />
            </td>
        </tr>
    )
}

export default React.memo(OrderTableRow)
