
function updateQuantity(productQ, isIcrease) {
    const product = document.getElementById(productQ);
    const productValue = parseInt(product.value);
    let productInq;
    if (isIcrease == true) {
        productInq = productValue + 1;

    } else {
        productInq = productValue - 1;

    }

    product.value = productInq;
    return productInq;
}

function setPrice(prodID, sPrice) {
    const sePrice = document.getElementById(prodID);
    sePrice.innerText = sPrice;
}

// common

function getAllElementValueById(elementID) {
    const element = document.getElementById(elementID);
    const elementValue = parseFloat(element.innerText);
    return elementValue;
}


function getSubTotal() {
    const elementValue = getAllElementValueById('c-price');
    const elementValue2 = getAllElementValueById('p-price');
    const subAmount = elementValue + elementValue2;
    const subElement = getElemetByID('Subtotal', subAmount)


    // tax

    const tax = parseFloat((subAmount * 0.01).toFixed(2));
    const taxElement = getElemetByID('tax', tax)


    const final = tax + subAmount;
    const finalAmount = getElemetByID('total', final)
}

function getElemetByID(element, value) {
    const subElement = document.getElementById(element);
    subElement.innerText = value;


}

document.getElementById('mobile-in-btn').addEventListener('click', function () {

    const pr = updateQuantity('m-field', true)
    const total = 1219 * pr;
    // set Value
    setPrice('p-price', total)
    getSubTotal()
})

document.getElementById('mobile-de-btn').addEventListener('click', function () {
    const de = updateQuantity('m-field', false)
    const total = 1219 * de;
    // set Value
    setPrice('p-price', total)
    getSubTotal()
})

document.getElementById('btn-case-in').addEventListener('click', function () {
    const up = updateQuantity('case-field', true)
    const total = 59 * up;
    setPrice('c-price', total)
    getSubTotal()
})
document.getElementById('btn-case-de').addEventListener('click', function () {
    const up = updateQuantity('case-field', false)
    const total = 59 * up;
    setPrice('c-price', total)
    getSubTotal()
})


// close the property

document.getElementById('btn-close').addEventListener('click', function () {
    document.getElementById('product-1').style.display = 'none'

})
document.getElementById('btn-close-2').addEventListener('click', function () {
    document.getElementById('product-2').style.display = 'none'
})