import { styled } from "..";

export const HomeContainer = styled('main', {
    display: 'flex',
    width: '100%',
    marginLeft: 'auto',
    maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
    minHeight: 656
});

export const Product = styled('a', {
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
    padding: '0.25rem',
    cursor: 'pointer',
    position: 'relative',

    alignSelf: 'stretch',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    width: '43.5rem',

    img: {
        objectFit: 'cover'
    },

    footer: {
        position: 'absolute',
        bottom: '0.25rem',
        left: '0.25rem',
        right: '0.25rem',
        padding: '1.5rem',

        borderRadius: 6,

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',

        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        transform: 'translateY(110%)',
        opacity: 0,
        transition: 'all 0.2s ease-in-out',

        strong: {
            fontSize: '$md',
            color: '$gray100'
        },

        span: {
            fontSize: '$lg',
            fontWeight: 'bold',
            color: '$green300'
        }
    },

    '&:hover': {
        footer: {
            transform: 'translateY(0%)',
            opacity: 1
        }
    }
})

export const ProductInformation = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.2rem'
})

export const AddToCartButton = styled('button', {
    outline: 'none',
    border: 'none',
    backgroundColor: '$green500',
    borderRadius: '6px',
    cursor: 'pointer',
    padding: '0.50rem',

    svg: {
        color: '$white'
    }
})
