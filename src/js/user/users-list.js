import generateUsersList from '../utils/generate-users-list.js'

const list = generateUsersList();

console.log('users list')
console.log("users list: "+ list)

list.map( user => {
  console.log(user)
})