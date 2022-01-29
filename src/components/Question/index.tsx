import Image from 'next/image'
import { ReactNode } from 'react'
import { Buttons, Footer, Section, UserInfo } from './styles'

type QuestionProps = {
    content: string,
    author: string,
    avatar: string
    children?: ReactNode
}

const Question = ({ author, avatar, content, children }: QuestionProps) => {
    return (
        <Section>
            <p>
                {content}
            </p>
            <Footer>
                <UserInfo>
                    <div style={{borderRadius: '50%', overflow: 'hidden'}}>
                        <Image 
                            src={avatar} 
                            alt={author}
                            width={32}
                            height={32}
                        />
                    </div>
                    <span>
                        {author}
                    </span>
                </UserInfo>
                <Buttons>
                    {children}
                </Buttons>
            </Footer>
        </Section>
    )
}

export default Question