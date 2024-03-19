export default function setCatalogState(productListState: any, currentPage: number) {
    if (JSON.stringify(productListState) === '{"has":false,"categories":[],"cost":{"from":0,"to":1200000},"brands":[],"frame_materials":[],"sortBy":""}') {
        return new Promise((resolve, reject) => {
            try {
                resolve(fetch(`http://localhost:3001/api/products/pages/:${currentPage}`))
            } catch (error) {
                reject(console.error(error));
            }
        })
        .then((response: any) => response.json())
        .then((data: any) => {
            return data;
        });
    } else {
        return new Promise((resolve, reject) => {
            try {
                resolve(fetch(`http://localhost:3001/api/getproducts/filters?filters=${JSON.stringify(productListState)}&currentPage=${currentPage}`));
            } catch (error) {
                reject(console.error(error));
            };
        })
        .then((response: any) => response.json())
        .then((data: any) => {
           
            return data;
        })
    }
}