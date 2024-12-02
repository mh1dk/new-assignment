import { Link } from "react-router-dom";

const Product = ({ item }) => {
    return (
        <div className="col-lg-3">
            <div class="card">
                <Link to={`/products/${item.id}`}>
                <img src={item.images[0]} class="card-img-top" alt={item.title} />
                </Link>
                <div class="card-body">
                    <h5 class="card-title">{item.title}</h5>
                    <p class="card-text">{item.description}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>

    )


}



export default Product;