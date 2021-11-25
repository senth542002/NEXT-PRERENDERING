import {useRouter} from 'next/router'

function Product({ product }) {

    const router = useRouter()

    if(router.isFallback) {
        return <div>Loading...</div>
    }

    return (
        <> 
        <h1>product Details</h1>
        <h2>{product.id} - {product.title} - {product.price}</h2>
        <p>{product.description}</p>
        <hr/>
        </>
    )
}

export default Product

export async function getStaticProps(context) {
    const { params } = context
    console.log(params.productId)
    console.log(`Generating / Regenerating Product for ${params.productId}`)
    const response = await fetch(`http://localhost:4000/products/${params.productId}`)
    const data = await response.json()
    console.log(data)
    return {
        props: {
            product: data,
        },
        revalidate: 10,
    }
}

export async function getStaticPaths() {

    return {
        paths: [{ params: {productId: '1'}}],
        fallback: true
    }
}