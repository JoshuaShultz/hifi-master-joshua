(() => {
    document.addEventListener('DOMContentLoaded', () => {
        hentProdukter();
    });

})();
function hentProdukter (){
fetch('http://localhost:1337/produkter')
.then((response) => {
    // grib svarets indhold (body) og send det som et json objekt til næste .then()
    return response.json();
})
.then((data) => {
    let products = $("#products");
    let all_products = $(".productbox");

    for (let d = 0; d < data.length - 1; d++) {
        products.append(all_products[0].outerHTML);
    }
    data.forEach(function(element,index) {
        // nu er json objektet lagt ind i data variablen, udskriv data
        console.log(element);
        document.getElementsByClassName("producttitle")[index].innerHTML += element.navn;
        document.getElementsByClassName("pricetext")[index].innerHTML += element.pris;
        document.getElementsByClassName("product_img")[index].innerHTML += "<img src=" + element.img + ">" ;
    }, this);
}) 
}

document.querySelector('#searchbtn').addEventListener('click', (event) => {

    var products = document.querySelector("#products");
    console.log(products);

    products.innerHTML = "";

    const tekst = document.querySelector('#searchtekst').value;
    fetch(`http://localhost:1337/produkter/search/${tekst}`)
    .then((response) => {
        // grib svarets indhold (body) og send det som et json objekt til næste .then()
        return response.json();
    })
    .then((data) => {
        data.forEach(function(element,index) {
            // nu er json objektet lagt ind i data variablen, udskriv data
            console.log(element);
            document.querySelector("#products").innerHTML += `
            <div class="col-md-4 column productbox top15">
            <div class="product_img"><img src="${element.img}"></div>
               <div class="producttitle">${element.navn}</div>
               <div class="productprice">
                   <div class="pull-right"><a href="#" class="btn btn-danger btn-sm" role="button">BUY</a></div>
                   <div class="pricetext">${element.pris}</div>
               </div>
               <div class="productdescription"></div>
           </div>`;

            // document.getElementsByClassName("producttitle")[index].innerHTML += element.navn;
            // document.getElementsByClassName("pricetext")[index].innerHTML += element.pris;
            // document.getElementsByClassName("product_img")[index].innerHTML += "<img src=" + element.img + ">" ;
        }, this);
    });
});