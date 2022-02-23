import { useState } from "react";

function Cart() {
  const [empty, setEmpty] = useState(false);

  //   if (empty === false) {
  //     return <p>Your cart is empty</p>;
  //   }

  return (
    <div className="cart">
      <h1>Cart</h1>
      {empty === false ? "Shopping cart is empty" : null}
      <br />
      <br />
    </div>
  );
}

export default Cart;
