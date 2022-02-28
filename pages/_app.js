import { ThemeProvider } from 'next-themes';
import '../styles/global.css';

export default function App({ Component, pageProps }) {
    return (
        <ThemeProvider defaultTheme="system" attribute="class">
            <Component {...pageProps} />
        </ThemeProvider>
    )
}