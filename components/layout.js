import styles from './layout.module.css';

export default function Layout({ children }) {
    return (
        <>
            <header>This is navbar</header>
            <main>{children}</main>
        </>
    );
}