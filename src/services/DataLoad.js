

export const DataLoad = async () => {
  try {
    const response = await fetch(`https://5b27755162e42b0014915662.mockapi.io/api/v1/posts/`, {
      method: 'GET',
    })
    if (response && response.statusText === 'OK') {
      return response.json()
    }
  } catch (e) {
    return alert('ERROR', {e})
  }
}
 
  export const dataDelete = async (id) => {
    try {
      const response = await fetch(`https://5b27755162e42b0014915662.mockapi.io/api/v1/posts/${id}`, {
        method: 'DELETE',
      })
      if (response && response.statusText === 'OK') {
        return response.json()
      }
    } catch (e) {
      return alert('ERROR', {e})
    }
  }

