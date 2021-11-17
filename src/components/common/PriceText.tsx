/**
 * PriceText component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'

/**
 * Interface fro props
 */
interface IProps {
    amount: number
    fee: number
    taxRate: number
}

/**
 * PriceText component
 */
const PriceText: React.FC<IProps> = (props) => {
  const { amount, fee, taxRate } = props
  const taxedAmount = Math.floor((amount + fee) * (1 + taxRate))

  return (
    <span>{`${taxedAmount.toLocaleString(navigator.language)} yen`}</span>
  )
}

export default React.memo(PriceText)
