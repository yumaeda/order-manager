/**
 * DeliveryDateTimeText component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'

/**
 * Interface for props
 */
interface IProps {
    address: string
    deliveryDate: string
    deliveryTime: string
    name: string
    phone: string
}

/**
 * DeliveryDateTimeText component
 */
const DeliveryDateTimeText: React.FC<IProps> = props => {
    const RECEIVE_ON_SHOP = '店頭引き取り'
    const SHOP_PHONE = '03-6413-9737'
    const SHOP_ADDRESS = '世田谷区経堂 2-13-1-B1'
    const { address, deliveryDate, deliveryTime, name, phone } = props

    let text = `${deliveryDate} ${deliveryTime}`
    if (
        name === RECEIVE_ON_SHOP &&
        phone === SHOP_PHONE &&
        address === SHOP_ADDRESS
    ) {
        text = RECEIVE_ON_SHOP
    }

    return <span>{text}</span>
}

export default React.memo(DeliveryDateTimeText)
