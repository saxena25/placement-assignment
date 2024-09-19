import "./ProductCard.css";

function ProductCard({data}) {
    return ( 
        <>
            <div className="product">
                <p>ID: {data.id}</p>
                <p><b>Title: </b>{data.title}</p>
                <p><b>Body: </b>{data.body}</p>
            </div>
        </>
     );
}

export default ProductCard;