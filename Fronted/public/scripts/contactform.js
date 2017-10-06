// Når sidens elementer (alt indhold) er loadet på siden
(() => {
    document.addEventListener('DOMContentLoaded', () => {
        hentData(0);
    });

})();

// Funktion som henter data til visning i content
// Funktionen har en parameter - hvis tallet nul hentes alt indhold, og hvis større end nul hentes kun denne ene kategori
// function hentData(type = 0) {
//     let url = 'http://localhost:1337/produkt';
//     if (type > 0) url += '/' + type;
//     fetch(url)
//         .then((response) => {
//             // grib svarets indhold (body) og send det som et json objekt til næste .then()
//             return response.json();
//         })
//         .then((data) => {
//             // nu er json objektet lagt ind i data variablen, udskriv data
//             console.log(data);
//             var type = '';
//             document.getElementById('content').innerHTML = "";
//             data.forEach(function (item) {
//                 if (type != item.type) {
//                     document.getElementById('content').innerHTML += `<h2>${item.type}</h2>`;
//                     type = item.type;
//                 }
//                 document.getElementById('content').innerHTML += `
//                         <div>
//                             <b>${item.navn}</b><br>
//                             pris: kr. ${item.pris}<br>
//                             <img src="images/${item.image}" width="60px" />
//                         </div>  
//                         `;

//             })
//         })
// }
document.querySelector('#selecttype').addEventListener('change', (event) => {
    let obj = document.querySelector('#selecttype');
    hentData(obj.value);
})

// Lytter på om der er klikket på knappen gem - herefter postes data som indsættes i databasen
document.querySelector('#gem').addEventListener('click', (event) => {
    console.log('event ok');
    event.preventDefault();
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let subject = document.querySelector('#subject').value;
    let message = document.querySelector('#message').value;

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let init = {
        method: 'POST',
        headers: headers,
        body: `{"name":"${name}","email":"${email}","subject":"${subject}","message":"${message}" }`,
        cache: 'no-cache',
        mode: 'cors'
    };

    let request = new Request('http://localhost:1337/create', init);

    fetch(request)
        .then(response => { console.log(response) }).catch(err => { console.log(err) });

});