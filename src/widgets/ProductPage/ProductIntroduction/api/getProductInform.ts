function getProductInform (productId: number) {
    return new Promise((resolve, reject) => {
        try {
            resolve(fetch(`https://wb-backend-a99n.onrender.com/api/products/:${productId}`))
        } catch (error) {
            reject(error)
        }
    })
    .then((response: any) => response.json())
    .then((data: any) => data);
};

export default getProductInform;