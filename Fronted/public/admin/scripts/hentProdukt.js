(() => {
    document.addEventListener('DOMContentLoaded', () => {
        var alleUrlParametre = hentAlleUrlParametre();
        if (alleUrlParametre.id !== undefined) {
            hentProdukt(alleUrlParametre.id);
        }
    });

})();

function hentAlleUrlParametre(url = "") {

    // Hvis man ikke giver den en specifik URL, så bruger den browserens aktuelle URL.
    if (url == "") url = window.location.href;

    url = url + "";  // Dette sørger for, at der arbejdes med en KOPI af teksten og ikke den oprindelige tekst.
    var urlParams = {};
    url.replace(
        new RegExp("([^?=&]+)(=([^&]*))?", "g"),
        function ($0, $1, $2, $3) {
            urlParams[$1] = $3;
        }
    );

    return urlParams;
}

function hentProdukt(id) {
    fetch(`http://localhost:1337/produkt/${id}`)
        .then((response) => {
            // grib svarets indhold (body) og send det som et json objekt til næste .then()
            return response.json();
        })
        .then((data) => {
            data.forEach(function (element, index) {
                document.querySelector("#redigerForm").innerHTML += `
                        <div class="form-group">
                            <label class="col-form-label" for="formGroupExampleInput">ID:</label>
                            <input type="text" class="form-control id" id="id" value="${element.id}" disabled>
                        </div>
                        <div class="form-group">
                            <label class="col-form-label" for="formGroupExampleInput">Produkt Titel:</label>
                            <input type="text" class="form-control navn" id="navn" value="${element.navn}">
                        </div>
                        <div class="form-group">
                            <label class="col-form-label" for="formGroupExampleInput">Pris:</label>
                            <input type="text" class="form-control pris" id="pris" value="${element.pris}">
                        </div>
                        <div class="form-group">
                            <label class="col-form-label" for="formGroupExampleInput">Kategori:</label>
                            <input type="text" class="form-control kategori" id="kategori" value="${element.fk_kategori}">
                        </div>
                        <div class="form-group">
                            <label class="col-form-label" for="formGroupExampleInput">Producent:</label>
                            <input type="text" class="form-control producent" id="producent" value="${element.fk_producent}">
                        </div>
                        <div class="form-group">
                            <label class="col-form-label" for="formGroupExampleInput">Beskrivelse:</label>
                            <input type="text" class="form-control beskrivelse" id="beskrivelse" value="${element.beskrivelse}">
                        </div>
                        <div class="form-group">
                            <label class="col-form-label" for="formGroupExampleInput">Billede:</label>
                            <input type="text" class="form-control billede" id="billede" value="${element.img}">
                        </div>
                        `;
            }, this);
            gemProdukt();
        });
}