export const getCookies = () => {
    let cookies = document.cookie;
    let getString = cookies.split('; ')
    let splitStrings = getString.map(str => str.split('='));
    let cookiesList = {}
    for(let i = 0; i < splitStrings.length; i++) {
        let tmp = splitStrings[i];
        cookiesList[tmp[0]] = tmp[1];
    }
    return cookiesList
}

export const delete_cookies = () => {
    document.cookie.split(";").forEach(c => {
        document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;max-age=0")
    })
}