import { ButtonHTMLAttributes } from 'react'
import { Content } from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const Button = (Props: ButtonProps) => {

    return (
        <Content {...Props}/>
    )
}

export default Button