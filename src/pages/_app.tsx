import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components';
import '../styles/globalStyles.scss'
import theme from '../theme'
import AuthContext from '../context/auth.context';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <ThemeProvider theme={theme}>
                <AuthContext>
                    <Component {...pageProps} />
                </AuthContext>
            </ThemeProvider>
        </>
    )
}

export default MyApp
