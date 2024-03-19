async function getProductsPage (page: any) {
    return new Promise ((resolve, reject) => {
        resolve(fetch(`localhost:3001/api/products/pages/:${page}`));
    })
    .then((result: any) => result.json())
    .then((data: any) => data);
}

export default getProductsPage;