import styles from './layout.module.css';
import Header from './header';

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <main className='mt-[100px]'>{children}</main>
        </>
    );
}