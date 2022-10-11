import { ReactElement } from "react";
import { Container } from "../../styles/pages/app.styles";
import { Header } from "../header";

export function DefaultLayout({children}) {
    return (
        <Container>
            <Header/>
            {children}
        </Container>
    )
}

export function getDefaultLayout(page: ReactElement) {
    return (
        <DefaultLayout>
            {page}
        </DefaultLayout>
    )
}