export default function getProductProperties(productId: number) {
    return new Promise((resolve, reject) => {
        try {
            resolve(fetch(`http://localhost:3001/api/product-properties/:${productId}`))
        } catch (error) {
            reject(error)
        }
    })
    .then((response: any) => response.json())
    .then((data: any) => data);
}