import './index.css';
import axios from "axios";
import Product from "./Product";
const api = 'https://fakestoreapi.com/products';

const {data: products} = await axios.get(api) //we could use just products, but we use here "data" to get not the whole information from API; but exactly "data" part. We just name it as "products". We can name it anyhow. That name is used next in console.log

const ProductsList = () => {
    console.log(products)
    return (
        <div className="container">
            <div className="pt-4 d-flex justify-content-between align-items-center">
            <h1>Check our productslist</h1>
            <a href="/"><button className="btn btn-danger btn-back">BACK</button></a>
        </div>
            <div className="row">
                {products.map((product) => (
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex py-4" key={product?.id}>
                        <Product {...product}/>
                    </div>
                ))}
            </div>
        </div>
    )
    
}

export default ProductsList;