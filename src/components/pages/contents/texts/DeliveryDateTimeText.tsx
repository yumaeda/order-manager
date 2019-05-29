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
    const { address, deliveryDate, deliveryTime, name, phone } = props
    const receiveOnShop = '店頭引き取り'

    let text = `${deliveryDate} ${deliveryTime}`
    if (
        name === receiveOnShop &&
        phone === '03-6413-9737' &&
        address === '世田谷区経堂 2-13-1-B1'
    ) {
        text = receiveOnShop
    }

    return <span>{text}</span>
}

export default React.memo(DeliveryDateTimeText)
