import type { NextPage } from 'next'
import Head from 'next/head'
import illustration from '../../assets/images/illustration.svg'
import Image from 'next/image'
import logo from '../../assets/images/logo.svg'
import logoGoogle from '../../assets/images/google-icon.svg'
import { Wrapper } from './styles'

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Create Next App</title>
            </Head>

            <Wrapper>
                <aside>
                    <Image src={illustration} alt='ilustracao' />
                    <strong>
                        Crie salas de Q&amp;A ao-vivo
                    </strong>
                    <p>
                        Tire as dúvidas da sua audiência em tempo real
                    </p>
                </aside>
                <main>
                    <div>
                        <Image src={logo} alt='letmeask' />
                        <button>
                            <Image src={logoGoogle} alt='logo-google'/> 
                            Crie sua sala com o Google
                        </button>
                        <div>
                            ou entre em uma sala
                        </div>
                        <form>
                            <input 
                                type='text'
                                placeholder='Digite o código da sala'
                            />
                            <button type='submit'>
                                Entrar na sala
                            </button>
                        </form>
                    </div>
                </main>
            </Wrapper>
        </>
    )
}

export default Home
