export default function setCatalogState(productListState: any, setproductListState: any, currentPage: number) {
    if (JSON.stringify(productListState?.currentFilters) === '{"has":false,"categories":[],"cost":{"from":0,"to":1200000},"brands":[],"frame_materials":[],"sortBy":""}') {
        return new Promise((resolve, reject) => {
            try {
                resolve(fetch(`http://localhost:3002/api/products/pages/:${1}`))
            } catch (error) {
                reject(console.error(error));
            }
        })
        .then((response: any) => response.json())
        .then((data: any) => {
            setproductListState((prev: any) => {
                return ({
                    ...prev, 
                    ["currentProducts"]: data.products, 
                    ["pagesCount"]: data.pages,
                    ["currentPage"]: 1,
                })
            });
        });
    } else {
        return new Promise((resolve, reject) => {
            try {
                resolve(fetch(`http://localhost:3002/api/getproducts/filters?filters=${JSON.stringify(productListState.currentFilters)}&currentPage=${currentPage}`));
            } catch (error) {
                reject(console.error(error));
            };
        })
        .then((response: any) => response.json())
        .then((data: any) => {
            setproductListState((prev: any) => {
                return ({
                    ...prev, 
                    ["currentProducts"]: JSON.parse(data.data), 
                    ["pagesCount"]: data.pagesCount <= 0 ? 1 : data.pagesCount,
                    ["currentPage"]: 1,
                })
            });
            setproductListState((prev: any) => {
                console.log(prev);
                return prev
            });
        })
    }
}