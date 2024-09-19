import { useState, useEffect } from "react";
import axios from "axios";
import "./Product.css";
import ProductCard from "./ProductCard";
import InfiniteScroll from 'react-infinite-scroll-component'; 

function Products() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const DisplayData = async () => {
    setLoading(true);
    try {
      let res = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&limit=10`);
      // console.log(res.data);
      const newItems = res.data;
      // console.log(newItems);
      if (newItems.length === 0) {
        setHasMore(false);
      }
      setData((prevData) => [...prevData, ...newItems]);
      setLoading(false);
    } catch (error) {
      console.log(`Error while fetching data ${error}`);
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    DisplayData();
  }, [page]);

  if (loading) {
    console.log("loading...");
  }

  if (error) {
    console.log("Error while fetching data");
  }

  return (
    <>
      <h1>Products Page</h1>
      
        <InfiniteScroll
          dataLength={data.length} //This is important field to render the next data
          next={()=>setPage((prevPage)=> prevPage + 1)}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }>
            <div className="products">
                {data.map((ele,index) => (
                    <ProductCard key={index} data={ele} />
                ))}
            </div>
        </InfiniteScroll>
      
    </>
  );
}

export default Products;
