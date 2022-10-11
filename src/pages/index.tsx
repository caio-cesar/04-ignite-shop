import { AddToCartButton, HomeContainer, Product, ProductInformation } from "../styles/pages/home.styles";
import { useKeenSlider } from 'keen-slider/react';
import Link from "next/link";
import Head from 'next/head'
import Image from "next/image";

import 'keen-slider/keen-slider.min.css';
import { stripe } from "../lib/stripe";
import { GetStaticProps } from "next";
import Stripe from "stripe";
import camiseta1 from '../assets/camisetas/camiseta1.png';
import { Handbag } from "phosphor-react";
import { useDispatch } from "react-redux";
import { addItemToCart, CartItem } from '../redux/slices/cartSlice';
import { ProductModel } from "../model/product.model";

interface ProductProps {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  priceAsNumber: number;
  priceId: string;
}

interface HomeProps {
  products: ProductProps[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  })

  const dispatch = useDispatch();

  const addProductToCart = (product: ProductProps) => {
    const productItem: ProductModel = {
      ...product
    }
    dispatch(addItemToCart(productItem))
  }

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>
      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map(product => (
    
            <Product className="keen-slider__slide" key={product.id}>
              <Link href={`/product/${product.id}`} prefetch={false}>
                <Image src={product.imageUrl} width={520} height={480} alt="" />
              </Link>
              <footer>
                <ProductInformation>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </ProductInformation>
                <AddToCartButton onClick={() => addProductToCart(product)}>
                  <Handbag size={26}/>
                </AddToCartButton>
              </footer>
            </Product>
        ))}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  });

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(price.unit_amount / 100),
      priceAsNumber: price.unit_amount / 100,
      priceId: price.id
    }
  })

  console.log(response.data);

  return {
    props: {
      products
    }
  }
}
