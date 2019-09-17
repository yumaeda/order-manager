/**
 * WineTableRow component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import { IWine } from '../../../interfaces/IWine'
import { defaultWine } from '../../../states'

/**
 * Interface for props
 */
interface IProps {
    code: string
    contents: string
    setOrderContents: (contents: string) => void
    qty: string
}

/**
 * WineTableRow component
 */
const WineTableRow: React.FC<IProps> = props => {
    const { code, contents, qty, setOrderContents } = props
    const [wine, setWine] = React.useState<IWine>(defaultWine)
    const [wineCode, setWineCode] = React.useState(code)

    React.useEffect(() => {
        const baseUri = '//anyway-grapes.jp/laravel5.3/public/api/v1/wines'
        fetch(`${baseUri}/${code}`)
            .then(response => response.json())
            .then(response => {
                if (response.wines.length > 0) {
                    setWine(response.wines[0])
                }
            })
            .catch(error => {
                alert(error.stack)
            })
    }, [])

    const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
        const nextCode = event.currentTarget.value
        if (
            parseInt(nextCode, 10) < 50000 ||
            parseInt(nextCode, 10) >= 100000
        ) {
            setWineCode(nextCode)
            const prevToken = `${code}#${qty}`
            const nextToken = `${nextCode}#${qty}`
            setOrderContents(contents.replace(prevToken, nextToken))
        } else {
            alert(`[#${nextCode}] is not a valid wine code!!`)
        }
    }

    return (
        <tr key={wine.barcode_number}>
            <td>
                <input
                    type="text"
                    value={wineCode}
                    className="wine_code"
                    onChange={handleChange}
                />
            </td>
            <td>{wine.vintage}</td>
            <td>{wine.combined_name}</td>
            <td>{` [${wine.producer}]`}</td>
            <td>{` x${qty}`}</td>
        </tr>
    )
}

export default React.memo(WineTableRow)
