/**
 * Root component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import { IOrderPage } from './IOrderPage'
import OrderTableBody from './OrderTableBody'
import OrderTableHeader from './OrderTableHeader'

/**
 * Root component
 */
const Root: React.FC<IOrderPage> = props => {
    const { orders } = props

    return (
        <>
            <header>
                <a href="http://sei-ya.jp/admin_home.html">
                    <img
                        className="home__button"
                        src="//anyway-grapes.jp/images/adminHome.png"
                    />
                </a>
            </header>
            <div id="contents">
                <table className="order__table">
                    <OrderTableHeader />
                    <OrderTableBody orders={orders} />
                </table>
            </div>
        </>
    )
}

export default Root
