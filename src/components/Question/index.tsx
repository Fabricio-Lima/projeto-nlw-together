import Image from 'next/image'
import { Footer, Section, UserInfo } from './styles'

type QuestionProps = {
    content: string,
    author: string,
    avatar: string
}

const Question = ({ author, avatar, content }: QuestionProps) => {
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
                <div>
                    { /***/ }
                </div>
            </Footer>
        </Section>
    )
}

export default Question