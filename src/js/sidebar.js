const sidebarElement = document.getElementById('sidebar');
const mediaQuery = window.matchMedia('screen and (min-width: 1024px)');

if (mediaQuery.matches) {
    sidebar.classList.add('sidebar-desktop');
} else {
    sidebar.style.display = 'none'
}

window.addEventListener('onload', () => {
    const menu = document.querySelector('#menu')
    menu.onclick(openCloseSidebar)
    console.log(menu)
})
function openCloseSidebar() {
    console.log('HOLAAAAs')
    if (sidebar.style.display === 'none') {
        sidebar.style.display = 'block'
    } else {
        sidebar.style.display = 'none'
    }
}

