/**
 * TimeSelect component
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
  { text: '指定なし', value: '指定なし' },
  { text: '午前中（8:00〜12:00）', value: '午前中（8:00〜12:00）' },
  { text: '12:00 ～ 14:00', value: '12:00 ～ 14:00' },
  { text: '14:00 ～ 16:00', value: '14:00 ～ 16:00' },
  { text: '16:00 ～ 18:00', value: '16:00 ～ 18:00' },
  { text: '18:00 ～ 20:00', value: '18:00 ～ 20:00' },
  { text: '19:00 ～ 21:00', value: '19:00 ～ 21:00' }
]

/**
 * Interface for props
 */
interface IProps {
    onChange: (event: React.FormEvent<HTMLSelectElement>) => void
    value: string
}

/**
 * TimeSelect component
 */
const TimeSelect: React.FC<IProps> = (props) => {
  const { onChange, value } = props

  return <Select options={options} value={value} onChange={onChange} />
}

export default React.memo(TimeSelect)
