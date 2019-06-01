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
                deliveryDate={delivery_date}
                deliveryTime={delivery_time}
                memberDiscount={member_discount}
                paymentMethod={payment_method}
                phone={phone}
                taxRate={taxRate}
                trackingCode1={transaction_id}
                trackingCode2={transaction_id2}
                total={wine_total}
            />
            <OrderDetailFooter closeModal={closeModal} />
        </>
    )
}

export default OrderDetail
