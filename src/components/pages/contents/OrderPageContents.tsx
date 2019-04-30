/**
 * OrderPageContents component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import { IOrderPage } from '../../../interfaces/IOrderPage'
import OrderTableBody from './OrderTableBody'
import OrderTableHead from './OrderTableHead'

interface IProps extends IOrderPage {
    openModal: () => void
    selectOrder: (order: any) => void
    taxRate: number
}

/**
 * OrderPageContents component
 */
const OrderPageContents: React.FC<IProps> = props => {
    const { openModal, orders, selectOrder, taxRate } = props

    return (
        <div id="contents">
            <table className="order__table">
                <OrderTableHead />
                <OrderTableBody
                    orders={orders}
                    openModal={openModal}
                    selectOrder={selectOrder}
                    taxRate={taxRate}
                />
            </table>
        </div>
    )
}

export default React.memo(OrderPageContents)
