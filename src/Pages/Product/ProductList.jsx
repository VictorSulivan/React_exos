import products from "../../Components/Product/Product"
import ProductComponents from "../../Components/Product/ProductComponent"

const ProductList = () => {
    return (
        <div>
            <ul>
                {products.map((product) => (
                    <div>
                    <ProductComponents
                        p={product.productName}
                    />
                    </div>
                ))}
            </ul>
      </div>
    )
}

export default ProductList