import { useDispatch, useSelector } from "react-redux";
import { clearAllItem, removeItem } from "./redux/slice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function CartList() {
  const cartSelector = useSelector((state) => state.cart.items);
  console.log(cartSelector);

  const dispatch = useDispatch();
  const [cartItem, setCartItem] = useState(cartSelector);
  const navigate = useNavigate();

  useEffect(() => {
    setCartItem(cartSelector);
  }, cartSelector);

  const handlePlaceOrder = () => {
    localStorage.clear();
    dispatch(clearAllItem());
    alert("order placed");
    navigate("/");
  };

  const manageQuntity = (id, q) => {
    // console.log(id , q)

    let quantity = parseInt(q) > 1 ? parseInt(q) : 1;
    const cartTempItemes = cartSelector.map((item) => {
      return item.id == id ? { ...item, quantity } : item;
    });

    setCartItem(cartTempItemes);
  };

  return (
    <div>
      <div className="cart-container">
        <div className="cart-header">
          <h2>cart Items</h2>
          <span>{cartItem.length} items</span>
        </div>

        {cartItem.length > 0
          ? cartItem.map((item) => (
              <>
                <div key={item.id} className="cart-item">
                  <div className="cart-info">
                    <img src={item.thumbnail} alt="" />
                    <div className="item-details">
                      <h4>{item.title}</h4>
                      <p>{item.brand}</p>
                    </div>
                  </div>
                  <div className="item-action">
                    <div>
                      <input
                                  type="number"
                                  value={item.quantity ? item.quantity : 1}
                        onChange={(e) => manageQuntity(item.id, e.target.value)}
                        placeholder="enter quentity"
                      />
                      <div>
                        <span className="price">
                          {(item.quantity ? item.quantity * item.price : item.price).toFixed(2)} 
                        </span>
                        <button
                          onClick={() => dispatch(removeItem(item))}
                          className="btn "
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))
          : null}
        <div>Total : {(cartItem.reduce((sum, item) =>item.quantity ?  sum + item.price * item.quantity : sum + item.price, 0)).toFixed(2)}</div>

        <button onClick={handlePlaceOrder} className="btn">
          Place Order
        </button>
      </div>
    </div>
  );
}

export default CartList;
