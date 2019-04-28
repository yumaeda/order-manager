/**
 * OrderTotal component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'

/**
 * Interface fro props
 */
interface IProps {
    total: number
}

/**
 * OrderTotal component
 */
const OrderTotal: React.FC<IProps> = props => {
    const { total } = props
    return <span>{`${total.toLocaleString(navigator.language)} yen`}</span>
}

export default React.memo(OrderTotal)
