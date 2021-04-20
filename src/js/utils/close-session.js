import { ORIGIN_ROOT } from './../utils/constants.js'
import { delete_cookies } from './../utils/cookies.js'

export const closeSession = () => {
  delete_cookies();
  document.location = ORIGIN_ROOT; 
}