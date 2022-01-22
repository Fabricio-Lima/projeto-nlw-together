import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { auth, firebase } from '../../services/firebase'
import illustration from '../../assets/images/illustration.svg'
import Image from 'next/image'
import logo from '../../assets/images/logo.svg'
import logoGoogle from '../../assets/images/google-icon.svg'
import { 
    Aside, 
    Container, 
    Forms, 
    IconGoogle, 
    Section, 
    Separator,
    Wrapper, 
    Illustration, 
    ButtonGoogle
} from './styles'
import Button from '../../components/Button'
import { useAuth } from '../../context/auth.context'

const Home: NextPage = () => {

    const router = useRouter()
    const { user, signInWithGoogle } = useAuth()

    const handleCreateRoom = async () => {
        if(!user) await signInWithGoogle()

        router.push('/room/new')
    }

    return (
        <>
            <Head>
                <title>Login</title>
            </Head>

            <Wrapper>
                <Aside>
                    <Illustration>
                        <Image src={illustration} alt='ilustracao'/>
                    </Illustration>
                    <strong>
                        Crie salas de Q&amp;A ao-vivo
                    </strong>
                    <p>
                        Tire as dúvidas da sua audiência em tempo real
                    </p>
                </Aside>

                <Section>
                    <Container>
                        <Image src={logo} alt='letmeask' />
                        <ButtonGoogle onClick={handleCreateRoom}>
                            <IconGoogle>
                                <Image src={logoGoogle} alt='logo-google'/> 
                            </IconGoogle>
                            Crie sua sala com o Google
                        </ButtonGoogle>
                        <Separator>
                            ou entre em uma sala
                        </Separator>

                        <Forms>
                            <input 
                                type='text'
                                placeholder='Digite o código da sala'
                            />
                            <Button type='submit' className='purple'>
                                Entrar na sala
                            </Button>
                        </Forms>
                    </Container>
                </Section>

            </Wrapper>
        </>
    )
}

export default Home
