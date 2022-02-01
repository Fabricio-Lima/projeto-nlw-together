import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components';
import '../styles/globalStyles.scss'
import theme from '../theme'
import AuthContext from '../context/auth.context';
import { ToastContainer } from 'react-toastify'

function MyApp({ Component, pageProps }: AppProps) {

    return (
        <>
            <ThemeProvider theme={theme}>
                <AuthContext >
                    <Component {...pageProps} />
                    <ToastContainer
                        position="top-right"
                        autoClose={3000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                </AuthContext>
            </ThemeProvider>
        </>
    )
}

export default MyApp
