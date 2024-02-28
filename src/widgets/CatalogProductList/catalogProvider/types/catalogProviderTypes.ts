type provider = {
    pagesCount: number,
    currentPage: number,
    currentProducts: {
        has: boolean,
        categories: string[],
        cost: {
            from: number,
            to: number
        },
        brands: string[],
        frame_materials: string[],
        sortBy: string
    }
}

export default provider;