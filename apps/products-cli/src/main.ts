import { createProductsDataClient, ProductsDataClient } from '@my-products/products-data-client'

main()

async function main() {
    const productsDataClient: ProductsDataClient = createProductsDataClient()
    const id: string = getProvidedId()
    if (id != null) {
        const product = await productsDataClient.getProductById(id)
        if (!product) {
            throw new Error(`Product with id ${id} not found`)
        }
        console.log(JSON.stringify(product, null, 2))
    } else {
        const products = await productsDataClient.getProducts()
        console.log(JSON.stringify(products, null, 2))
    }
}

function getProvidedId() {
    return process.argv[2]
}
