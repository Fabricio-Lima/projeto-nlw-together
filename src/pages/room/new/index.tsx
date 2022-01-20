import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import illustration from '../../../assets/images/illustration.svg'
import Image from 'next/image'
import logo from '../../../assets/images/logo.svg'

import { 
    Aside, 
    Container, 
    Forms, 
    Section, 
    Wrapper, 
    Illustration
} from './styles'

import Button from '../../../components/Button'

const NewRoom: NextPage = () => {

    const router = useRouter()

    return (
        <>
            <Head>
                <title>New Room</title>
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

                        <h2>Crie uma nova sala</h2>

                        <Forms>
                            <input 
                                type='text'
                                placeholder='Nome da sala'
                            />
                            <Button type='submit' className='purple'>
                                Criar sala
                            </Button>
                            <p>
                                Quer entrar em uma sala existente?
                                <Link href='/'> Clique Aqui </Link>
                            </p>
                        </Forms>
                    </Container>
                </Section>

            </Wrapper>
        </>
    )
}

export default NewRoom
