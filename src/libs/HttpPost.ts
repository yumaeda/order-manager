export const send = (
    uri: string,
    jsonBody: any,
    callback: (res: any) => void
) => {
    const method = 'POST'
    const body = JSON.stringify(jsonBody)
    const headers: { [key: string]: string } = {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }

    fetch(uri, { method, headers, body })
        .then(callback)
        .catch(error => {
            alert(error.stack)
        })
}
