function importElements() {
    const header = document.getElementById('header');
    const footer = document.getElementById('footer');
    const sidebar = document.getElementById('sidebar');
    function chargeHTMLElements(url, parent) {
        fetch(url)
            .then(response => response.text())
            .then(element => {
                parent.innerHTML = element;
            })
    }

chargeHTMLElements('/src/layouts/header.html', header);
chargeHTMLElements('/src/layouts/footer.html', footer);
chargeHTMLElements('/src/layouts/sidebar.html', sidebar);  
}

importElements();
import {openCloseSidebar} from "./sidebar.js";