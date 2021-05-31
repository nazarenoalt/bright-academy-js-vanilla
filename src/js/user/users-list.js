import { API_URL, AUTH_TOKEN } from '../utils/constants.js';

const generateUsersList = () => {
  const URL = `${API_URL}users/`;
  
  fetch(URL, {
    headers: {
      Authorization: `Token ${AUTH_TOKEN}`
    }
  })
  .then(response => response.json())
  .then(data => {
    const table = document.createElement('table')

    data.map(user => {
      console.log(user)

      const user_tr = document.createElement('tr');

      const td_name = document.createElement('td');
      td_name.innerText = user.username;
      const td_role = document.createElement('td');
      td_role.innerText = user.profile.profile_type;
      const td_level = document.createElement('td');
      td_level.innerText = user.profile.level;

      user_tr.append(td_name, td_role, td_level)
      table.append(user_td);
    })

    
  })
}

generateUsersList();
console.log('users-list-v2')