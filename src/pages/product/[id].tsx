import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";

import Stripe from "stripe";
import { stripe } from "../../lib/stripe";
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product.styles";
import { useState } from "react";
import Head from "next/head";
import { NextPageWithLayout } from "../_app";
import { getDefaultLayout } from "../../components/layout/default-layout";
import { useDispatch } from "react-redux";
import { addItemToCart } from '../../redux/slices/cartSlice';
import { ProductModel } from "../../model/product.model";

interface ProductProps {
    product: {
        id: string;
        name: string;
        imageUrl: string;
        price: string;
        description: string;
        defaultPriceId: string;
        priceAsNumber: number;
        priceId: string;
    }
}

const Product: NextPageWithLayout = ({ product }: ProductProps) => {
    const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false);

    const productModel: ProductModel = {
        ...product
    }

    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addItemToCart(productModel));
    }

    return (
        <>
            <Head>
                <title>{product.name} | Ignite Shop</title>
            </Head>
            <ProductContainer>
                <ImageContainer>
                    <Image src={product.imageUrl} width={520} height={480} alt="" />
                </ImageContainer>

                <ProductDetails>
                    <h1>{product.name}</h1>
                    <span>{product.price}</span>

                    <p>{product.description}</p>

                    <button 
                        disabled={isCreatingCheckoutSession} 
                        onClick={handleAddToCart}>Colocar na sacola
                    </button>
                </ProductDetails>
            </ProductContainer>
        </>
    )
}

Product.getLayout = getDefaultLayout;

export default Product;

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            { params: { id: 'prod_MWDqCwQ5uS4vNv' } }
        ],
        fallback: true
    }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
    const productId = params.id;

    const product = await stripe.products.retrieve(productId, {
        expand: ['default_price']
    });

    const price = product.default_price as Stripe.Price

    return {
        props: {
            product: {
                id: product.id,
                name: product.name,
                imageUrl: product.images[0],
                price: new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(price.unit_amount / 100),
                description: product.description,
                defaultPriceId: price.id,
                priceAsNumber: price.unit_amount / 100,
                priceId: price.id
            }
        },
        revalidate: 60 * 60 * 1
    }
}