export default function activeSidebar() {
    const menu = document.getElementById('menu');
    const sidebarElement = document.getElementById('sidebar');
    
    menu.onclick(openCloseSidebar);
    
    function openCloseSidebar() {
        console.log('hola')
    /*     if(sidebar.style.display === 'none') {
            sidebar.style.display = 'block'
        } else{
            sidebar.style.display = 'none'
        } */
    }
}
