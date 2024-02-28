async function getProductsPage (page: any) {
    return new Promise ((resolve, reject) => {
        resolve(fetch(`https://wb-backend-a99n.onrender.com/api/products/pages/:${page}`));
    })
    .then((result: any) => result.json())
    .then((data: any) => data);
}

export default getProductsPage;