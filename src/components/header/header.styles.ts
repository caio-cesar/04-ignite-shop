import { styled } from "../../styles";

export const HeaderContainer = styled('header', {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '2rem 0',
    width: '100%',
    maxWidth: 1180,
    margin: '0 auto'
})

export const ShoppingCartButton = styled('button', {
    display: 'grid',
    placeItems: 'center',
    borderRadius: '6px',
    backgroundColor: '$gray800',
    padding: '0.75rem',
    width: '3rem',
    height: '3rem',
    outline: 'none',
    border: 'none',
    cursor: 'pointer',
    position: 'relative',

    svg: {
        color: '$gray200'
    }
})

export const CartItemCounter = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$green500',
    borderRadius: '1000px',
    color: '$white',
    fontWeight: 'bold',
    fontSize: '0.875rem',
    position: 'absolute',
    right: '-20%',
    top: '-20%',
    width: '24px',
    height: '24px',
    border: '4px solid $gray900',
    boxSizing: 'content-box'
})
