import { RoundedProductContainer } from "./rounded-product.styles";
import Image from 'next/image';

import camiseta1 from '../../assets/camisetas/camiseta1.png';

export function RoundedProduct() {
    return (
        <RoundedProductContainer>
            <Image src={camiseta1} width={200} height={200} alt="" />
        </RoundedProductContainer>
    )
}