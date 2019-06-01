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
    onChange: (event: React.FormEvent<HTMLSelectElement>) => void
    value: string
}

/**
 * Select component
 */
const Select: React.FC<IProps> = props => {
    const { options, onChange, value } = props

    return (
        <select onChange={event => onChange(event)}>
            {options.map((option: IOption, index: number) =>
                value === option.value ? (
                    <option value={option.value} key={index} selected>
                        {option.text}
                    </option>
                ) : (
                    <option value={option.value} key={index}>
                        {option.text}
                    </option>
                )
            )}
        </select>
    )
}

export default Select
