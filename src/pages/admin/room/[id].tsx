import { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import { useRouter } from "next/router"
import { useState } from "react"
import logo from '../../../assets/images/logo.svg'
import { Button, Question, RoomCode, Modal } from '../../../components/index'
import { useAuth } from "../../../context/auth.context"
import useRoom from "../../../hooks/useRoom"
import { database } from "../../../services/firebase"
import 
{
    ButtonsModal,
    ButtonsNavBar,
    Container, 
    Content, 
    ContentModal, 
    Header, 
    QuestionList, 
    Wrapper, 
    WrapperModal
} from "./styles"

const Room: NextPage = () => {
    const router = useRouter()
    const roomId = router.query.id
    const { user } = useAuth()
    const { questions, title } = useRoom(String (roomId))
    const [ modalIsOpen, setModalIsOpen ] = useState(false)
    
    const handleEndRoom = async () => {
        await database.ref(`rooms/${roomId}`).update({
            endAt: new Date()
        })
        
        await router.push('/')
    }

    const handleDeleteQuestion = async (questionId: string) => {
        await database.ref(`rooms/${roomId}/questions/${questionId}`).remove()
        setModalIsOpen(false)
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
                    <ButtonsNavBar>
                        <RoomCode code={ String(roomId) }/>
                        <Button 
                            isOutlined
                            onClick={handleEndRoom}
                        > 
                            Encerrar sala 
                        </Button>
                    </ButtonsNavBar>
                </Content>
            </Header>

            <Wrapper>
                <Container>
                    <h1> {title} </h1>
                    {questions.length > 0 && 
                    <span>{questions.length} pergunta(s)</span>}
                </Container>
                
                <QuestionList>
                    {questions.map(question => {
                        return (
                            <Question 
                                key={question.id} 
                                content={question.content} 
                                author={question.author.name} 
                                avatar={question.author.avatar}
                            >
                                <button 
                                    type="button" 
                                    onClick={() => setModalIsOpen(true)}
                                >
                                    <svg 
                                        width="24" 
                                        height="24" 
                                        viewBox="0 0 24 24" 
                                        fill="none" 
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path 
                                            d="M3 5.99988H5H21" 
                                            stroke="#737380" 
                                            strokeWidth="1.5" 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round"
                                        />
                                        <path 
                                            d="M8 5.99988V3.99988C8 3.46944 8.21071 
                                            2.96074 8.58579 2.58566C8.96086 2.21059 
                                            9.46957 1.99988 10 1.99988H14C14.5304 
                                            1.99988 15.0391 2.21059 15.4142 2.58566C15.7893 
                                            2.96074 16 3.46944 16 3.99988V5.99988M19 
                                            5.99988V19.9999C19 20.5303 18.7893 21.039 
                                            18.4142 21.4141C18.0391 21.7892 17.5304 
                                            21.9999 17 21.9999H7C6.46957 21.9999 5.96086 
                                            21.7892 5.58579 21.4141C5.21071 21.039 5 
                                            20.5303 5 19.9999V5.99988H19Z" 
                                            stroke="#737380" 
                                            strokeWidth="1.5" 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </button>
                                <Modal status={modalIsOpen}>                                        
                                    <ContentModal>
                                        <svg 
                                            width="50" 
                                            height="100%" 
                                            viewBox="0 0 24 24" 
                                            fill="none" 
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path 
                                                d="M3 5.99988H5H21" 
                                                stroke="#737380" 
                                                strokeWidth="2" 
                                                strokeLinecap="round" 
                                                strokeLinejoin="round"
                                            />
                                            <path 
                                                d="M8 5.99988V3.99988C8 3.46944 8.21071 
                                                2.96074 8.58579 2.58566C8.96086 2.21059 
                                                9.46957 1.99988 10 1.99988H14C14.5304 
                                                1.99988 15.0391 2.21059 15.4142 2.58566C15.7893 
                                                2.96074 16 3.46944 16 3.99988V5.99988M19 
                                                5.99988V19.9999C19 20.5303 18.7893 21.039 
                                                18.4142 21.4141C18.0391 21.7892 17.5304 
                                                21.9999 17 21.9999H7C6.46957 21.9999 5.96086 
                                                21.7892 5.58579 21.4141C5.21071 21.039 5 
                                                20.5303 5 19.9999V5.99988H19Z" 
                                                stroke="#737380" 
                                                strokeWidth="2" 
                                                strokeLinecap="round" 
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        <WrapperModal>
                                            <h1>
                                                Excluir pergunta
                                            </h1>
                                            <span>
                                                Tem certeza que você deseja excluir esta pergunta?
                                            </span>
                                        </WrapperModal>

                                        <ButtonsModal>
                                            <Button
                                                type="button"
                                                onClick={() => setModalIsOpen(false)} 
                                            > 
                                                Cancelar 
                                            </Button>
                                            <Button 
                                                onClick={() => handleDeleteQuestion(question.id)}
                                            >
                                                Sim, excluir
                                            </Button>
                                        </ButtonsModal>
                                    </ContentModal>
                                </Modal>
                            </Question>
                        )                                 
                    })}
                </QuestionList>
            </Wrapper>
        </>
    )
}

export default Room