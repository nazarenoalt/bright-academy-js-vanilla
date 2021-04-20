export const getGET = () => {
    let loc = document.location.href;
    let getString = loc.split('?')[1];
    let GET = getString.split('&')
    let get = {}

    for(let i = 0; i < GET.length; i++){
        let tmp = GET[i].split('=');
        get[tmp[0]] = decodeURI(tmp[1])
    }
    return get;
}