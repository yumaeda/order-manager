/**
 * OrderTableRow component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import { IOrder } from '../../../interfaces/IOrder'
import PriceText from '../../common/PriceText'
import CancelOrderButton from './buttons/CancelOrderButton'
import ConfirmDeliveryButton from './buttons/ConfirmDeliveryButton'
import ConfirmIssueButton from './buttons/ConfirmIssueButton'
import ConfirmOrderButton from './buttons/ConfirmOrderButton'
import ConfirmPaymentButton from './buttons/ConfirmPaymentButton'
import ConfirmTrackIdButton from './buttons/ConfirmTrackIdButton'
import FinishOrderButton from './buttons/FinishOrderButton'
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
        contents,
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

    const containsPreOrderItem = (orderContents: string): boolean => {
        const tokens = orderContents.split(';')

        return tokens.some((token: string) => {
            const subTokens = token.split('#')
            const code = parseInt(subTokens[0], 10)

            return subTokens.length === 2 && code >= 100000
        })
    }

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
            <td>{customer_name}</td>
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
                {containsPreOrderItem(contents) ? null : orderStatus === 0 ? (
                    <ConfirmOrderButton
                        orderId={order_id}
                        setOrderStatus={setOrderStatus}
                    />
                ) : orderStatus === 1 ? (
                    <ConfirmPaymentButton
                        orderId={order_id}
                        setOrderStatus={setOrderStatus}
                    />
                ) : orderStatus === 2 ? (
                    delivery_date === '店頭引き取り' ? (
                        <ConfirmIssueButton
                            orderId={order_id}
                            setOrderStatus={setOrderStatus}
                        />
                    ) : (
                        <ConfirmTrackIdButton
                            orderId={order_id}
                            setOrderStatus={setOrderStatus}
                        />
                    )
                ) : orderStatus === 3 ? (
                    <ConfirmDeliveryButton
                        orderId={order_id}
                        setOrderStatus={setOrderStatus}
                    />
                ) : orderStatus === 4 ? (
                    <FinishOrderButton
                        orderId={order_id}
                        setOrderStatus={setOrderStatus}
                    />
                ) : null}
            </td>
            <td>
                <CancelOrderButton orderId={order_id} />
            </td>
        </tr>
    )
}

export default React.memo(OrderTableRow)
