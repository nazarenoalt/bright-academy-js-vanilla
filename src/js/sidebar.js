const sidebarElement = document.getElementById('sidebar');
const header = document.querySelector('header-component')
const mediaQuery = window.matchMedia('screen and (min-width: 1024px)');

if (mediaQuery.matches) {
    sidebar.classList.add('sidebar-desktop');
} else {
    sidebar.style.display = 'none'
    header.setAttribute('responsive','mobile')
}

window.addEventListener('load', () => {


})

function openCloseSidebar() {

}

