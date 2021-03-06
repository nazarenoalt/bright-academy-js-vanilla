var options = {
    debug: 'info',
    modules: {
            toolbar: {
                container: '#toolbar',  // Selector for toolbar container
        placeholder: 'Create wonderful classes for your students =)',
        theme: 'snow'
        }
    }
}

let editor = new Quill('#editor-container', options);