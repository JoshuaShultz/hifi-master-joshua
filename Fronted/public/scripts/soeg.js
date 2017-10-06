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
       
               <div class="col-md-12">
                   <div class="panel panel-primary">
                       <div class="panel-heading ">
                           <h3 class="panel-title"><strong>Produkt Info</strong></h3>
                           <span class="pull-right clickable"><i class="glyphicon glyphicon-chevron-up"></i></span>
                       </div>
                       <div class="panel-body bg-primary"><div  class="beskrivelse">${element.beskrivelse}</div></div>
                   </div>
               </div>
               
               <div class="productprice">${element.pris}</div>
               <div class="pull-right"><a href="#" class="btn btn-info btn-sm" role="button">BUY</a></div>
               <div class="pricetext"></div>
           </div>
       </div>
     </div>`;
        }, this);
    }) 
})