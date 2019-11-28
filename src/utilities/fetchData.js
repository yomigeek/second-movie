const baseURL = 'https://api.tvmaze.com';

const fetchData = (payload) => {
  let headers;
  const {
    apiUrl, method, headerType,
  } = payload;
  if (headerType === 'token-type') {
    const token = localStorage.getItem('token');
    headers = {
      'Content-Type': 'application/json',
      'x-access-token': token,
    };
  } else {
    headers = {
      'Content-Type': 'application/json',
    };
  }
  const apiCallResponse = fetch(`${baseURL}${apiUrl}`, {
    method: method || 'GET',
    headers,
  }).then(response => response.json())
    .catch(error => (error));

  return apiCallResponse;
};

export default fetchData;
