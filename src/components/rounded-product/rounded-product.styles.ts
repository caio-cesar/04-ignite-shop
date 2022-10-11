import { styled } from "../../styles";

export const RoundedProductContainer = styled('div', {
    boxSizing: 'content-box',
    width: '140px',
    height: '140px',
    
    '& > span': {
        background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%) !important',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        borderRadius: '1000px !important',
    }
})