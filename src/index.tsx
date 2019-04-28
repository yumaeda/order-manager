/**
 * Renders root component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Root from './components/Root'

const orders = [
    {
        deliveryDate: '2019年05月12日 指定なし',
        id: '00000000-0000001001',
        isCool: false,
        name: 'Bistro Tableau Noir',
        status: 1,
        total: 22161
    },
    {
        deliveryDate: '2019年05月12日 指定なし',
        id: '00000000-0000001002',
        isCool: true,
        name: 'ひまわり',
        status: 2,
        total: 12161
    },
    {
        deliveryDate: '指定なし 指定なし',
        id: '00000000-0000001003',
        isCool: false,
        name: 'La nuits blanche',
        status: 3,
        total: 99161
    }
]

ReactDOM.render(<Root orders={orders} />, document.getElementById('root'))
