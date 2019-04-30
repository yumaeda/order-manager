/**
 * Select component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import { IOption } from '../../interfaces/IOption'

/**
 * Interface for props
 */
interface IProps {
    options: IOption[]
}

/**
 * Select component
 */
const Select: React.FC<IProps> = props => {
    const { options } = props

    return (
        <select>
            {options.map((option: IOption, index: number) => (
                <option value={option.value} key={index}>
                    {option.text}
                </option>
            ))}
        </select>
    )
}

export default Select
