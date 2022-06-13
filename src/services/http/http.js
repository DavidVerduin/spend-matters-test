/**
 * @summary This is to get rid of the neccessity of the double then
 * @param {RequestInfo | URL} input 
 * @param {RequestInit | undefined} init 
 * @returns {Promise<T>}
 */
export const Http = (input, init) => {
  return new Promise((resolve, reject) => {
    fetch(input, init)
    .then(response => response.json())
    .then(resolve)
    .catch(reject);
  });
}