window.onload = function () {
    //let username = sessionStorage.getItem('name'); //sessionStorage object store key/value pairs in the browser and will delete after the browser/tab is closed
    let username = localStorage.getItem('name'); 
    //localStorage object store key/value pairs in the browser and will keeps the key/value even after the browser/tab is closed
    if (!username) {
        username = prompt('May I know your name?');
    }
    
    if (username !== '') {
        document.getElementById('name').innerHTML = `Howdy ${username}! My name is Kay`;
        localStorage.setItem('name', username);
    } 
    else {
        document.getElementById('name').innerHTML = 'Howdy Stranger! My name is Kay';
    }
}