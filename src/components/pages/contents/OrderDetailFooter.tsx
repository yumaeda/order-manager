/**
 * OrderDetailFooter component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'

/**
 * Interface for props
 */
interface IProps {
    closeModal: () => void
}

/**
 * OrderDetailFooter component
 */
const OrderDetailFooter: React.FC<IProps> = props => {
    const { closeModal } = props

    return (
        <div>
            <input type="button" onClick={() => closeModal()} value="閉じる" />
            <input type="button" id="updateBtn" value="更新" />
        </div>
    )
}

export default React.memo(OrderDetailFooter)
