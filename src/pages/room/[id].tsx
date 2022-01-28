import { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import { useRouter } from "next/router"
import { FormEvent, useState } from "react"
import logo from '../../assets/images/logo.svg'
import { Button, Question, RoomCode } from '../../components/index'
import { useAuth } from "../../context/auth.context"
import useRoom from "../../hooks/useRoom"
import { database } from "../../services/firebase"
import 
{   Container, 
    Content, 
    FooterForm, 
    Forms, 
    Header, 
    QuestionList, 
    UserInfo, 
    Wrapper 
} from "./styles"

const Room: NextPage = () => {
    
    const router = useRouter()
    const roomId = router.query.id
    const { user } = useAuth()
    const { questions, title } = useRoom(String (roomId))
    const [ newQuestion, setNewQuestion ] = useState('')

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

        await database.ref(`rooms/${roomId}/questions`).push(question)

        setNewQuestion('')
    }

    return (
        <>
            <Head>
                <title> Room </title>
            </Head> 

            <Header>
                <Content>
                    <Image 
                        src={logo} 
                        alt='letmeask' 
                        height={45}
                    />
                    <RoomCode code={ String(roomId) }/>
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
                            disabled={!user}
                        > 
                            Enviar Pergunta 
                        </Button>
                    </FooterForm>
                </Forms>
                
                <QuestionList>
                    {questions.map(question => {
                        return (
                            <Question 
                                key={question.id} 
                                content={question.content} 
                                author={question.author.name} 
                                avatar={question.author.avatar}
                            />
                        )                                 
                    })}
                </QuestionList>
            </Wrapper>
        </>
    )
}

export default Room