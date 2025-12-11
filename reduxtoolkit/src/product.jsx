import {useDispatch, useSelector} from "react-redux"
import { addItem, removeItem } from "./redux/slice";
import { useEffect } from "react";
import { fetchProducts } from "./redux/productSlice";

const Product = () => {

  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProducts());
  }, [])
  
  const productSelector = useSelector((state) => state.products.items)
  console.log(productSelector);
  
  const cartSelector = useSelector((state) => state.cart.items);
  
  return (
    <div className="grid">
      {/* <div className="product-image">
        <img src="  " alt="Product" />
      </div>

      <div className="product-info">
        <h1>Wireless Headphones</h1>
        <p className="price">$129.99</p>

        <p className="description">
          Experience high-quality sound with these wireless headphones.
          Featuring noise cancellation, long-lasting battery life, and a sleek
          modern design for everyday use.
        </p>

        <button onClick={() => { dispatch(addItem(1)) }} className="btn">Add to Cart</button>
        <button  onClick={() => { dispatch(removeItem(1)) }} className="btn">Remove from Cart</button>
      </div> */}

      {productSelector.length &&
        productSelector.map((item) => (
          <div key={item.id} className="card">
            <img src={item.thumbnail} alt="" />
            <div className="content">
              <div className="title"> {item.title}</div>
              <div className="brand"> {item.brand}</div>
              <div className="price"> {item.price}</div>
              <div className="rating"> {item.rating} </div>
              {
                cartSelector.find(cartItem => cartItem.id === item.id) ?
                  <button onClick={() => { dispatch(removeItem(item)) }}  className=" btn-disabled">Remove from cart</button>
                  : 
                  <button onClick={() => { dispatch(addItem(item)) }} className="btn">Add to Cart</button>
                  
              
              }
              
              
            </div>
          </div>
        ))}
    </div>
  );
};

export default Product;
