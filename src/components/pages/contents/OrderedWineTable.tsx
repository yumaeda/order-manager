/**
 * OrderedWineTable component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import WineTableRow from './WineTableRow'

/**
 * Interface for props
 */
interface IProps {
    contents: string
}

/**
 * OrderedWineTable component
 */
const OrderedWineTable: React.FC<IProps> = props => {
    const { contents } = props
    const tokens = contents.split(';')

    return (
        <table>
            <tbody className="wine__table__body">
                {tokens.map((token: string) => {
                    const subTokens = token.split('#')
                    const code = subTokens[0]
                    const qty = subTokens[1]

                    return subTokens.length === 2 ? (
                        <WineTableRow code={code} qty={qty} />
                    ) : null
                })}
            </tbody>
        </table>
    )
}

export default React.memo(OrderedWineTable)
