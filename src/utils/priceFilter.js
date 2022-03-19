export const priceFilter = (products = [], price = 0) => {
    if(price){
        return products.filter(product => product.price <= price)
    }
    return products;
}