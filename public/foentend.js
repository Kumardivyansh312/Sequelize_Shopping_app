/*function fetchproducts(done) {
    $.get('/api/products', (data) => {
        done(data)
    })
}*/


function fetchproducts() {
    $.get('/api/products', (data) => {
        done(data)
    })
}

function done(products) {
    let productlist = $('#product-list')
    productlist.empty()
    for (product of products) {
        productlist.append(createproductcard(product))
    }
}

function createproductcard(product) {
    return (`<div class="col m-2 p-4 card">
    <div class="text-decoration-underline fs-2" width="18rem">${product.name}</div>
        <div class="product-manufacturer">${product.manufacturer}</div>
        <div class="row">
            <div class="col">
              <b>${product.price}</b>
            </div>
         <div class="col">
           <button type="button" class="btn btn-primary align-bottom">Buy</button>
         </div>
     </div>
 </div>`)
}
/*$(() => {
    let productlist = $('#product-list')
    fetchproducts(function(products) {
        productlist.empty()
        for (product of products) {
            productlist.append(createproductcard(product))
        }
    })
})*/

$(() => {
    //  let productlist = $("#product-list")
    fetchproducts()
})