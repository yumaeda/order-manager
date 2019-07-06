/**
 * WineSetTableRow component
 *
 * @author Yukitaka Maeda [yumaeda@gmail.com]
 */
import * as React from 'react'
import { IWineSet } from '../../../interfaces/IWineSet'
import { defaultWineSet } from '../../../states'

/**
 * Interface for props
 */
interface IProps {
    code: number
    qty: string
}

/**
 * WineSetTableRow component
 */
const WineSetTableRow: React.FC<IProps> = props => {
    const { code, qty } = props
    const [wineSet, setWineSet] = React.useState<IWineSet>(defaultWineSet)

    React.useEffect(() => {
        const baseUri = '//anyway-grapes.jp/laravel5.3/public/api/v1/wine-sets'
        fetch(`${baseUri}/${code - 50000}`)
            .then(response => response.json())
            .then(response => {
                if (response.wines.length > 0) {
                    setWineSet(response.wines[0])
                }
            })
            .catch(error => {
                alert(error.stack)
            })
    }, [])

    return (
        <tr key={code}>
            <td>{wineSet.id}</td>
            <td>{wineSet.name}</td>
            <td>{` x${qty}`}</td>
        </tr>
    )
}

export default React.memo(WineSetTableRow)
