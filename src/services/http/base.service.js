class BaseService {
  /**@type {string} The path of the api url, gotten from environment variable */
  path = process.env.REACT_APP_API_KEY;

  /**
   * @summary Executes an async get request to the given path
   * @param {string} path 
   */
  get(path) {
    return fetch(`${this.path}${path || ''}`);
  }

  /**
   * @summary Executes an async get request to the given path
   * @param {string} path Subpath of the request, appended to the API_URL
   * @param {any} body The object wanted to be created
   */
  post(path, body) {
    return fetch(`${this.path}${path || ''}`, {method: 'POST', body });
  }

  /**
   * @summary Executes an async get request to the given path
   * @param {string} path Subpath of the request, appended to the API_URL
   * @param {any} body The object wanted to be updated
   */
  put(path, body) {
    return fetch(`${this.path}${path || ''}`, {method: 'PUT', body});
  }

  /**
   * @summary Executes an async get request to the given path
   * @param {string} path Subpath of the request, appended to the API_URL
   * @param {any} body The object wanted to be deleted
   */
  delete(path, body) {
    return fetch(`${this.path}${path || ''}`, {method: 'DELETE', body});
  }

  /**
   * @summary Executes an async get request to the given path
   * @param {string} path Subpath of the request, appended to the API_URL
   * @param {any} body The object wanted to be updated
   */
  patch(path, body) {
    return fetch(`${this.path}${path || ''}`, {method: 'PATCH', body});
  }
}

export const Service = new BaseService();