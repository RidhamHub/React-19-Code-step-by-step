import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const AddtoCart = () => {
  const cartSelector = useSelector((state) => state.cart.items);
  console.log(cartSelector);
  return (
    <header className="main-header">
      <div className="cart-box">
        <Link to='/cart'>   
        <img
          src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
          alt="cart"
        />
          <span className="cart-count">{cartSelector.length ? cartSelector.length : 0}</span>
          
        </Link>
      </div>
    </header>
  );
};

export default AddtoCart;
