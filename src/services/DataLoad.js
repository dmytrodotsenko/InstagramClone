

export const DataLoad = () =>
  fetch('https://5b27755162e42b0014915662.mockapi.io/api/v1/posts', {
    method: 'GET',
  }).then(response => response.json());

