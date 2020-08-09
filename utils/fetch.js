const contentType = 'application/json'

export function makePutRequest(requestUrl, body) {
  const options = {
    method: 'PUT',
    headers: {
      Accept: contentType,
      'Content-Type': contentType,
    }
  }

  if (body) {
    options.body = JSON.stringify(body)
  }

  return fetch(requestUrl, options)
}