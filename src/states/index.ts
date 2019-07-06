/**
 * States
 */
import { IOrder } from '../interfaces/IOrder'
import { IWine } from '../interfaces/IWine'
import { IWineSet } from '../interfaces/IWineSet'

/**
 * Default wine
 */
export const defaultWine: IWine = {
    apply: '',
    availability: '',
    barcode_number: '',
    capacity: 0,
    catch_copy: '',
    cepage: '',
    combined_name: '',
    combined_name_jpn: '',
    comment: '',
    country: '',
    district: '',
    district_jpn: '',
    etc: '',
    glass_price: 0,
    importer: '',
    member_price: 0,
    original_comment: '',
    point: '',
    price: 0,
    producer: '',
    producer_jpn: '',
    region: '',
    region_jpn: '',
    restaurant_price: 0,
    stock: 0,
    type: '',
    village: '',
    village_jpn: '',
    vintage: ''
}

/**
 * Default wine set
 */
export const defaultWineSet: IWineSet = {
    comment: '',
    discount_rate: 0.0,
    id: 0,
    name: '',
    type: 0
}

/**
 * Default orders
 */
export const defaultOrders: IOrder[] = [
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
