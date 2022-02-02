import Image from 'next/image'
import { ReactNode } from 'react'
import { Buttons, Footer, Section, UserInfo } from './styles'
import cx from 'classnames'

type QuestionProps = {
    content: string,
    author: string,
    avatar: string
    children?: ReactNode,
    isAnswered?: boolean,
    isHighlighted?: boolean
}

const Question = (
    {   author, 
        avatar, 
        content, 
        children, 
        isAnswered = false, 
        isHighlighted = false 
    }: QuestionProps) => {


    return (
        <Section 
            className={cx( 
                { answered: isAnswered}, 
                { highlighted: isHighlighted && (!isAnswered) }, 
            )}
        >
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