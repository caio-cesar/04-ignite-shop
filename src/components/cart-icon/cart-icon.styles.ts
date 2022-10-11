import { styled } from "../../styles";


export const CartIconContainer = styled('div', {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1rem'
})

export const ImageContainer = styled('div', {
    width: '6.371rem',
    height: '5.813rem',
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    img: {
        objectFit: 'cover'
    } 
})

export const CartIconInfoContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.2rem'
})

export const CartIconProductName = styled('span', {
    color: '$gray300',
    fontSize: '$md',
    lineHeight: '1.8rem'
})

export const CartIconPrice = styled('span', {
    color: '$gray100',
    fontSize: '$md',
    lineHeight: '1.8rem',
    fontWeight: 700
})

export const CartIconRemoveLink = styled('a', {
    color: '$green500',
    fontSize: '1rem',
    lineHeight: '1.6rem',
    textDecoration: 'none',
    fontWeight: 700,
    cursor: 'pointer'
})