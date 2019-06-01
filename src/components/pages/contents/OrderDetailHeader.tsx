/**
 * OrderDetailHeader component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import ReceiptButton from './buttons/ReceiptButton'
import CoolText from './texts/CoolText'

/**
 * Interface for props
 */
interface IProps {
    orderId: string
    address: string
    email: string
    name: string
    phone: string
    phonetic: string
    postCode: string
    refrigerated: number
}
/**
 * OrderDetail component
 */
const OrderDetailHeader: React.FC<IProps> = props => {
    const {
        orderId,
        address,
        email,
        name,
        phone,
        phonetic,
        postCode,
        refrigerated
    } = props

    return (
        <>
            <div className="order__title">
                <CoolText isCool={refrigerated === 1} />
                <span className="order__id">{orderId}</span>
                <ReceiptButton orderId={orderId} />
            </div>
            <ruby className="customer_name">
                {name}
                <rp>{'('}</rp>
                <rt>{phonetic}</rt>
                <rp>{')'}</rp>
            </ruby>
            <div>
                <a className="text--size-small" href={`mailto:${email}`}>
                    {email}
                </a>
                <br />
                <span className="text--size-small">{`Tel: ${phone}`}</span>
                <br />
                <span className="text--size-small">{`〒${postCode} ${address}`}</span>
            </div>
        </>
    )
}

export default React.memo(OrderDetailHeader)
