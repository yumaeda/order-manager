/**
 * OrderPage component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import * as Modal from 'react-modal'
import { defaultOrders } from '../../states'
import OrderDetail from './contents/OrderDetail'
import OrderPageContents from './contents/OrderPageContents'
import OrderPageHeader from './header/OrderPageHeader'

Modal.setAppElement('#modal')

/**
 * Styles for modal
 */
const modalStyles = {
  content: {
    bottom: 'auto',
    left: '50%',
    marginRight: '-50%',
    right: 'auto',
    top: '50%',
    transform: 'translate(-50%, -50%)'
  }
}

/**
 * OrderPage component
 */
const OrderPage: React.FC = () => {
  const [isOpened, setIsOpened] = React.useState(false)
  const [orders, setOrders] = React.useState(defaultOrders)
  const [selectedOrder, selectOrder] = React.useState(orders[0])
  const [taxRate, setTaxRate] = React.useState(0.0)

  React.useEffect(() => {
    const uri = '//anyway-grapes.jp/wines/admin/order/index.php?action=get&order_id=00000000-0000000000'
    fetch(uri)
      .then((response) => response.json())
      .then((response) => setOrders(response))
      .catch((error) => {
        alert(error.stack)
      })
  }, [])

  React.useEffect(() => {
    const uri = '//anyway-grapes.jp/get_tax_rate.php'
    fetch(uri)
      .then((response) => response.json())
      .then((response) => setTaxRate(response))
      .catch((error) => {
        alert(error.stack)
      })
  }, [])

  return (
    <>
      <OrderPageHeader />
      <OrderPageContents
        orders={orders}
        openModal={() => setIsOpened(true)}
        selectOrder={selectOrder}
        taxRate={taxRate}
      />
      <Modal
        isOpen={isOpened}
        onRequestClose={() => setIsOpened(false)}
        style={modalStyles}
        contentLabel="Order Detail"
      >
        <OrderDetail
          {...selectedOrder}
          closeModal={() => setIsOpened(false)}
          taxRate={taxRate}
        />
      </Modal>
    </>
  )
}

export default OrderPage
