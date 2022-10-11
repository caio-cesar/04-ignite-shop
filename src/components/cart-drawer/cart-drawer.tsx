import axios from 'axios';
import { X } from 'phosphor-react';
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { CartItem, toggleCartDrawer } from "../../redux/slices/cartSlice";
import { CartIconList } from '../cart-icon-list';
import {
    ButtonFinalizarCompra,
    ShoppingCartDrawerBody,
    ShoppingCartDrawerCloseButton,
    ShoppingCartDrawerContainer,
    ShoppingCartDrawerFooter,
    ShoppingCartDrawerHeader,
    ShoppingCartSummary,
    SpanQuantidade,
    SpanTotal,
    SpanTotalItens,
    SpanValorTotal
} from "./cart-drawer.styles";
import { formatPrice } from '../../util/priceFormatter';

export function CartDrawer() {
    const cartDrawerOpen = useSelector((state: RootState) => state.cart.cartDrawerOpen);
    const cartItems: CartItem[] = useSelector((state: RootState) => state.cart.cartItems);

    const dispatch = useDispatch();

    const closeDrawer = () => {
        dispatch(toggleCartDrawer());
    }

    const totalItems = useSelector((state: RootState) => state.cart.totalItems);
    const total = useSelector((state: RootState) => state.cart.total);

    const handleFinalizarCompra = async () => {

        const response = await axios.post('/api/checkout', {
            cartItems
        });

        const { checkoutUrl } = response.data;

        window.location.href = checkoutUrl;
    }

    return (
        <Drawer open={cartDrawerOpen}
            direction='right'
            enableOverlay={true}
            onClose={closeDrawer}
            size={480}>

            <ShoppingCartDrawerContainer>
                <ShoppingCartDrawerHeader>
                    <ShoppingCartDrawerCloseButton onClick={closeDrawer}>
                        <X size={24} />
                    </ShoppingCartDrawerCloseButton>
                </ShoppingCartDrawerHeader>
                <ShoppingCartDrawerBody>
                    <h1>Sacola de compras</h1>
                    <CartIconList />
                </ShoppingCartDrawerBody>

                <ShoppingCartDrawerFooter>
                    <ShoppingCartSummary>
                        <SpanQuantidade>Quantidade</SpanQuantidade>
                        <SpanTotalItens>
                            {totalItems}
                            {' '}
                            {totalItems > 1 ? 'itens' : 'item'}
                        </SpanTotalItens>

                        <SpanTotal>Valor total</SpanTotal>
                        <SpanValorTotal>{formatPrice(total)}</SpanValorTotal>
                    </ShoppingCartSummary>

                    <ButtonFinalizarCompra onClick={handleFinalizarCompra}>
                        Finalizar Compra
                    </ButtonFinalizarCompra>
                </ShoppingCartDrawerFooter>
            </ShoppingCartDrawerContainer>
        </Drawer>
    )
}