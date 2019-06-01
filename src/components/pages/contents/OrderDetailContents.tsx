/**
 * OrderDetailContents component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import PriceText from '../../common/PriceText'
import Field from './Field'
import FieldContainer from './FieldContainer'
import OrderedWineTable from './OrderedWineTable'
import PaymentSelect from './selects/PaymentSelect'
import TimeSelect from './selects/TimeSelect'

/**
 * Interface for props
 */
interface IProps {
    address: string
    comment: string
    contents: string
    fee: number
    name: string
    deliveryDate: string
    deliveryTime: string
    memberDiscount: number
    paymentMethod: number
    phone: string
    taxRate: number
    trackingCode1: string
    trackingCode2: string
    total: number
}

/**
 * OrderDetail component
 */
const OrderDetailContents: React.FC<IProps> = props => {
    const {
        address,
        comment,
        contents,
        fee,
        name,
        deliveryDate,
        deliveryTime,
        memberDiscount,
        paymentMethod,
        phone,
        taxRate,
        trackingCode1,
        trackingCode2,
        total
    } = props

    return (
        <FieldContainer>
            <Field label="購入ワイン">
                <OrderedWineTable contents={contents} />
            </Field>
            <Field label="会員価格">
                <span id="memberPriceText">
                    {memberDiscount === 1 ? 'Yes' : 'No'}
                </span>
            </Field>
            <Field label="合計額">
                <PriceText amount={total} fee={fee} taxRate={taxRate} />
            </Field>
            <Field label="支払い方法">
                <PaymentSelect value={paymentMethod.toString()} />
            </Field>
            <Field label="配送業者">
                <span>ヤマト運輸</span>
            </Field>
            <Field label="配送先">
                <span>{`${name}様`}</span>
                <br />
                <span>{`Tel: ${phone}`}</span>
                <br />
                <span>{`〒${address}`}</span>
            </Field>
            <Field label="配送希望時間">
                <input name="delivery-date" type="text" value={deliveryDate} />
                &nbsp;&nbsp;
                <TimeSelect value={deliveryTime} />
            </Field>
            <Field label="コメント">
                <p>{comment}</p>
            </Field>
            <Field label="送り状番号">
                <input
                    type="text"
                    name="transaction_id"
                    value={trackingCode1}
                    onChange={() => alert('onChange')}
                />
                <input
                    type="text"
                    name="transaction_id2"
                    value={trackingCode2}
                />
            </Field>
        </FieldContainer>
    )
}

export default React.memo(OrderDetailContents)
