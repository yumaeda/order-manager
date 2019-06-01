/**
 * OrderDetail component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import { IOrder } from '../../../interfaces/IOrder'
import OrderDetailContents from './OrderDetailContents'
import OrderDetailFooter from './OrderDetailFooter'
import OrderDetailHeader from './OrderDetailHeader'

/**
 * Interface for props
 */
interface IProps extends IOrder {
    closeModal: () => void
    taxRate: number
}

/**
 * OrderDetail component
 */
const OrderDetail: React.FC<IProps> = props => {
    const {
        address,
        closeModal,
        comment,
        contents,
        fee,
        name,
        order_id,
        customer_address,
        customer_email,
        customer_name,
        customer_phone,
        customer_phonetic,
        delivery_date,
        delivery_time,
        member_discount,
        payment_method,
        phone,
        post_code,
        refrigerated,
        taxRate,
        transaction_id,
        transaction_id2,
        wine_total
    } = props

    const [deliveryDate, setDeliveryDate] = React.useState(delivery_date)
    const [deliveryTime, setDeliveryTime] = React.useState(delivery_time)
    const [paymentMethod, setPaymentMethod] = React.useState(payment_method)
    const [trackingCode1, setTrackingCode1] = React.useState(transaction_id)
    const [trackingCode2, setTrackingCode2] = React.useState(transaction_id2)

    const handleChangeDeliveryDate = (
        event: React.FormEvent<HTMLInputElement>
    ) => {
        setDeliveryDate(event.currentTarget.value)
    }

    const handleChangeDeliveryTime = (
        event: React.FormEvent<HTMLSelectElement>
    ) => {
        setDeliveryTime(event.currentTarget.value)
    }

    const handleChangePaymentMethod = (
        event: React.FormEvent<HTMLSelectElement>
    ) => {
        setPaymentMethod(Number(event.currentTarget.value))
    }

    const handleChangeTrackingCode1 = (
        event: React.FormEvent<HTMLInputElement>
    ) => {
        setTrackingCode1(event.currentTarget.value)
    }

    const handleChangeTrackingCode2 = (
        event: React.FormEvent<HTMLInputElement>
    ) => {
        setTrackingCode2(event.currentTarget.value)
    }

    const handleSubmit = () => {
        alert(`DeliveryDate: ${deliveryDate}`)
        alert(`DeliveryTime: ${deliveryTime}`)
        alert(`PaymentMethod: ${paymentMethod}`)
        alert(`TrackingCode1: ${trackingCode1}`)
        alert(`TrackingCode2: ${trackingCode2}`)
    }

    return (
        <>
            <OrderDetailHeader
                orderId={order_id}
                address={customer_address}
                email={customer_email}
                name={customer_name}
                phone={customer_phone}
                phonetic={customer_phonetic}
                postCode={post_code}
                refrigerated={refrigerated}
            />
            <OrderDetailContents
                address={address}
                comment={comment}
                contents={contents}
                fee={fee}
                name={name}
                deliveryDate={deliveryDate}
                handleChangeDeliveryDate={handleChangeDeliveryDate}
                deliveryTime={deliveryTime}
                handleChangeDeliveryTime={handleChangeDeliveryTime}
                memberDiscount={member_discount}
                paymentMethod={paymentMethod}
                handleChangePaymentMethod={handleChangePaymentMethod}
                phone={phone}
                taxRate={taxRate}
                trackingCode1={trackingCode1}
                handleChangeTrackingCode1={handleChangeTrackingCode1}
                trackingCode2={trackingCode2}
                handleChangeTrackingCode2={handleChangeTrackingCode2}
                total={wine_total}
            />
            <OrderDetailFooter
                closeModal={closeModal}
                updateInfo={handleSubmit}
            />
        </>
    )
}

export default OrderDetail
