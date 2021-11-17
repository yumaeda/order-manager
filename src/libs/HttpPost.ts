import API_BASE_URI from '../const/Global'

const send = (
  uri: string,
  obj: any,
  onSuccess: () => void
) => {
  const method = 'POST'
  const headers = {
    'Content-Type': 'application/json'
  }

  fetch(uri, {
    method,
    headers,
    body: JSON.stringify(obj),
    credentials: 'include'
  })
    .then((response: any) => response.json())
    .then((json: string) => {
      console.log(json)
      onSuccess()
    })
    .catch((error: Error) => {
      fetch(`${API_BASE_URI}/send_error.php`, {
        method,
        headers,
        body: JSON.stringify({
          errorMessage: `Error: ${error.message}, Stack: ${error.stack}`
        }),
        credentials: 'include'
      })
    })
}

export default send
