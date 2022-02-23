import styles from './layout.module.css';
import Header from './header';
import Head from 'next/head';

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <meta name="description" content="I'm a web developer based in Espoo. I'm passionate about building web applications and solving problems." />
                <title>Observer - Liang Sun's Protfolio</title>
            </Head>
            <Header />
            <main className='mt-[100px]'>{children}</main>
        </>
    );
}