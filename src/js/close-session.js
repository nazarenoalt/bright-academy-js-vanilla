import { delete_cookies, ORIGIN_ROOT } from './constants.js'

export const closeSession = () => {
  delete_cookies();
  document.location = ORIGIN_ROOT; 
}