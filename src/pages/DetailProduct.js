import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const DetailProduct = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`https://api.escuelajs.co/api/v1/products/${id}`).then(res => res.json()).then(item => setData(item))
    }, [])



    return (
        
        <div className="container">
            {data && <div className="row">
                <div className="col-lg-6">
                    <img src={data.images[0]} className="img-fluid" />
                </div>
                <div className="col-lg-6">
                    <h1>
                        {data.title}
                    </h1>
                    <p>
                        {data.description}
                    </p>


                </div>
            </div>}
        </div>




    )
}


export default DetailProduct;