/**
 * OrderedWineTable component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import WineSetTableRow from './WineSetTableRow'
import WineTableRow from './WineTableRow'

/**
 * Interface for props
 */
interface IProps {
    contents: string
    setOrderContents: (contents: string) => void
}

/**
 * OrderedWineTable component
 */
const OrderedWineTable: React.FC<IProps> = props => {
    const { contents, setOrderContents } = props
    const tokens = contents.split(';')

    return (
        <table>
            <tbody className="wine__table__body">
                {tokens.map((token: string) => {
                    const subTokens = token.split('#')
                    const code = parseInt(subTokens[0], 10)
                    const qty = subTokens[1]

                    return subTokens.length === 2 ? (
                        code < 50000 || code >= 100000 ? (
                            <WineTableRow
                                code={subTokens[0]}
                                contents={contents}
                                qty={qty}
                                setOrderContents={setOrderContents}
                            />
                        ) : (
                            <WineSetTableRow code={code} qty={qty} />
                        )
                    ) : null
                })}
            </tbody>
        </table>
    )
}

export default React.memo(OrderedWineTable)
