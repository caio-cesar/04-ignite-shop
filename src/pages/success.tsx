import { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";
import Stripe from "stripe";
import { RoundedProduct } from "../components/rounded-product";
import { stripe } from "../lib/stripe";
import { ItemsContainer, SuccessContainer } from "../styles/pages/success.styles";
import { clearCartItems, toggleCartDrawer } from '../redux/slices/cartSlice';
import { useDispatch } from "react-redux";
import { useEffect } from "react";

interface SuccessProps {
    customerName: string;
    products: [{
        name: string;
        imageUrl: string;  
    }]
}

export default function Success({ customerName, products }: SuccessProps) {
    
    const dispatch = useDispatch();

    const handleClearCartItems = () => {
        dispatch(clearCartItems());
    }

    const handleToggleDrawer = () => {
        dispatch(toggleCartDrawer());
    }

    useEffect(() => {
        handleClearCartItems();
    }, [])

    
    useEffect(() => {
        handleToggleDrawer();
    }, [])

    return (
        <>
            <Head>
                <title>Compra efetuada | Ignite Shop</title>
                <meta name="robots" content="noindex" />
            </Head>
            <SuccessContainer>
                <ItemsContainer>
                    {
                        products.map(product => <li key={product.name}><RoundedProduct imageUrl={product.imageUrl}/></li>)
                    }
                </ItemsContainer>
                
                <h1>Compra efetuada!</h1>
                <p>Uhull, {customerName}, suas camisetas já estão a caminho.</p>
            
                <Link href="/">
                    Voltar ao catálogo
                </Link>
            </SuccessContainer>
        </>
    )
}

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
    
    const products = session.line_items.data.map(data => {
        let product = data.price.product as Stripe.Product;
        return {
        name: product.name,
        imageUrl: product.images[0]
        }
    });

    return {
        props: {
            customerName,
            products: products
        }
    }
}