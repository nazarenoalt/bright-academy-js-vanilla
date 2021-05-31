const button = document.querySelector('#edit-role');
const container = document.querySelector('.main-section');

button.addEventListener('click', () => {
  const form = document.createElement('form')
  form.setAttribute('id', "role_form")
  form.innerHTML = `
    <select name="role-selector" id="role-selector">
      <option value="S">Student</option>
      <option value="T">Teacher</option>
    </select>
    <button type="submit" class="tag" id="submit_role">cambiar rol</button>
  `
  container.append('form')
  const role_form = document.querySelector('#role_form');
  role_form.addEventListener('submit', e => {
    e.preventDefault();
    console.log('sale submit');
  })
})