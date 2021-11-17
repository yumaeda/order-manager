/**
 * CoolText component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'

/**
 * Interface for props
 */
interface IProps {
    isCool: boolean
}

/**
 * CoolText component
 */
const CoolText: React.FC<IProps> = (props) => {
  const { isCool } = props

  return isCool ? <span className="cool_delivery">クール</span> : null
}

export default React.memo(CoolText)
