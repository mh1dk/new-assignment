const Product = ({ item }) => {
    return (
        <div className="col-lg-3">
            <div class="card">
                <img src={item.images[0]} class="card-img-top" alt={item.title} />
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