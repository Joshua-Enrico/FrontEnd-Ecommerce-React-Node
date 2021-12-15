import styled from "styled-components"
import { popularProdcts } from "../data"
import Product from "./Product"
const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Products = () => {
    return (
        <Container>
            {popularProdcts.map(product => (
                <Product
                item={product}
                key={product.id}
                />
            ))}
        </Container>
    )
}

export default Products
