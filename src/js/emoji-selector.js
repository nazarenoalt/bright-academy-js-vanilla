const emojis = document.querySelectorAll('.emoji');

emojis.forEach(emoji => {
    emoji.addEventListener('click', () => {
            emojis.forEach(emoji => emoji.classList.remove('emoji-selected'))
            emoji.classList.add('emoji-selected');
    })
})

// Check for the various File API support.
if (window.File && window.FileReader && window.FileList && window.Blob) {
    // Great success! All the File APIs are supported.
  } else {
    alert('The File APIs are not fully supported in this browser.');
  }