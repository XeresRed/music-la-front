import React from 'react';
import Head from 'next/head'
import Footer from '../components/footer';
import Header from '../components/header';
import ValidationAlert from '../components/validationAlert';

export default function Layout({ children, title = "", description='' }: React.PropsWithChildren<{title?: string, description?: string}>) {

    return (
        <div className="main-layout">
            <ValidationAlert />
            <Head>
                <title>{`Music LA - ${title}`}</title>
                <meta name="description" content={description} />
            </Head>
            <Header />
            {children}
            <Footer />
        </div>
    )
}