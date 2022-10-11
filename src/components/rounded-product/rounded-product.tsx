import { RoundedProductContainer } from "./rounded-product.styles";
import Image from 'next/image';

interface RoundedProductProps {
    imageUrl: string;
}

export function RoundedProduct({ imageUrl }: RoundedProductProps) {
    return (
        <RoundedProductContainer>
            <Image src={imageUrl} width={200} height={200} alt="" />
        </RoundedProductContainer>
    )
}