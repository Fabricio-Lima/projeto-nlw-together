import { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import { useRouter } from "next/router"
import logo from '../../assets/images/logo.svg'
import Button from "../../components/Button"
import RoomCode from "../../components/RoomCode"
import { Container, Content, FooterForm, Forms, Header, Wrapper } from "./styles"

const Room: NextPage = () => {
    const router = useRouter()

    return (
        <>
            <Head>
                <title> Room </title>
            </Head>

            <div>
                <Header>
                    <Content>
                        <Image src={logo} alt='letmeask' height={45}/>
                        <RoomCode />
                    </Content>
                </Header>

                <Wrapper>
                    <Container>
                        <h1> Sala React </h1>
                        <span> 4 perguntas </span>
                    </Container>

                    <Forms>
                        <textarea placeholder='O que você quer perguntar? '/>
                        <FooterForm>
                            <span>
                                Para enviar uma pergunta, <button type="submit" > faça seu login </button>
                            </span>
                            <Button 
                                type="submit"
                                className="purple"
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