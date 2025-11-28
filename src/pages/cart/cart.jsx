import react, {useContext} from "react";
import {PRODUCTS} from "../../data/products";
import {ShopContext} from "../../context/shopContext";
import Product from "../shop/product";


const Cart = () => {
    const {cartItems , resetCart}= useContext(ShopContext)
    return (
        <react.Fragment>
            <h1>Your cart items</h1>
            <div className ="row">
                {PRODUCTS.map((p)=>{
                    if (cartItems?.some((i)=> i.id === p.id && i.count > 0))
                        return <Product data={p}></Product>
                })}
            </div>
            <button className ="btn btn-warning m-3" onClick={resetCart}>reset</button>
        </react.Fragment>
    );
}
export default Cart;