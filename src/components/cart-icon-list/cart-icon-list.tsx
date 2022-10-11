import { useSelector } from "react-redux";
import { CartItem } from "../../redux/slices/cartSlice";
import { RootState } from "../../redux/store";
import { CartIcon } from "../cart-icon/cart-icon";
import { CartIconListContainer } from "./cart-icon-list.styles";

export function CartIconList() {
    const cartitems: CartItem[] = useSelector((state: RootState) => state.cart.cartItems);
    
    return (
        <CartIconListContainer>
            {
                cartitems.map(item => {
                    return (
                        <li key={item?.item?.id} >
                            <CartIcon cartItem={item}/>
                        </li>
                    ) }
                )
            }
        </CartIconListContainer>
    )
}