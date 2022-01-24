import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import { FormEvent, useState } from 'react'
import illustration from '../../../assets/images/illustration.svg'
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
import { database } from '../../../services/firebase'
import { useAuth } from '../../../context/auth.context'

const NewRoom: NextPage = () => {

    const router = useRouter()

    const { user } = useAuth()

    const [ newRoom, setNewRoom ] = useState('')

    const handleCreateRoom = async (event: FormEvent) => {
        event.preventDefault()

        if(newRoom.trim() === ''){
            return
        }

        const roomRef = database.ref('rooms')

        const firebaseRoom = await roomRef.push({
            title: newRoom,
            authorId: user?.id,
        })

        router.push(`/room/${encodeURIComponent(firebaseRoom.key || '')}`)
    }

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

                        <Forms onSubmit={handleCreateRoom}>
                            <input 
                                type='text'
                                placeholder='Nome da sala'
                                value={newRoom}
                                onChange={event => setNewRoom(event.target.value)}
                            />
                            <Button type='submit' className='purple'>
                                Criar sala
                            </Button>
                            <p>
                                Quer entrar em uma sala existente? <Link href='/'>Clique Aqui</Link>
                            </p>
                        </Forms>
                    </Container>
                </Section>

            </Wrapper>
        </>
    )
}

export default NewRoom
