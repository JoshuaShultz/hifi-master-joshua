document.querySelector('#gem').addEventListener('click', (event) => {
    console.log('event ok');
    event.preventDefault();
    let navn = document.querySelector('#navn').value;
    let email = document.querySelector('#email').value;
    let emne = document.querySelector('#emne').value;
    let besked = document.querySelector('#besked').value;

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let init = {
        method: 'POST',
        headers: headers,
        body: `{"navn":"${navn}","email":"${email}","emne":"${emne}","besked":"${besked}" }`,
        cache: 'no-cache',
        mode: 'cors'
    };

    let request = new Request('http://localhost:1337/sendbesked', init);

    fetch(request)
        .then(response => { console.log(response) }).catch(err => { console.log(err) });

});