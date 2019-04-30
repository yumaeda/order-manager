/**
 * Interface for order
 */
export interface IOrder {
    address: string
    comment: string
    contents: string
    customer_address: string
    customer_email: string
    customer_name: string
    customer_phone: string
    customer_phonetic: string
    delivery_company: string
    delivery_date: string
    delivery_time: string
    email: string
    fee: number
    member_discount: number
    name: string
    order_id: string
    payment_method: number
    phone: string
    phonetic: string
    post_code: string
    prefecture: string
    refrigerated: number
    status: number
    transaction_id: string
    transaction_id2: string
    wine_total: number
}
