export const send = (uri: string, obj: any, callback: (res: any) => void) => {
    const headers = { 'Content-Type': 'application/json' }
    const body = JSON.stringify(obj)
    const method = 'POST'
    const credentials = 'same-origin'

    fetch(uri, { body, credentials, headers, method })
        .then(callback)
        .catch(error => alert(error.stack))
}
