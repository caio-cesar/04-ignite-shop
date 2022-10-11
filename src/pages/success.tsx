import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";
import { RoundedProduct } from "../components/rounded-product";
import { stripe } from "../lib/stripe";
import { ImageContainer, ItemsContainer, SuccessContainer } from "../styles/pages/success.styles";

interface SuccessProps {
    customerName: string;
    product: {
        name: string;
        imageUrl: string;
    }
}

export default function Success() {
    return (
        <>
            <Head>
                <title>Compra efetuada | Ignite Shop</title>
                <meta name="robots" content="noindex" />
            </Head>
            <SuccessContainer>
                <ItemsContainer>
                    <li><RoundedProduct /></li>
                    <li><RoundedProduct /></li>
                    <li><RoundedProduct /></li>
                </ItemsContainer>
                
                <h1>Compra efetuada!</h1>
                <p>Uhull, Caio César, suas camisetas já estão a caminho.</p>
            
                <Link href="/">
                    Voltar ao catálogo
                </Link>
            </SuccessContainer>
        </>
    )
}
/* 
export const getServerSideProps: GetServerSideProps = async ({ query, params }) => {


    if (!query.session_id) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    const sessionId = String(query.session_id);

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
        expand: ['line_items', 'line_items.data.price.product']
    });

    const customerName = session.customer_details.name;
    const product = session.line_items.data[0].price.product as Stripe.Product

    return {
        props: {
            customerName,
            product: {
                name: product.name,
                imageUrl: product.images[0]
            }
        }
    }
} */