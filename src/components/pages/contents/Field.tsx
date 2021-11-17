/**
 * Field component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'

/**
 * Interface for props
 */
interface IProps {
    children: React.ReactNode
    label: string
}

/**
 * Field component
 */
const Field: React.FC<IProps> = (props) => {
  const { children, label } = props

  return (
    <div className="field">
      <label className="field__label">{label}</label>
      <div className="field__input">{children}</div>
    </div>
  )
}

export default React.memo(Field)
