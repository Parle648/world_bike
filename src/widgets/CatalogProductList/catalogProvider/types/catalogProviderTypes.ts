type provider = {
    pagesCount: number,
    currentPage: number,
    currentFilters: {
        has: boolean,
        categories: string[],
        cost: {
            from: number,
            to: number
        },
        brands: string[],
        frame_materials: string[],
        sortBy: string
    },
    currentProducts: [],
}

export default provider;