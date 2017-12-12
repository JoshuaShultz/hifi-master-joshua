(() => {
    document.addEventListener('DOMContentLoaded', () => {
        hentProdukter();
    });

})();
function hentProdukter() {
    fetch('http://localhost:1337/produkter')
        .then((response) => {
            // grib svarets indhold (body) og send det som et json objekt til næste .then()
            return response.json();
        })
        .then((data) => {
            let products = $("#products");
            let all_products = $(".product");

            for (let d = 0; d < data.length - 1; d++) {
                products.append(all_products[0].outerHTML);
            }
            data.forEach(function (element, index) {
                // nu er json objektet lagt ind i data variablen, udskriv data
                console.log(element);
                document.getElementsByClassName("producttitle")[index].innerHTML += element.navn;
                document.getElementsByClassName("productdescription")[index].innerHTML += element.beskrivelse;
                document.getElementsByClassName("pricetext")[index].innerHTML += element.pris;
                document.getElementsByClassName("product_img")[index].innerHTML += `<img src=" ${element.img}" class="img-circle img-responsive">`;
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

                        let request = new Request(`http://localhost:1337/produkt/${deleteButtons[d].dataset["id"]}`, init);

                        fetch(request)
                            .then(response => {
                                window.location.replace("http://localhost:3000/admin/produkter.html");
                            }).catch(err => { console.log(err) });
                    }
                });
            }

            let editButtons = document.querySelectorAll('.edit')
            for (let d = 0; d < editButtons.length; d++) {
                editButtons[d].addEventListener("click", function (event) {
                    window.location.replace("http://localhost:3000/admin/redigerProdukt.html?id=" + deleteButtons[d].dataset["id"]);
                });
            }

        })
}