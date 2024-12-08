import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../contexts/CartContext";

const Product = ({ item }) => {
    const { setCart, cart } = useContext(CartContext);
    const handleAdd = () =>{
        const temp = cart.filter(product => product.id === item.id )
       if(temp.length === 0){
        setCart(prevState => [...prevState, item])
       } else{
        console.log('you have added this item before');
        
       }
    }
    return (
        <div className="col-lg-3">
            <div class="card">
                <Link to={`/products/${item.id}`}>
                <img src={item.images[0]} class="card-img-top" alt={item.title} />
                </Link>
                <div class="card-body">
                    <h5 class="card-title">{item.title}</h5>
                    <p class="card-text">{item.description}</p>
                    <a href="#" class="btn btn-primary" onClick={handleAdd}>Add to Cart</a>
                </div>
            </div>
        </div>

    )


}



export default Product;