import { Http } from "./http";

class BaseService {
  /**@type {string} The path of the api url, gotten from environment variable */
  path = process.env.REACT_APP_API_KEY;

  /**
   * @summary Executes an async get request to the given path
   * @param {string} path 
   * @returns {Promise<T>}
   */
  get(path) {
    return Http(`${this.path}${path || ''}`);
  }

  /**
   * @summary Executes an async get request to the given path
   * @param {string} path Subpath of the request, appended to the API_URL
   * @param {any} body The object wanted to be created
   * @returns {Promise<T>}
   */
  post(path, body) {
    return Http(`${this.path}${path || ''}`, {method: 'POST', body });
  }

  /**
   * @summary Executes an async get request to the given path
   * @param {string} path Subpath of the request, appended to the API_URL
   * @param {any} body The object wanted to be updated
   * @returns {Promise<T>}
   */
  put(path, body) {
    return Http(`${this.path}${path || ''}`, {method: 'PUT', body});
  }

  /**
   * @summary Executes an async get request to the given path
   * @param {string} path Subpath of the request, appended to the API_URL
   * @param {any} body The object wanted to be deleted
   * @returns {Promise<T>}
   */
  delete(path, body) {
    return Http(`${this.path}${path || ''}`, {method: 'DELETE', body});
  }

  /**
   * @summary Executes an async get request to the given path
   * @param {string} path Subpath of the request, appended to the API_URL
   * @param {any} body The object wanted to be updated
   * @returns {Promise<T>}
   */
  patch(path, body) {
    return Http(`${this.path}${path || ''}`, {method: 'PATCH', body});
  }
}

export const Service = new BaseService();