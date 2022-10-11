
import { useDispatch } from 'react-redux';

import { 
    CartIconContainer, 
    ImageContainer, 
    CartIconInfoContainer, 
    CartIconProductName,
    CartIconPrice,
    CartIconRemoveLink
} from "./cart-icon.styles";

import Image from "next/image";
import { CartItem } from '../../redux/slices/cartSlice';
import { formatPrice } from '../../util/priceFormatter';
import { removeItemFromCart } from '../../redux/slices/cartSlice';

interface CartIconProps {
    cartItem: CartItem;
}

export function CartIcon({ cartItem }: CartIconProps) {
    const dispatch = useDispatch();

    const removeItem = () => {
        dispatch(removeItemFromCart(cartItem.item.id));
    }

    return (
        <CartIconContainer>
            <ImageContainer>
                <Image src={cartItem.item?.imageUrl} width={80} height={80} alt=""/>
            </ImageContainer>
            <CartIconInfoContainer>
                <CartIconProductName>{cartItem.item?.name}</CartIconProductName>
                <CartIconPrice>
                    {cartItem.item?.price}
                    {' x '}
                    {cartItem.quantity}
                    { ` = ${formatPrice(cartItem.item?.priceAsNumber * cartItem.quantity)}`}
                </CartIconPrice>
                <CartIconRemoveLink onClick={removeItem}>
                    Remover
                </CartIconRemoveLink>
            </CartIconInfoContainer>
        </CartIconContainer>
    )
}