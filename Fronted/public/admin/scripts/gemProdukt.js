function gemProdukt() {
    document.querySelector('#gemProdukt').addEventListener('click', (event) => {
        event.preventDefault();
        let navn = document.querySelector('#navn').value;
        let pris = document.querySelector('#pris').value;
        let kategori = document.querySelector('#kategori').value;
        let producent = document.querySelector('#producent').value;
        let beskrivelse = document.querySelector('#beskrivelse').value;
        let billede = document.querySelector('#billede').value;
        let id = document.querySelector('#id').value;
        console.log(navn, pris, kategori, producent, beskrivelse, billede);
        billede = billede.replace(/\\/g, "\\$&");
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let init = {
            method: 'put',
            headers: headers,
            body: `{"navn":"${navn}","pris":"${pris}","kategori":"${kategori}","producent":"${producent}","beskrivelse":"${beskrivelse}","billede":"${billede}" }`,
            cache: 'no-cache',
            mode: 'cors',

        };

        let request = new Request('http://localhost:1337/produkt/' + id, init);
        console.log(request);

                                fetch(request)
                                    .then(response => {
                                        window.location.replace("http://localhost:3000/admin/produkter.html");
                                    }).catch(err => { console.log(err) });

    });
}

