/**
 * FieldContainer component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'

/**
 * Interface for props
 */
interface IProps {
    children: React.ReactNode
}

/**
 * FieldContainer component
 */
const FieldContainer: React.FC<IProps> = props => {
    const { children } = props

    return <div className="field__container">{children}</div>
}

export default React.memo(FieldContainer)
