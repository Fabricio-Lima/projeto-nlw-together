import { ButtonHTMLAttributes } from 'react'
import { Content } from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    isOutlined?: boolean
}

const Button = ({isOutlined = false, ...Props}: ButtonProps) => {

    return (
        <Content 
            {...Props} 
            className={`button ${isOutlined} ? 'outlined' : ''`}
        />
    )
}

export default Button