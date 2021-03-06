/*  const getEmojis = async () => {
    const fetchEmojis = await fetch('../../assets/icons/emojis')
    const response = await fetchEmojis.json();
    console.log(response);
}
 */
fetch('../../assets/icons/emojis')
    .then( response => response )
    .then( data => console.log(data) );