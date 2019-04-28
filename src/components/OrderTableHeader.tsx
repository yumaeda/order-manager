/**
 * OrderTableHeader component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'

/**
 * OrderTableHeader component
 */
const OrderTableHeader: React.FC = () => (
    <thead>
        <tr>
            <th>
                <label />
            </th>
            <th className="order__header">
                <label className="orderLabel">Order ID</label>
            </th>
            <th className="order__header">
                <label className="orderLabel">Name</label>
            </th>
            <th className="order__header">
                <label className="orderLabel">Total</label>
            </th>
            <th className="order__header">
                <label className="orderLabel">Status</label>
            </th>
            <th className="order__header">
                <label className="orderLabel">Delivery Date</label>
            </th>
            <th>
                <input name="dbTable" type="hidden" value="orders" />
            </th>
            <th>
                <label />
            </th>
        </tr>
    </thead>
)

export default OrderTableHeader
