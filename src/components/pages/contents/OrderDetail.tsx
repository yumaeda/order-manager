/**
 * OrderDetail component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import { IOption } from '../../../interfaces/IOption'
import { IOrder } from '../../../interfaces/IOrder'
import PriceText from '../../common/PriceText'
import Select from '../../common/Select'
import ReceiptButton from './buttons/ReceiptButton'
import CoolText from './texts/CoolText'

/**
 * Time options
 */
const timeOptions: IOption[] = [
    { text: '指定なし', value: '指定なし' },
    { text: '午前中（8:00〜12:00）', value: '午前中（8:00〜12:00）' },
    { text: '12:00 ～ 14:00', value: '12:00 ～ 14:00' },
    { text: '14:00 ～ 16:00', value: '14:00 ～ 16:00' },
    { text: '16:00 ～ 18:00', value: '16:00 ～ 18:00' },
    { text: '18:00 ～ 20:00', value: '18:00 ～ 20:00' },
    { text: '19:00 ～ 21:00', value: '19:00 ～ 21:00' }
]

/**
 * Payment method options
 */
const paymentMethodOptions: IOption[] = [
    { text: '未定', value: '0' },
    { text: 'クレジットカード', value: '1' },
    { text: '銀行振り込み', value: '2' }
]

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
        fee,
        order_id,
        customer_address,
        customer_email,
        customer_name,
        customer_phone,
        customer_phonetic,
        delivery_date,
        member_discount,
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
            <div id="detailDialog">
                <CoolText isCool={refrigerated === 1} />
                <span className="order__id" id="orderIdText">
                    {order_id}
                </span>
                <ReceiptButton orderId={order_id} />
            </div>
            <ruby>
                {customer_name}
                <rp>{'('}</rp>
                <rt>{customer_phonetic}</rt>
                <rp>{')'}</rp>
            </ruby>
            <div>
                <a
                    className="text--size-small"
                    href={`mailto:${customer_email}`}
                />
                <br />
                <span className="text--size-small">{`Tel: ${customer_phone}`}</span>
                <br />
                <span className="text--size-small">{`〒${post_code} ${customer_address}`}</span>
            </div>
            <div>
                <span id="purchasedWineText" className="text--size-small">
                    [ 購入ワイン ]<br />
                    <span>
                        #
                        <input
                            type="text"
                            value="7590"
                            className="barcodeFld"
                            /*rel="12"*/
                        />
                        &nbsp;&nbsp;2017 Touraine Sauvignon Blanc (Domaine de
                        Bellevue) x 12
                    </span>
                    <br />
                </span>
                <br />
            </div>
            <div>
                [ 会員価格 ]<br />
                <span id="memberPriceText">
                    {member_discount === 1 ? 'Yes' : 'No'}
                </span>
            </div>
            <div>
                [ 合計額 ]<br />
                <PriceText amount={wine_total} fee={fee} taxRate={taxRate} />
            </div>
            <div>
                [支払い方法 ]<br />
                <Select options={paymentMethodOptions} />
            </div>
            <div>
                [ 配送先 ]<br />
                <span>{`${name}様`}</span>
                <br />
                <span>{`Tel: ${phone}`}</span>
                <br />
                <span>{`〒${address}`}</span>
            </div>
            <div>
                [ 配送業者 ]<br />
                <span>ヤマト運輸</span>
            </div>
            <div>
                [ 配送希望時間 ]<br />
                <input name="delivery-date" type="text" value={delivery_date} />
                &nbsp;&nbsp;
                <Select options={timeOptions} />
            </div>
            <div>
                [ コメント ]<br />
                <p>{comment}</p>
            </div>
            <div>
                [ 送り状番号 ]<br />
                <input
                    type="text"
                    name="transaction_id"
                    value={transaction_id}
                    onChange={() => alert('onChange')}
                />
                <br />
                <input
                    type="text"
                    name="transaction_id2"
                    value={transaction_id2}
                />
            </div>
            <div>
                <input
                    type="button"
                    onClick={() => closeModal()}
                    value="閉じる"
                />
                <input type="button" id="updateBtn" value="更新" />
            </div>
        </>
    )
}

export default OrderDetail
