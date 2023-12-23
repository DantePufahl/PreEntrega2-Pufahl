import "./CartWidget.css";


const CartWidget = () => {
  return (
    <div className="icon__div">
      <div className="img__icon">
        <div className="cart__icon">
          <img src="/public/svg/cart.svg" alt="" />
        </div>
        <strong> 7 </strong>
      </div>
    </div>
  );
};

export default CartWidget;
