import { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import { useRouter } from "next/router"
import { FormEvent, useEffect, useState } from "react"
import logo from '../../assets/images/logo.svg'
import Button from "../../components/Button"
import RoomCode from "../../components/RoomCode"
import { useAuth } from "../../context/auth.context"
import { database } from "../../services/firebase"
import 
{   Container, 
    Content, 
    FooterForm, 
    Forms, 
    Header, 
    UserInfo, 
    Wrapper 
} from "./styles"

type FirebaseQuestions = Record<string, {
    author: {
        name: string
        avatar: string
    },
    content: string
    isAnswered: boolean
    isHighlighted: boolean
}>

type Questions = {
    id: string    
    author: {
        name: string
        avatar: string
    },
    content: string
    isAnswered: boolean
    isHighlighted: boolean
}

const Room: NextPage = () => {
    const router = useRouter()
    const { user } = useAuth()

    const { id } = router.query

    const [ newQuestion, setNewQuestion ] = useState('')
    const [ questions, setQuestions ] = useState<Questions[]>([])
    const [ title, setTitle ] = useState('')

    useEffect(() => {
        const roomRef = database.ref(`rooms/${id}`)

        roomRef.on('value', room => {
            const databaseRoom = room.val()

            const firebaseQuestions: FirebaseQuestions = databaseRoom.questions ?? {}

            const parsedQuestions = Object.entries(firebaseQuestions).map(([key, value]) => {
                return {
                    id: key,
                    content: value.content,
                    author: value.author,
                    isHighlighted: value.isHighlighted,
                    isAnswered: value.isAnswered
                }
            })
            
            setTitle(databaseRoom.title)
            setQuestions(parsedQuestions)
        })
    }, [id])


    const handleSendQuestion = async (event: FormEvent) => {
        event.preventDefault()

        if(newQuestion.trim() === '') {
            return
        }

        if(!user) {
            throw new Error('You must be logged in')
        }

        const question = {
            content: newQuestion,
            author: {
                name: user?.name,
                avatar: user.avatar
            },
            isHighlighted: false,
            isAnswered: false
        }

        await database.ref(`rooms/${id}/questions`).push(question)

        setNewQuestion('')
    }
    

    return (
        <>
            <Head>
                <title> Room </title>
            </Head> 

            <div>
                <Header>
                    <Content>
                        <Image 
                            src={logo} 
                            alt='letmeask' 
                            height={45}
                        />
                        <RoomCode code={ String(id) }/>
                    </Content>
                </Header>

                <Wrapper>
                    <Container>
                        <h1> Sala {title} </h1>
                        {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
                    </Container>

                    <Forms onSubmit={handleSendQuestion}>
                        <textarea 
                            placeholder='O que você quer perguntar? '
                            value={newQuestion}
                            onChange={event => setNewQuestion(event.target.value)}
                        />
                        <FooterForm>
                            { user ? 
                                (
                                    <UserInfo>
                                        <div style={{borderRadius: '50%', overflow: 'hidden'}}>
                                            <Image 
                                                src={user.avatar} 
                                                alt={user.name}
                                                width={32}
                                                height={32}
                                            />
                                        </div>
                                        <span>{user.name}</span>
                                    </UserInfo>
                                ) : 
                                (
                                    <span>
                                        Para enviar uma pergunta, <button type="submit" > faça seu login </button>
                                    </span>  
                                ) 
                            }
                            <Button 
                                type="submit"
                                className="purple"
                                disabled={!user}
                            > 
                                Enviar Pergunta 
                            </Button>
                        </FooterForm>
                    </Forms>
                </Wrapper>

            </div>
        </>
    )
}

export default Room