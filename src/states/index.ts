/**
 * States
 */
import { IOrder } from '../interfaces/IOrder'

/**
 * Default orders
 */
const defaultOrders: IOrder[] = [
    {
        address: '',
        comment: '',
        contents: '',
        customer_address: '',
        customer_email: '',
        customer_name: '',
        customer_phone: '',
        customer_phonetic: '',
        delivery_company: '',
        delivery_date: '',
        delivery_time: '',
        email: '',
        fee: 0,
        member_discount: 0,
        name: '',
        order_id: '',
        payment_method: 0,
        phone: '',
        phonetic: '',
        post_code: '',
        prefecture: '',
        refrigerated: 0,
        status: 0,
        transaction_id: '',
        transaction_id2: '',
        wine_total: 0
    }
]

export default defaultOrders
