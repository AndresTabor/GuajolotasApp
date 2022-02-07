export const getProductsByName = ( name = '', products ) => {
    name = name.toLocaleLowerCase();
    return products.filter( movie => movie.name.toLocaleLowerCase().includes( name )  );

}