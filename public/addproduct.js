$(() => {
    $('#btnProductAdd').click(() => {
        $.post('/api/products', {
            name: $('#productName').val(),
            manufacturer: $('#productManufacturer').val(),
            price: $('#productPrice').val()
        }, (products) => {
            alert(products.name + products.price)
        })
    });

})