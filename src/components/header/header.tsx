import Image from "next/image";
import { Handbag, X } from "phosphor-react";
import Link from 'next/link';

import logoImg from '../../assets/logo.svg';
import { 
    HeaderContainer, 
    ShoppingCartButton,
    CartItemCounter
} from "./header.styles";

import { CartDrawer } from "../cart-drawer";
import { toggleCartDrawer } from "../../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export function Header() {

    const dispatch = useDispatch()
    
    const toggleDrawer = () => {
        dispatch(toggleCartDrawer());
    }
    
    const totalItems = useSelector((state: RootState) => state.cart.totalItems);

    return (
        <>
            <HeaderContainer>
                <Link href="/">
                    <a> <Image src={logoImg} alt="" /> </a>
                </Link>
                
                <ShoppingCartButton onClick={toggleDrawer}>
                    <Handbag size={24}/>
                    
                    {totalItems > 0 && (
                    <CartItemCounter>
                        <span>{totalItems}</span>
                    </CartItemCounter>)
                    }
                </ShoppingCartButton>
            </HeaderContainer>

            <CartDrawer />
        </>
    )
}