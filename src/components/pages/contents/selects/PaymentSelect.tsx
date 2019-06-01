/**
 * PaymentSelect component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import { IOption } from '../../../../interfaces/IOption'
import Select from '../../../common/Select'

/**
 * Payment method options
 */
const options: IOption[] = [
    { text: '未定', value: '0' },
    { text: 'クレジットカード', value: '1' },
    { text: '銀行振り込み', value: '2' }
]

/**
 * Interface for props
 */
interface IProps {
    value: string
}

/**
 * PaymentSelect component
 */
const PaymentSelect: React.FC<IProps> = props => {
    const { value } = props

    return <Select options={options} value={value} />
}

export default React.memo(PaymentSelect)
