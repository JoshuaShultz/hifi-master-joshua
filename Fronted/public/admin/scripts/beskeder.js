(() => {
        document.addEventListener('DOMContentLoaded', () => {
            hentBeskeder();
        });
     
    })();
    function hentBeskeder() {
        fetch('http://localhost:1337/beskeder')
            .then((response) => {
                // grib svarets indhold (body) og send det som et json objekt til næste .then()
                return response.json();
            })
            .then((data) => {
                let beskeder = $("#beskeder");
                let besked = $(".besked");
     
                for (let d = 0; d < data.length - 1; d++) {
                    beskeder.append(besked[0].outerHTML);
                }
                data.forEach(function (element, index) {
                    // nu er json objektet lagt ind i data variablen, udskriv data
                    console.log(element);
                    document.getElementsByClassName("navn")[index].innerHTML += element.navn;
                    document.getElementsByClassName("email")[index].innerHTML += element.email;
                    document.getElementsByClassName("emne")[index].innerHTML += element.emne;
                    document.getElementsByClassName("tekst")[index].innerHTML += element.besked;
                    document.getElementsByClassName("delete")[index].dataset["id"] += element.id;
                }, this);
     
                let deleteButtons = document.querySelectorAll('.delete')
                for (let d = 0; d < deleteButtons.length; d++) {
                    deleteButtons[d].addEventListener("click", function (event) {
                        if (confirm("Er du sikker?")) {
                            let headers = new Headers();
                            headers.append('Content-Type', 'application/json');
     
                            let init = {
                                method: 'delete',
                                headers: headers,
                                cache: 'no-cache',
                                mode: 'cors'
                            };
     
                            let request = new Request(`http://localhost:1337/besked/${deleteButtons[d].dataset["id"]}`, init);
     
                            fetch(request)
                                .then(response => {
                                    window.location.replace("http://localhost:3000/admin/kontakt.html");
                                }).catch(err => { console.log(err) });
                        }
                    });
                }
            })
    }