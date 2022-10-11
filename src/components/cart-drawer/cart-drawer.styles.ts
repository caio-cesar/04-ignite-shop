import { styled } from "../../styles";


export const ShoppingCartDrawerContainer = styled('div', {
    height: '100%',
    minWidth: '30rem',
    backgroundColor: '$gray800',
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
})

export const ShoppingCartDrawerHeader = styled('header', {
    display: 'flex',
    justifyContent: 'flex-end'
})

export const ShoppingCartDrawerCloseButton = styled('button', {
    outline: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    border: 'none',

    svg: {
        color: '$gray200'
    }
})

export const ShoppingCartNenhumItemAdicionado = styled('div', {
    marginTop: '-5rem'
})

export const ShoppingCartDrawerBody = styled('main', {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '1rem',
    gap: '2rem',
    padding:'1.5rem',
    
    h1: {
        fontSize: '$lg',
        color: '$gray100',
        lineHeight: '$2xl'
    }
})

export const ShoppingCartDrawerFooter = styled('footer', {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto 0',
    padding: '1.5rem'
})

export const ShoppingCartSummary = styled('div', {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    
    '&>:nth-child(odd)': {
        justifySelf: 'start'
    },

    '&>:nth-child(even)': {
        justifySelf: 'end'
    }
})

export const SpanQuantidade = styled('span', {
    fontSize: '1rem',
    color: '$gray100',
    lineHeight: '1.6rem'
})

export const SpanTotalItens = styled('span', {
    fontSize: '$md',
    color: '$gray300',
    lineHeight: '1.8rem'
})

export const SpanTotal = styled('span', {
    fontSize: '$md',
    color: '$gray100',
    fontWeight: 700,
    lineHeight: '1.8rem'
})

export const SpanValorTotal = styled('span', {
    fontSize: '$xl',
    color: '$gray100',
    fontWeight: 700,
    lineHeight: '2.1rem'
})

export const ButtonFinalizarCompra = styled('button', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    outline: 'none',
    border: 'none',
    backgroundColor: '$green500',
    color: '$white',
    fontWeight: 700,
    fontSize: '$md',
    lineHeight: '1.8rem',
    borderRadius: 8,
    cursor: 'pointer',
    paddingTop: '1.25rem',
    paddingBottom: '1.25rem',
    marginTop: '2rem',

    '&:hover': {
        backgroundColor: '$green300'
    }
})