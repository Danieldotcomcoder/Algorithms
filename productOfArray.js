let product = 1;

function productOfArray(a) {

    if (a.length === 1 ) {
        return 
    } 
    product = product * a[1];
    a.splice(0,1);
    productOfArray(a)
    return product;
        
}
    
    productOfArray([1,2,3,4,5])

