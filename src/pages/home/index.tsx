import type { NextPage } from 'next'
import Head from 'next/head'
import illustration from '../../assets/images/illustration.svg'
import Image from 'next/image'
import logo from '../../assets/images/logo.svg'
import logoGoogle from '../../assets/images/google-icon.svg'
import { 
    Aside, 
    Button, 
    Container, 
    Forms, 
    IconGoogle, 
    Section, 
    Separator,
    Wrapper, 
    Illustration 
} from './styles'
import StyledButton from '../../components/Button'

const Home: NextPage = () => {
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
                        <Button>
                            <IconGoogle>
                                <Image src={logoGoogle} alt='logo-google'/> 
                            </IconGoogle>
                            Crie sua sala com o Google
                        </Button>
                        <Separator>
                            ou entre em uma sala
                        </Separator>

                        <Forms>
                            <input 
                                type='text'
                                placeholder='Digite o código da sala'
                            />
                            <StyledButton type='submit'>
                                Entrar na sala
                            </StyledButton>
                        </Forms>
                    </Container>
                </Section>

            </Wrapper>
        </>
    )
}

export default Home
