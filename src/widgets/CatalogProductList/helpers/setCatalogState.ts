export default function setCatalogState(productListState: any, setproductListState: any, currentPage: number) {
    if (JSON.stringify(productListState?.currentFilters) === '{"has":false,"categories":[],"cost":{"from":0,"to":1200000},"brands":[],"frame_materials":[],"sortBy":""}') {
        return new Promise((resolve, reject) => {
            try {
                resolve(fetch(`https://wb-backend-a99n.onrender.com/api/products/pages/:${currentPage}`))
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
                    ["currentPage"]: currentPage,
                })
            });
        });
    } else {
        return new Promise((resolve, reject) => {
            try {
                resolve(fetch(`https://wb-backend-a99n.onrender.com/api/getproducts/filters?filters=${JSON.stringify(productListState.currentFilters)}&currentPage=${currentPage}`));
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
                    ["currentPage"]: currentPage,
                })
            });
        })
    }
}