import "./CartWidget.css";


const CartWidget = () => {
  return (
    <div className="icon__div">
      <div className="img__icon">
        <div className="cart__icon">
          <img src="../../svg/cart.svg" alt="cart" />
        </div>
        <strong> 7 </strong>
      </div>
    </div>
  );
};

export default CartWidget;
