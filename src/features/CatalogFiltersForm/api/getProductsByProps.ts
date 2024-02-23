async function getProductsByProps(filters: string) {
    return new Promise((resolve, reject) => {
        resolve(fetch(`http://localhost:3001/api/getproducts/filters?${filters}`))
    }).then((response: any) => response.json())
    .then((data: any) => data)
}

export default getProductsByProps;