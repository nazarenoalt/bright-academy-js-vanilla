function importElements() {
    const header = document.getElementById('header');
    const footer = document.getElementById('footer');
    const sidebar = document.getElementById('sidebar');

    function chargeHTMLElements(url, parent) {
        return fetch(url)
            .then(response => response.text())
            .then(element => {
                parent.innerHTML = element;
            })
    }

    Promise.all([
        chargeHTMLElements('/src/layouts/header.html', header),
        chargeHTMLElements('/src/layouts/footer.html', footer),
        chargeHTMLElements('/src/layouts/sidebar.html', sidebar),
    ])
        .then(() => {
            document.body.classList.remove('loading');
        })
        .catch(handleErrors => console.error(handleErrors));
}

importElements();
