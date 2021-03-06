    const sidebarElement = document.getElementById('sidebar');
    const mediaQuery = window.matchMedia('screen and (min-width: 1024px)');

    if(mediaQuery.matches) {
        sidebar.classList.add('sidebar-desktop');
    } else {
        sidebar.style.display = 'none'
    }

    console.log('test')
    
    window.addEventListener('load', () => {
        const menu = document.querySelector('#menu')
        menu.onclick = openCloseSidebar;
    })
    
    function openCloseSidebar() {
        if(sidebar.style.display === 'none') {
            sidebar.style.display = 'block'
        } else {
            sidebar.style.display = 'none'
        }
    }