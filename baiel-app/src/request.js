import {baseUrl} from './config';

function request(path, method, body) {
  const options = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  if (method) options.method = method;
  if (body) options.body = JSON.stringify(body);

  return fetch(baseUrl + path, options).then(res => res.json());
}

export default request;
